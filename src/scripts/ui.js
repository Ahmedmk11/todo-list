import SidebarIcn from '../assets/images/side-bar.png';
import PlusIcn from '../assets/images/plus.png';
import ProjectIcn from '../assets/images/projects.png';
import HomeIcn from '../assets/images/home.png';
import ListIcn from '../assets/images/list.png';
import DateIcn from '../assets/images/calendar.png';
import FinishedIcn from '../assets/images/tick.png';
import TagIcn from '../assets/images/tag.png';
import PriorityIcn from '../assets/images/priority.png';
import EditIcn from '../assets/images/edit.png';
import DeleteIcn from '../assets/images/delete.png';
import DeleteIcn2 from '../assets/images/delete2.png';
import TaskIcn from '../assets/images/task.png';
import Add from '../assets/images/addplus.png';
import {onDelete} from './index.js'
import '../styles/style.css';

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

export function showTasks(currProject, tasks) { // displays task container and header
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
    header.textContent = currProject;
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
            description.textContent = tasks[i].description;
            priority.textContent = '!'.repeat(tasks[i].priority);
            date.textContent = tasks[i].dueDate;
            time.textContent = tasks[i].dueTime;
            editP.textContent = 'Edit';
            deleteTaskP.textContent = 'Delete';
            const element = document.createElement('p');
    
            if (tasks[i].tags.length > 0) {
                element.textContent = tasks[i].tags;
            } else {
                element.textContent = 'No Tags';
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
    div.id = 'all';
    div.classList.add('project-class');
    h4.textContent = 'All Tasks';
    div.appendChild(icn);
    div.appendChild(h4);
    plusIcon.parentNode.insertBefore(div, plusIcon);

    for (let i = 0; i < projectsArr.length; i++) {
        const header = document.createElement('h4');
        const projectDiv = document.createElement('div');
        const div = document.createElement('div');
        const projectIcon = new Image();
        const del = new Image();
        
        del.src = DeleteIcn2;
        del.classList.add('del-project');
        projectIcon.src = ListIcn;
        projectDiv.classList.add('project-class');
        header.textContent = projectsArr[i].title;

        del.addEventListener('click', onDelete)

        div.appendChild(projectIcon);
        div.appendChild(header);
        projectDiv.appendChild(div);
        projectDiv.appendChild(del);
        projectDiv.id = `project-${projectsArr.length-1}`;
        plusIcon.parentNode.insertBefore(projectDiv, plusIcon);
    }
}
