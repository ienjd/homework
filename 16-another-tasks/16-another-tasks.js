'use strict'

const toDoList = {

    lastId: 1,
    
    tasks: [
      { 
        id: 1, 
        title: "Учить JS",
        priority: 1
      },
    ],

    findById: function (taskId) {
      if(!this){
          console.log('Необходима связка this. Используйте методы call/apply/bind');
          return;
      }
      if (!taskId) {
          console.log(`Значение ID не передано или передано некорректно`);
          return;
      }
      if(!this.tasks){
          console.log('Ничего не найдено. tasks не существует в данном контексте');
          return;
      }
      const task = this?.tasks?.find(({ id }) => id === taskId) ?? null;

      if (!task) {
          console.log(`Задача с id ${taskId} еще не добавлена в ваш список дел.`);
      }
      return task;
  },

  addTask(priority, title) {
    if(!title){
        console.log(`Название задачи не может быть пустым`);
        return;
    }
    if(!priority){
        console.log(`Приоритет задачи не может быть пустым`);
        return;
    }
    
      this.tasks.push({
        id: ++this.lastId,
        priority,
        title,
      });

      console.log(
        `Новая задача добавлена.\nВаши задачи: ${this.tasks
          .map((el) => el.title)
          .join(", ")}`
      );
  },

    updateTask: function (id, title, priority) {
      const task = toDoList.findById(id);
      if (task) {
        task.title = title ? title : task.title;
        task.priority = priority ? priority : task.priority;
        if(title || priority){
            console.log(`Задача с id: ${id} успешно обновлена.`);
         }
      } 
      return this;
  },

    deleteTask(id) {
      const task = this.findById(id);
      if (task) {
        this.tasks = this.tasks.filter(f => f.id !== id)
        console.log(`Задача с id: ${id} успешно удалена.`);
      } 
      return this;
  },

    sortTasks: function(){
      this.tasks.sort((a,b) => b.priority - a.priority);
    },
}

const newTask = {
  tasks: [{   
    id: 1,
    name: "test",
    description: "описание",
    priority: 0
  }],

  lastId: 1,

  removeTask (id) {
    const task = toDoList.findById.call(this, id);
    if (task) {
        console.log(`Задача с id ${id} успешно удалена`);
        this.tasks = this.tasks.filter((el) => el.id !== id);
    }
    return this;
  },

  sortNewTask(){
    const sortNewTask = toDoList.sortTasks;
    sortNewTask.call(newTask)
  },

  addNewTask(priority, title){
    const addToNewTask = toDoList.addTask.bind(this);
    const newObject = addToNewTask(priority, title);
    return newObject;
  },

  setDescription(id, description){
    const task = this.tasks.find(t => t.id === id);
    
    if (!task) {
        console.log(`Задача с id ${id} не найдена.`);
        return;
    }
    task.description = description;
    console.log(`Описание задачи с id ${id} успешно обновлено.`);
    console.log(this.tasks);
  },

  updateNewTask(id, title, priority, description) {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
        toDoList.updateTask.call(this, id, title, priority);
        task.description = description;  
        console.log(`Задача с id ${id} успешно обновлена.`);
    } else {
        console.log(`Задача с id ${id} не найдена.`);
    }
    return this;
}
}

