import SidebarIcn from '../assets/images/side-bar.png';
import PlusIcn from '../assets/images/plus.png';
import ProjectIcn from '../assets/images/projects.png';
import HomeIcn from '../assets/images/home.png';
import ListIcn from '../assets/images/list.png';
import DateIcn from '../assets/images/calendar.png';
import FinishedIcn from '../assets/images/tick.png';
import TagIcn from '../assets/images/tag.png';
import PriorityIcn from '../assets/images/priority.png';
import EditIcn from '../assets/images/finish.png';
import DeleteIcn from '../assets/images/delete.png';
import DeleteIcn2 from '../assets/images/delete2.png';
import TaskIcn from '../assets/images/task.png';
import Add from '../assets/images/addplus.png';
import Red from '../assets/images/red.png';
import Blue from '../assets/images/blue.png';
import Green from '../assets/images/green.png';
import Yellow from '../assets/images/yellow.png';
import Purple from '../assets/images/purple.png';
import {onDeleteProj, onDeleteTask, _default, addTask, onFinished} from './index.js';
import {Storage} from './local-storage';
import '../styles/style.css';

let mode;
setMode('All Tasks');

const sidebarIcon = new Image();
const homeIcon = new Image();
const projectsIcon = new Image();
const dateIcon = new Image();
const finishedIcon = new Image();
const tagIcon = new Image();
const priorityIcon = new Image();
const plusIcon = new Image();
const projects = document.getElementById('projects');
const header = document.querySelector('header');
const one = document.getElementById('one');
const two = document.getElementById('two');
const date = document.getElementById('date-icon');
const finished = document.getElementById('finished-icon');
const tag = document.getElementById('tag-icon');
const priority = document.getElementById('priority-icon');
const content = document.getElementById('content');

sidebarIcon.src = SidebarIcn;
homeIcon.src = HomeIcn;
projectsIcon.src = ProjectIcn;
dateIcon.src = DateIcn;
finishedIcon.src = FinishedIcn;
tagIcon.src = TagIcn;
priorityIcon.src = PriorityIcn;
plusIcon.src = PlusIcn;

sidebarIcon.id = 'side-bar-icon';
plusIcon.id = 'plus-icon-side';

projects.appendChild(plusIcon);
header.appendChild(sidebarIcon);
one.appendChild(homeIcon);
two.appendChild(projectsIcon);
date.appendChild(dateIcon);
finished.appendChild(finishedIcon);
tag.appendChild(tagIcon);
priority.appendChild(priorityIcon);

