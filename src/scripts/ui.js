import Sidebar from '../assets/images/side-bar.png';
import Plus from '../assets/images/plus.png';
import Project from '../assets/images/projects.png';
import Home from '../assets/images/home.png';
import List from '../assets/images/list.png';
import Date from '../assets/images/calendar.png';
import Finished from '../assets/images/tick.png';
import Tag from '../assets/images/tag.png';
import Priority from '../assets/images/priority.png';
import '../styles/style.css';

const sidebarIcon = new Image();
const plusIcon = new Image();
const homeIcon = new Image();
const projectsIcon = new Image();
const listIcon = new Image();
const dateIcon = new Image();
const finishedIcon = new Image();
const tagIcon = new Image();
const priorityIcon = new Image();
const projects = document.getElementById('projects');
const header = document.querySelector('header');
const sidebar = document.getElementById('side-bar');
const one = document.getElementById('one');
const two = document.getElementById('two');
const all = document.getElementById('all');
const date = document.getElementById('date-icon');
const finished = document.getElementById('finished-icon');
const tag = document.getElementById('tag-icon');
const priority = document.getElementById('priority-icon');

sidebarIcon.src = Sidebar;
plusIcon.src = Plus;
homeIcon.src = Home;
projectsIcon.src = Project;
listIcon.src = List;
dateIcon.src = Date;
finishedIcon.src = Finished;
tagIcon.src = Tag;
priorityIcon.src = Priority;

plusIcon.id = 'plus-icon-side';

projects.appendChild(plusIcon);
header.appendChild(sidebarIcon);
one.appendChild(homeIcon);
two.appendChild(projectsIcon);
all.appendChild(listIcon);
date.appendChild(dateIcon);
finished.appendChild(finishedIcon);
tag.appendChild(tagIcon);
priority.appendChild(priorityIcon);

export function addIcon() {
    const icn = new Image();
    icn.src = List;
    return icn;
}

export function showTasks(name) {
    const tasksContainer = document.createElement('div');
    const header = document.createElement('h2');
    tasksContainer.id = 'tasks';
    header.id = 'current-project';
    header.textContent = name;
    tasksContainer.appendChild(header);
    return tasksContainer;
}

export function addTask(title) {
    const task = document.createElement('div');
    const name = document.createElement('h3');
    task.classList.add('task-item');
    name.textContent = title;
    task.appendChild(name);
    return task;
}

let t = showTasks('TEST');
t.appendChild(addTask('test program'))
document.getElementById('content').appendChild(t);

sidebarIcon.addEventListener('click', () => {
    sidebarIcon.classList.toggle('show');
    sidebar.classList.toggle('slide');
    t.classList.toggle('slide-left');
});
