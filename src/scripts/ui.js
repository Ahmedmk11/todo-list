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
import TaskIcn from '../assets/images/task.png';
import '../styles/style.css';

const sidebarIcon = new Image();
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
const date = document.getElementById('date-icon');
const finished = document.getElementById('finished-icon');
const tag = document.getElementById('tag-icon');
const priority = document.getElementById('priority-icon');

sidebarIcon.src = SidebarIcn;
homeIcon.src = HomeIcn;
projectsIcon.src = ProjectIcn;
listIcon.src = ListIcn;
dateIcon.src = DateIcn;
finishedIcon.src = FinishedIcn;
tagIcon.src = TagIcn;
priorityIcon.src = PriorityIcn;

sidebarIcon.id = 'side-bar-icon';

header.appendChild(sidebarIcon);
one.appendChild(homeIcon);
two.appendChild(projectsIcon);
date.appendChild(dateIcon);
finished.appendChild(finishedIcon);
tag.appendChild(tagIcon);
priority.appendChild(priorityIcon);

export function showTasks(currProject, tasks) { // displays task container and header
    const tasksContainer = document.createElement('div');
    const header = document.createElement('h2');
    tasksContainer.id = 'tasks';
    header.id = 'current-project';
    header.textContent = currProject;
    tasksContainer.appendChild(header);
    
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
        const tagsDiv = document.createElement('div');
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
        task.appendChild(tagsDiv);
        task.appendChild(editDiv);
        tasksContainer.appendChild(task);
    }
    return tasksContainer;
}

export function showProjects(projectsArr) {
    const header = document.createElement('h4');
    const projectDiv = document.createElement('div');
    const projectIcon = new Image();
    const plusIcon = new Image();

    projectIcon.src = ListIcn;
    header.id = 'current-project';
    projectDiv.classList.add('project-class');
    header.textContent = 'All Tasks';

    projectDiv.appendChild(header);
    projectDiv.appendChild(projectIcon);
    projects.appendChild(projectDiv);
    
    for (let i = 0; i < projectsArr.length; i++) {
        const header = document.createElement('h4');
        const projectDiv = document.createElement('div');
        const projectIcon = new Image();

        projectIcon.src = ListIcn;
        header.id = 'current-project';
        projectDiv.classList.add('project-class');
        header.textContent = projectsArr[i].title;

        projectDiv.appendChild(header);
        projectDiv.appendChild(projectIcon);
        projects.appendChild(projectDiv);
    }

    plusIcon.src = PlusIcn;
    plusIcon.id = 'plus-icon-side';
    projects.appendChild(plusIcon);
}

export function addProject(title) {
    const task = document.createElement('div');
    const name = document.createElement('h3');
    task.classList.add('task-item');
    name.textContent = title;
    task.appendChild(name);
    return task;
}
