export class Project {
    constructor(title) {
        this.title = title;
    }
}

export class Task {
    constructor(title, description, dueDate,
    dueTime, tags, priority, isComplete = false) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.dueTime = dueTime;
        this.tags = tags;
        this.priority = priority;
        this.isComplete = isComplete;
    }
}

export class Tag {
    constructor(title) {
        this.title = title;
    }
}
