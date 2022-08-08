import Quit from '../assets/images/quit.png';

import {Task, Project} from './app.js'
import {showProjects, showTasks, mode, setMode} from './ui.js'

export let projectsArr = [];
let formFlag = true;
let formFlag2 = true;
let allTags = [];

export let _default = new Project('All Tasks');

showProjects(projectsArr);
showTasks(_default.tasks);

const sidebar = document.getElementById('side-bar');
const sidebarIcon = document.getElementById('side-bar-icon');
const projectPlus = document.getElementById('plus-icon-side');
const taskPlus = document.getElementById('task-add-plus');

sidebarIcon.addEventListener('click', () => {
    sidebarIcon.classList.toggle('show');
    sidebar.classList.toggle('slide');
    document.getElementById('content').classList.toggle('slide-left');
});

projectPlus.addEventListener('click', addProject);
taskPlus.addEventListener('click', addTask);

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
        add.addEventListener('click', onAddProject);
        cancel.addEventListener('click', onCancel);
        formFlag = false;
    }
}

function onAddProject() {
    const input = document.getElementById('project-form-name');
    if (input.reportValidity()) {
        const add = document.getElementById('add-button');
        let project = new Project(input.value);
        projectsArr.push(project);
        showProjects(projectsArr);
        formFlag = true;

        add.removeEventListener('click', onAddProject);
    }
}

function onCancel() {
    const cancel = document.getElementById('cancel-button');
    showProjects(projectsArr);
    formFlag = true;
    cancel.removeEventListener('click', onAddProject);
}