export function showTasks(tasks) {
    content.innerHTML = '';
    const tasksContainer = document.createElement('div');
    const header = document.createElement('h2');
    const div = document.createElement('div');
    const add = new Image();
    add.src = Add;
    add.id = 'task-add-plus';
    tasksContainer.id = 'tasks';
    header.id = 'current-project';
    div.id = 'tasks-header';
    header.textContent = mode.charAt(0).toUpperCase() + mode.slice(1);
    add.addEventListener('click', addTask);
    div.appendChild(header);
    div.appendChild(add);
    tasksContainer.appendChild(div);
    
    if (tasks.length > 0) {
        for (let i = 0; i < tasks.length; i++) {
            const editIcon = new Image();
            const deleteIcon = new Image();
            const taskIcon = new Image();
            const task = document.createElement('div');
            const nameDiv = document.createElement('div');
            const name = document.createElement('h3');
            const description = document.createElement('p');
            const scheduleDiv = document.createElement('div');
            const priority = document.createElement('p');
            const date = document.createElement('p');
            const time = document.createElement('p');
            const editDiv = document.createElement('div');
            const edit = document.createElement('div');
            const deleteTask = document.createElement('div');
            const editP = document.createElement('p');
            const deleteTaskP = document.createElement('p');
    
            task.classList.add('task-item');
            description.classList.add('description');
            editDiv.classList.add('edit');
            nameDiv.classList.add('task-name');
            scheduleDiv.id = ('schedule');
            priority.id = 'priority-input';
    
            editIcon.src = EditIcn;
            deleteIcon.src = DeleteIcn;
            taskIcon.src = TaskIcn;
    
            name.textContent = tasks[i].title;
            if (tasks[i].finished) {
                name.classList.add('crossed');
            }
            description.textContent = tasks[i].description;
            priority.textContent = '!'.repeat(tasks[i].priority);
            date.textContent = tasks[i].dueDate;
            time.textContent = tasks[i].dueTime;
            editP.textContent = 'Done';
            deleteTaskP.textContent = 'Delete';
            
            let element;
    
            if (tasks[i].tags.length > 0) {
                element = new Image();
                switch (tasks[i].tags) {
                    case 'red':
                        element.src = Red;
                        break;
                    case 'blue':
                        element.src = Blue;
                        break;
                    case 'green':
                        element.src = Green;
                        break;
                    case 'yellow':
                        element.src = Yellow;
                        break;
                    case 'purple':
                        element.src = Purple;
                        break;
                    default:
                        break;
                }
            } else {
                element = document.createElement('p');
                element.textContent = 'No Tags';
            }

            edit.addEventListener('click', onFinished);
            deleteTask.addEventListener('click', onDeleteTask);
            if (mode === 'Finished Tasks' || mode === 'Today' || mode === 'This Week' 
            || mode === 'This Month' || mode === 'Red' || mode === 'Blue' || mode === 'Green' 
            || mode === 'Yellow' || mode === 'Purple' || mode === 'Low Priority'
            || mode === 'Medium Priority' || mode === 'High Priority') {
                edit.removeEventListener('click', onFinished);
                deleteTask.removeEventListener('click', onDeleteTask);
                edit.classList.add('disabled');
                deleteTask.classList.add('disabled');
            }

            nameDiv.appendChild(taskIcon);
            nameDiv.appendChild(name);
            edit.appendChild(editIcon);
            edit.appendChild(editP);
            deleteTask.appendChild(deleteIcon);
            deleteTask.appendChild(deleteTaskP);
            editDiv.appendChild(edit);
            editDiv.appendChild(deleteTask);
            scheduleDiv.appendChild(date);
            scheduleDiv.appendChild(time);
            task.appendChild(nameDiv);
            task.appendChild(description);
            task.appendChild(scheduleDiv);
            task.appendChild(priority);
            task.appendChild(element);
            task.appendChild(editDiv);
            task.id = `task-${i}`;
            tasksContainer.appendChild(task);
        }
    } else {
        const none = document.createElement('h3');
        none.textContent = 'No tasks yet, start adding now!';
        none.setAttribute('style', 'text-align: start;');
        tasksContainer.appendChild(none);
    }
    content.appendChild(tasksContainer);
}

export function showProjects(projectsArr) {
    while (projects.childElementCount > 1){
        projects.removeChild(projects.firstChild);
    }

    const div = document.createElement('div');
    const h4 = document.createElement('h4');
    const icn = new Image();
    icn.src = ListIcn;
    icn.classList.add('list-icon');
    div.id = 'all';
    div.classList.add('project-class');
    h4.textContent = 'All Tasks';
    div.appendChild(icn);
    div.appendChild(h4);
    plusIcon.parentNode.insertBefore(div, plusIcon);

    icn.addEventListener('click', () => {
        setMode(_default.title);
        showTasks(_default.tasks)
    });

    for (let i = 0; i < projectsArr.length; i++) {
        const header = document.createElement('h4');
        const projectDiv = document.createElement('div');
        const div = document.createElement('div');
        const projectIcon = new Image();
        const del = new Image();
        
        del.src = DeleteIcn2;
        del.classList.add('del-project');
        projectIcon.src = ListIcn;
        projectIcon.classList.add('list-icon');
        projectDiv.classList.add('project-class');
        header.textContent = projectsArr[i].title;

        del.addEventListener('click', onDeleteProj)

        div.appendChild(projectIcon);
        div.appendChild(header);
        projectDiv.appendChild(div);
        projectDiv.appendChild(del);
        projectDiv.id = `project-${i}`;
        plusIcon.parentNode.insertBefore(projectDiv, plusIcon);

        if (projectsArr.length > 0) {
            projectIcon.addEventListener('click', () => {
                setMode(projectsArr[i].title);
                showTasks(projectsArr[i].tasks);
            });
        } else {
            showTasks(_default.tasks);
        }
    }
}

export function setMode(value) {
    mode = value;
    Storage.saveMode(value);
}

export function getMode() {
    return mode;
}