import SidebarIcn from '../assets/images/side-bar.png';
import PlusIcn from '../assets/images/plus.png';
import ProjectIcn from '../assets/images/projects.png';
import HomeIcn from '../assets/images/home.png';
import ListIcn from '../assets/images/list.png';
import DateIcn from '../assets/images/calendar.png';
import FinishedIcn from '../assets/images/tick.png';
import TagIcn from '../assets/images/tag.png';
import PriorityIcn from '../assets/images/priority.png';
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
const one = document.getElementById('one');
const two = document.getElementById('two');
const all = document.getElementById('all');
const date = document.getElementById('date-icon');
const finished = document.getElementById('finished-icon');
const tag = document.getElementById('tag-icon');
const priority = document.getElementById('priority-icon');

sidebarIcon.src = SidebarIcn;
plusIcon.src = PlusIcn;
homeIcon.src = HomeIcn;
projectsIcon.src = ProjectIcn;
listIcon.src = ListIcn;
dateIcon.src = DateIcn;
finishedIcon.src = FinishedIcn;
tagIcon.src = TagIcn;
priorityIcon.src = PriorityIcn;

plusIcon.id = 'plus-icon-side';
sidebarIcon.id = 'side-bar-icon';

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
    icn.src = ListIcn;
    return icn;
}

export function showTasks(currProject, tasks) { // displays task container and header
    const tasksContainer = document.createElement('div');
    const header = document.createElement('h2');
    tasksContainer.id = 'tasks';
    header.id = 'current-project';
    header.textContent = currProject;
    tasksContainer.appendChild(header);
    
    for (let i = 0; i < tasks.length; i++) {
        const task = document.createElement('div');
        const name = document.createElement('h3');
        const description = document.createElement('p');
        const scheduleDiv = document.createElement('div');
        const priority = document.createElement('p');
        const tagsDiv = document.createElement('div');
        const date = document.createElement('p');
        const time = document.createElement('p');
        const editDiv = document.createElement('div');
        const edit = document.createElement('p');
        const deleteTask = document.createElement('p');

        task.classList.add('task-item');
        description.classList.add('description');
        editDiv.classList.add('edit')

        name.textContent = tasks[i].title;
        description.textContent = tasks[i].description;
        priority.textContent = '!'.repeat(tasks[i].priority);
        date.textContent = tasks[i].dueDate;
        time.textContent = tasks[i].dueTime;
        edit.textContent = 'Edit';
        deleteTask.textContent = 'Delete';

        if (tasks[i].tags.length > 0) {
            for (let j = 0; j < tasks[i].tags.length; j++) {
                const element = document.createElement('p');
                element.textContent = tasks[i].tags[j];
                tagsDiv.appendChild(element);
            }
        } else {
            const element = document.createElement('p');
            element.textContent = 'No Tags';
            tagsDiv.appendChild(element);
        }

        editDiv.appendChild(edit);
        editDiv.appendChild(deleteTask);
        scheduleDiv.appendChild(date);
        scheduleDiv.appendChild(time);
        task.appendChild(name);
        task.appendChild(description);
        task.appendChild(scheduleDiv);
        task.appendChild(priority);
        task.appendChild(tagsDiv);
        task.appendChild(editDiv);
        tasksContainer.appendChild(task);
    }
    return tasksContainer;
}

export function showProjects(name) {
    const projectsContainer = document.createElement('div');
    const header = document.createElement('h4');
    tasksContainer.id = 'tasks';
    header.id = 'current-project';
    header.textContent = name;
    tasksContainer.appendChild(header);
    return tasksContainer;
}

export function addProject(title) {
    const task = document.createElement('div');
    const name = document.createElement('h3');
    task.classList.add('task-item');
    name.textContent = title;
    task.appendChild(name);
    return task;
}
