import Sidebar from '../assets/images/side-bar.png';
import Plus from '../assets/images/plus.png';
import '../styles/style.css';

const sidebar = new Image();
const plus = new Image();
const projects = document.getElementById('projects');
const header = document.querySelector('header');

sidebar.src = Sidebar;
plus.src = Plus;

sidebar.id = 'sidebar-icn';

sidebar.addEventListener('click', () => {
    sidebar.classList.toggle('show');
});

projects.appendChild(plus);
header.appendChild(sidebar);
