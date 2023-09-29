const tasks =[];

//add task function
const addtask=(task) =>{
tasks.push(task);
console.log(`task "${task}" added.`);
return tasks.length;
};
//list all tasks available
const listAllTasks = () => {
    console.log('All tasks:');
    tasks.forEach((task, index) =>{
        console.log(`${index + 1}. ${task}`);
    });
};

//function for deleting tasks
const deleteTask = (task) => {
const index = tasks.indexOf(task);
if (index !== -1){
    tasks.splice(index,1);
    console.log(`Task "${task}" deleted.`)
}
else{
    console.log(`Task "${task}" not found.`)
}
return task.length;
};
//calling functions
addtask("buy groceries");
addtask("finish homework");
listAllTasks();
deleteTask("buy groceries");
listAllTasks();