export function onDeleteProj(event) {
    const project = event.target.parentNode;
    const index = project.id.split('-')[1];
    let rtasks = projectsArr[project.id.split('-')[1]].tasks
    _default.tasks.forEach(element => {
        if (rtasks.includes(element)) {
            _default.tasks.splice(_default.tasks.indexOf(element), 1)
        }
    });
    setMode(_default.title);
    showTasks(_default.tasks);
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

export function addTask() {
    if (formFlag2) {
        const quit = new Image();
        const div = document.createElement('div');
        const add = document.createElement('button');
        const form = document.createElement('form');
        const title = document.createElement('input');
        const desc = document.createElement('input');
        const dueDate = document.createElement('input');
        const dueTime = document.createElement('input');
        const priority = document.createElement('input');
        const tags = document.createElement('select');
        const op1 = document.createElement('option');
        const op2 = document.createElement('option');
        const op3 = document.createElement('option');
        const op4 = document.createElement('option');
        const op5 = document.createElement('option');
        const op6 = document.createElement('option');
        const mask = document.createElement('div');

        title.id = 'form1';
        desc.id = 'form2';
        dueDate.id = 'form3';
        dueTime.id = 'form4';
        priority.id = 'form5';
        tags.id = 'form6';

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
        desc.setAttribute('maxlength', '78');
        desc.setAttribute('autocomplete', 'off');
        desc.setAttribute('required', '');

        dueDate.setAttribute('type', 'date');
        dueDate.setAttribute('min', new Date().toJSON().slice(0,10));
        dueDate.setAttribute('required', '');
        
        dueTime.setAttribute('type', 'time');
        dueTime.setAttribute('required', '');

        tags.setAttribute('name', 'tagSelect');
        tags.setAttribute('required', '');

        op1.setAttribute('value', '');
        op1.setAttribute('disabled', '');
        op1.setAttribute('selected', '');

        op2.setAttribute('value', 'red');
        op3.setAttribute('value', 'blue');
        op4.setAttribute('value', 'green');
        op5.setAttribute('value', 'yellow');
        op6.setAttribute('value', 'purple');

        priority.setAttribute('type', 'number');
        priority.setAttribute('placeholder', '*Priority (1-3)');
        priority.setAttribute('maxlength', '1');
        priority.setAttribute('min', '1');
        priority.setAttribute('max', '3');
        priority.setAttribute('autocomplete', 'off');
        priority.setAttribute('required', '');

        quit.src = Quit;
        add.textContent = 'Add';
        op1.textContent = 'Tag';
        op2.textContent = 'Red';
        op3.textContent = 'Blue';
        op4.textContent = 'Green';
        op5.textContent = 'Yellow';
        op6.textContent = 'Purple';

        form.id = 'add-task-form';
        div.id = 'task-form-container';
        mask.id = 'mask';
        add.id = 'task-add-btn';

        document.getElementById('middle').classList.add('popup');
        document.querySelector('header').classList.add('popup');
        document.querySelector('footer').classList.add('popup');
        document.body.appendChild(mask);

        tags.append(op1);
        tags.append(op2);
        tags.append(op3);
        tags.append(op4);
        tags.append(op5);
        tags.append(op6);
        form.appendChild(title);
        form.appendChild(desc);
        form.appendChild(dueDate);
        form.appendChild(dueTime);
        form.appendChild(tags);
        form.appendChild(priority);
        div.appendChild(quit);
        div.appendChild(form);
        div.appendChild(add);
        document.body.appendChild(div);
        add.addEventListener('click', onAddTask);

        quit.addEventListener('click', () => {
            document.getElementById('middle').classList.remove('popup');
            document.querySelector('header').classList.remove('popup');
            document.querySelector('footer').classList.remove('popup');
            document.body.removeChild(mask);
            document.body.removeChild(div);
            formFlag2 = true;
        })

        formFlag2 = false;
    }
}

function onAddTask() {
    const title = document.getElementById('form1');
    const desc = document.getElementById('form2');
    const date = document.getElementById('form3');
    const time = document.getElementById('form4');
    const priority = document.getElementById('form5');
    const tags = document.getElementById('form6');

    if (title.reportValidity() && desc.reportValidity() && date.reportValidity()
    && time.reportValidity() && priority.reportValidity() && tags.reportValidity()) {
        const add = document.getElementById('task-add-btn');

        let task = new Task(title.value, desc.value, date.value, time.value, priority.value, tags.value);
        _default.tasks.push(task);
        allTags.push(tags.value);
        projectsArr.forEach(element => {
            if (element.title === mode) {
                element.tasks.push(task);
                showTasks(element.tasks);
            }
        });

        if (mode === 'All Tasks') {
            showTasks(_default.tasks);
        }
        
        const taskPlus = document.getElementById('task-add-plus');
        taskPlus.addEventListener('click', addTask);
        add.removeEventListener('click', onAddTask);
        document.getElementById('middle').classList.remove('popup');
        document.querySelector('header').classList.remove('popup');
        document.querySelector('footer').classList.remove('popup');
        document.body.removeChild(document.getElementById('mask'));
        document.body.removeChild(document.getElementById('task-form-container'));
        formFlag2 = true;
    }
}

export function onFinished(event) {
    let task;
    if (event.target.tagName === 'DIV'){
        task = event.target.parentNode.parentNode;
    } else {
        task = event.target.parentNode.parentNode.parentNode;
    }
    const index = task.id.split('-')[1];
    _default.tasks[index].finished = true;
    let name = task.children[0].children[1];
    name.classList.add('crossed');
}

export function onDeleteTask(event) {
    let task;
    if (event.target.tagName === 'DIV'){
        task = event.target.parentNode.parentNode;
    } else {
        task = event.target.parentNode.parentNode.parentNode;
    }
    const index = task.id.split('-')[1];
    _default.tasks.splice(index,1);
    task.parentNode.removeChild(task);
    let i = 0;
    let arr = [].slice.call(document.getElementById('tasks').children);
    arr.forEach(element => {
        if (element.classList.contains('task-item')) {
            element.id = `task-${i}`;
            i++;
        }
    });
}

const dateBtn = document.getElementById('date-t');
const finishedBtn = document.getElementById('finished-t');
const tagsBtn = document.getElementById('tags-t');
const priorityBtn = document.getElementById('priority-t');

finishedBtn.addEventListener('click', () => {
    setMode('Finished Tasks');
    let allfinished = _default.tasks.filter(task => task.finished);
    showTasks(allfinished);
});

dateBtn.addEventListener('click', () => {

});

tagsBtn.addEventListener('click', () => {
    
});

priorityBtn.addEventListener('click', () => {
    
});
