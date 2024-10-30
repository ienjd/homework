'use strict'

const toDoList = {
    tasks: [
      { 
        id: 1, 
        title: "Учить JS",
        priority: 1
      },
    ],

    addTask: function(title, priority){
      this.tasks.push({
        id: this.tasks.length + 1,
        title: title,
        priority: priority
      })
    },

    deleteTask: function(id) {
       this.tasks = this.tasks.filter(element => element.id !== id);
    },

    updateTask: function(id, title, priority){
      let element = this.tasks.filter(element => element.id === id).at(0);
      if (typeof(arguments[1]) === "string" && typeof(arguments[2]) === "number"){
        element.title = title;
        element.priority = priority;
        return;
      }
    },

    sortTasks: function(){
      this.tasks.sort((a,b) =>b.priority - a.priority);
    }
}
