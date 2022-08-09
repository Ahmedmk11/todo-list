export class Storage {

    static saveDefault(x) {
        localStorage.setItem('default-project', JSON.stringify(x));
    }
    
    static saveProjectArr(x) {
        localStorage.setItem('projects-array', JSON.stringify(x));
    }

    static saveMode(x) {
        localStorage.setItem('mode', JSON.stringify(x));
    }

    static getDefault() {
        return JSON.parse(localStorage.getItem('default-project'));
    }

    static getProjectArr() {
        return JSON.parse(localStorage.getItem('projects-array'));
    }

    static getMode() {
        return JSON.parse(localStorage.getItem('mode'));
    }
}
