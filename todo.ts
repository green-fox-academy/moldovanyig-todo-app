export class Todo {
  listTask(): void {
    try {
      const fs = require('fs');
      let fileContent: string = fs.readFileSync('todolist.txt', 'utf-8');
      let numberOfLines: number = fileContent.split('\n').length;
      if (fileContent === '') {
        console.log('No todos for today! :)');
      } else {
        for (let i: number = 0; i < numberOfLines; i++) {
          console.log(`${i + 1} - ${fileContent.split('\n')[i]}`);
        }
      }
    } catch (e) {
      console.log(`Unable to read file: list-of-tasks.txt`);
    }
  }
  addTask() {
    try {
      const fs = require('fs');
      let properIndex: number = process.argv.indexOf('-a') + 1;
      if (!process.argv[properIndex]) throw new Error();
      fs.appendFileSync('todolist.txt', '\n' + process.argv[properIndex]);
    } catch (Error) {
      console.log('Unable to add: no task provided');
    }
  }
  removeTask() {
    try {
      const fs = require('fs');
      let fileContent: string = fs.readFileSync('todolist.txt', 'utf-8');
      let splittedContent: string[] = fileContent.split('\n');
      let properIndex: number = process.argv.indexOf('-r') + 1;
      let deleteLineNumber: any = process.argv[properIndex];
      let deleteTask = fileContent.replace(splittedContent[deleteLineNumber - 1] + '\n', '');
      if (!process.argv[properIndex]) throw new Error();
      else if (deleteLineNumber == splittedContent.length) {
        fs.writeFileSync('todolist.txt', fileContent.replace('\n' + splittedContent[splittedContent.length - 1], ''));
      } else fs.writeFileSync('todolist.txt', deleteTask);
    } catch (Error) {
      console.log('Unable to remove: no index provided');
    }
  }
  completeTask() {
    const fs = require('fs');
    let fileContent: string = fs.readFileSync('todolist.txt', 'utf-8');
    let numberOfLines: number = fileContent.split('\n').length;
    let properIndex: number = process.argv.indexOf('-c') + 1;
    let checkedLineNumber: any = process.argv[properIndex];
    for (let i: number = 0; i < numberOfLines; i++) {
      if (i === checkedLineNumber - 1) {
        console.log(`${i + 1} - [x] - ${fileContent.split('\n')[i]}`);
      } else console.log(`${i + 1} - [ ] - ${fileContent.split('\n')[i]}`);
    }
  }
}
