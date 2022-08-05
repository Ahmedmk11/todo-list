import { add } from 'date-fns';
import {Task, Project, Tag} from './app.js'
import {showProjects, showTasks} from './ui.js'

let tasksArr = [];
let projectsArr = [];
let tagsArr = [];
let formFlag = true;

showProjects(projectsArr)

const content = document.getElementById('content')
const sidebar = document.getElementById('side-bar');
const sidebarIcon = document.getElementById('side-bar-icon');
const projectPlus = document.getElementById('plus-icon-side');

let task1 = new Task('test1', 'test test1shfdblsdfblkdsfbkjhfdjdfsbjhidsbjhidf', '4/20', '6:09', ['tag1', 'tag2', 'tag3'], 3);
let task2 = new Task('test2', 'test test2', '4/20', '6:09', ['tag1', 'tag2', 'tag3'], 3);
let task3 = new Task('test3', 'test test3', '4/20', '6:09', '' , 3);

tasksArr.push(task1)
tasksArr.push(task2)
tasksArr.push(task3)

let t = showTasks('TEST', tasksArr);
content.appendChild(t);

sidebarIcon.addEventListener('click', () => {
    sidebarIcon.classList.toggle('show');
    sidebar.classList.toggle('slide');
    t.classList.toggle('slide-left');
});

projectPlus.addEventListener('click', () => {
    if (formFlag) {
        addProject();
        formFlag = false;
    }
});

function addProject() {
    const container = document.createElement('div');
    const buttons = document.createElement('div');
    const form = document.createElement('form');
    const input = document.createElement('input');
    const add = document.createElement('button');
    const cancel = document.createElement('button');

    add.textContent = 'Add';
    cancel.textContent = 'Cancel';
    form.setAttribute('action', '#');
    form.setAttribute('method', 'get');
    form.setAttribute('name', 'projectForm');
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'Project Name');
    input.setAttribute('minlength', '1');
    input.setAttribute('maxlength', '12');
    input.setAttribute('autocomplete', 'off');
    input.setAttribute('required', '');
    form.id = 'project-form';
    input.id = 'project-form-name';
    container.id = 'form-container';
    add.id = 'add-button';
    cancel.id = 'cancel-button';
    buttons.appendChild(add);
    buttons.appendChild(cancel);
    form.appendChild(input);
    container.appendChild(form);
    container.appendChild(buttons);
    projectPlus.parentNode.insertBefore(container, projectPlus);

    add.addEventListener('click', onAdd);
    cancel.addEventListener('click', onCancel);
}

function onAdd() {
    const input = document.getElementById('project-form-name');
    if (input.reportValidity()) {
        const add = document.getElementById('add-button');
        let project = new Project(input.value);
        projectsArr.push(project);
        showProjects(projectsArr);
        formFlag = true;

        add.removeEventListener('click', onAdd);
    }
}

function onCancel() {
    const cancel = document.getElementById('cancel-button');
    showProjects(projectsArr);
    formFlag = true;
    cancel.removeEventListener('click', onAdd);
}
