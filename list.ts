import { Todo } from './todo';

let myTodo = new Todo();

if (process.argv[2] === undefined) {
  console.log(
    'Command Line Todo application\r\n=============================\r\n\r\nCommand line arguments:\r\n    -l   Lists all the tasks\r\n    -a   Adds a new task\r\n    -r   Removes a task\r\n    -c   Completes a task'
  );
} else if (process.argv[2] === '-l') {
  myTodo.listTask();
} else if (process.argv[2] === '-a') {
  myTodo.addTask();
} else if (process.argv[2] === '-r') {
  myTodo.removeTask();
} else if (process.argv[2] === '-c') {
  myTodo.completeTask();
}
