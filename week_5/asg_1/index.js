const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
  .name('todo_app')
  .description('CLI to add,delete,marked as done  the tasks')
  .version('0.8.0');


program.command('add')
  .description('add a task ')
  .argument('<file>', 'file for todo operations')
  .argument('<task>', 'task in operation')
  .action((file,task) => {
   const data = fs.readFileSync(`${file}.json`, "utf-8");
   const json = JSON.parse(data);
   json[task] = "not done";
   fs.writeFileSync(`${file}.json`, JSON.stringify(json, null, 2));
  });
program.command('mark')
  .description('marked done  ')
  .argument('<file>', 'file for todo operations')
  .argument('<task>', 'task in operation')
  .action((file,task) => {
   const data = fs.readFileSync(`${file}.json`, "utf-8");
   const json = JSON.parse(data);
   json[task] = " done";
   fs.writeFileSync(`${file}.json`, JSON.stringify(json, null, 2));
  });

program.command('delete')
  .description('deleteing task')
  .argument('<file>', 'file for todo operations')
  .argument('<task>', 'task in operation')
  .action((file,task) => {
   const data = fs.readFileSync(`${file}.json`, "utf-8");
   const json = JSON.parse(data);
   delete json[task];
   fs.writeFileSync(`${file}.json`, JSON.stringify(json, null, 2));
  });



program.parse();