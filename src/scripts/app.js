export class Project {
    constructor(title) {
        this.title = title;
        this.tasks = [];
    }
}

export class Task {
    constructor(title, description, dueDate,
    dueTime, priority, tags = '') {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.dueTime = dueTime;
        this.priority = priority;
        this.tags = tags;
        this.finished = false;
    }
}
