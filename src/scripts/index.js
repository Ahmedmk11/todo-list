import Quit from '../assets/images/quit.png';
import {Task, Project, Tag} from './app.js'
import {showProjects, showTasks} from './ui.js'

let tasksArr = [];
let projectsArr = [];
let tagsArr = [];
let formFlag = true;
let formFlag2 = true;

showProjects(projectsArr);
showTasks('All Tasks', tasksArr);

const sidebar = document.getElementById('side-bar');
const sidebarIcon = document.getElementById('side-bar-icon');
const projectPlus = document.getElementById('plus-icon-side');
const tasks = document.getElementById('tasks');

sidebarIcon.addEventListener('click', () => {
    sidebarIcon.classList.toggle('show');
    sidebar.classList.toggle('slide');
    tasks.classList.toggle('slide-left');
});

const header = document.getElementById('current-project');
projectPlus.addEventListener('click', addProject);
// taskPlus
header.addEventListener('click', addTask);

function addProject() {
    if (formFlag) {
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
        input.setAttribute('placeholder', 'Project Title');
        input.setAttribute('minlength', '1');
        input.setAttribute('maxlength', '12');
        input.setAttribute('autocomplete', 'off');
        input.setAttribute('required', '');
        form.id = 'project-form';
        input.id = 'project-form-name';
        container.id = 'form-container';
        add.id = 'add-button';
        cancel.id = 'cancel-button';
        buttons.id = 'btns';
        buttons.appendChild(add);
        buttons.appendChild(cancel);
        form.appendChild(input);
        container.appendChild(form);
        container.appendChild(buttons);
        projectPlus.parentNode.insertBefore(container, projectPlus);
        add.addEventListener('click', onAdd);
        cancel.addEventListener('click', onCancel);
        formFlag = false;
    }
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

export function onDelete(event) {
    const project = event.target.parentNode;
    const index = event.target.parentNode.id.split('-')[1];
    projectsArr.splice(index, 1)
    project.parentNode.removeChild(project);
    let i = 0;
    let flag = true;
    let arr = [].slice.call(document.getElementById('projects').children);
    arr.forEach(element => {
        if (element.tagName !== 'IMG'){
            if (flag) {
                flag = false;
                return;
            }
            element.id = `project-${i}`;
            i++;
        }
    });
}

function addTask() {
    if (formFlag2) {
        const quit = new Image();
        const div = document.createElement('div');
        const add = document.createElement('button');
        const form = document.createElement('form');
        const title = document.createElement('input');
        const desc = document.createElement('input');
        const dueDate = document.createElement('input');
        const dueTime = document.createElement('input');
        const tags = document.createElement('input');
        const priority = document.createElement('input');

        form.setAttribute('action', '#');
        form.setAttribute('method', 'get');
        form.setAttribute('name', 'taskForm');

        title.setAttribute('type', 'text');
        title.setAttribute('placeholder', '*Task Title');
        title.setAttribute('minlength', '1');
        title.setAttribute('maxlength', '12');
        title.setAttribute('autocomplete', 'off');
        title.setAttribute('required', '');

        desc.setAttribute('type', 'text');
        desc.setAttribute('placeholder', '*Description');
        desc.setAttribute('minlength', '1');
        desc.setAttribute('maxlength', '32');
        desc.setAttribute('autocomplete', 'off');
        desc.setAttribute('required', '');

        dueDate.setAttribute('type', 'date');
        dueDate.setAttribute('min', new Date().toJSON().slice(0,10));
        dueDate.setAttribute('required', '');
        
        dueTime.setAttribute('type', 'time');
        dueTime.setAttribute('min', convertTime12to24(timeNow()));
        dueTime.setAttribute('required', '');

        tags.setAttribute('type', 'text');
        tags.setAttribute('placeholder', 'Tags');
        tags.setAttribute('minlength', '1');
        tags.setAttribute('maxlength', '32');
        tags.setAttribute('autocomplete', 'off');
        tags.setAttribute('style', 'border: 2px black solid;')

        priority.setAttribute('type', 'text');
        priority.setAttribute('placeholder', '*Priority (1-3)');
        priority.setAttribute('maxlength', '1');
        priority.setAttribute('min', '1');
        priority.setAttribute('max', '3');
        priority.setAttribute('autocomplete', 'off');
        priority.setAttribute('required', '');

        quit.src = Quit;
        add.textContent = 'Add';

        form.classList.add('popup');
        form.id = 'add-task-form';
        div.id = 'task-form-container';

        form.appendChild(quit);
        form.appendChild(title);
        form.appendChild(desc);
        form.appendChild(dueDate);
        form.appendChild(dueTime);
        form.appendChild(tags);
        form.appendChild(priority);
        div.appendChild(form);
        div.appendChild(add);
        document.body.appendChild(div);
        formFlag2 = false;
    }
}

function timeNow() {
    return new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
}

const convertTime12to24 = (time12h) => {
    const [time, modifier] = time12h.split(' ');
  
    let [hours, minutes] = time.split(':');
  
    if (hours === '12') {
      hours = '00';
    }
  
    if (modifier === 'PM') {
      hours = parseInt(hours, 10) + 12;
    }
  
    return `${hours}:${minutes}`;
}
  