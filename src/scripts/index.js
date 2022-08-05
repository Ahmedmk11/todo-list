import {Task, Project, Tag} from './app.js'
import {showProjects, showTasks} from './ui.js'

let tasksArr = [];
let projectsArr = [];
let tagsArr = [];


const content = document.getElementById('content')
const sidebar = document.getElementById('side-bar');
const sidebarIcon = document.getElementById('side-bar-icon');

let task1 = new Task('test1', 'test test1shfdblsdfblkdsfbkjhfdjdfsbjhidsbjhidf', '4/20', '6:09', ['tag1', 'tag2', 'tag3'], 3);
let task2 = new Task('test2', 'test test2', '4/20', '6:09', ['tag1', 'tag2', 'tag3'], 3);
let task3 = new Task('test3', 'test test3', '4/20', '6:09', '' , 3);

let p1 = new Project('project 1');
let p2 = new Project('project 2');
let p3 = new Project('project 3');

tasksArr.push(task1)
tasksArr.push(task2)
tasksArr.push(task3)

projectsArr.push(p1);
projectsArr.push(p2);
projectsArr.push(p3);

let t = showTasks('TEST', tasksArr);
content.appendChild(t);

showProjects(projectsArr);

sidebarIcon.addEventListener('click', () => {
    sidebarIcon.classList.toggle('show');
    sidebar.classList.toggle('slide');
    t.classList.toggle('slide-left');
});
