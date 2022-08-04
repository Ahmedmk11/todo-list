import addIcon from './ui.js'
let tasks = [];
let projects = [];
let tags = [];

class Project {
    constructor(title) {
        this.title = title
        this.icon = addIcon();
    }
}

class Task {
    constructor(title, description, dueDate = 'none', dueTime = 'none', tags = ['all'], priority = 1, isComplete = false) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.dueTime = dueTime;
        this.tags = tags;
        this.priority = priority;
        this.isComplete = isComplete;
    }
}

class Tag {
    constructor(title) {
        this.title = title;
    }
}
