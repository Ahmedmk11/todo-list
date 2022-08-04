import Sidebar from '../assets/images/side-bar.png';
import Plus from '../assets/images/plus.png';
import Calendar from '../assets/images/calendar.png';
import Project from '../assets/images/projects.png';
import List from '../assets/images/list.png';
import '../styles/style.css';

const sidebarIcon = new Image();
const plusIcon = new Image();
const calendarIcon = new Image();
const projectsIcon = new Image();
const listIcon = new Image();
const projects = document.getElementById('projects');
const header = document.querySelector('header');
const sidebar = document.getElementById('side-bar');
const one = document.getElementById('one');
const two = document.getElementById('two');
const all = document.getElementById('all');

sidebarIcon.src = Sidebar;
plusIcon.src = Plus;
calendarIcon.src = Calendar;
projectsIcon.src = Project;
listIcon.src = List;

plusIcon.id = 'plus-icon-side';

sidebarIcon.addEventListener('click', () => {
    sidebarIcon.classList.toggle('show');
    sidebar.classList.toggle('slide');
});

projects.appendChild(plusIcon);
header.appendChild(sidebarIcon);
one.appendChild(calendarIcon);
two.appendChild(projectsIcon);
all.appendChild(listIcon);
