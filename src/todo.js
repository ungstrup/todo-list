class Todo {
    #id = crypto.randomUUID();
    constructor(title, description, dueDate, priority, notes) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
    };

    editDetails(title,description, dueDate,priority,notes) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
    }  

    getDetails() {
        return {title: this.title, description: this.description, dueDate: this.dueDate, priority: this.priority, notes: this.notes};
    };

    static getID(todo) {
        return todo.#id; 
    };
};

export {Todo}
