class ProjectHandler {
    constructor() {
        this.projects = [];
    }
    addProject = (name, {todoList}) => {
        this.projects.push({name: name, id: crypto.randomUUID() , todoList}); 
    };
    getProjects = () => {
        return this.projects;
    };
    filterProjects = (id) => {
        return this.projects.filter(project => id === project.id);
    };
}

export {ProjectHandler};
