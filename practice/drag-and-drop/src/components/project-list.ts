import { Component } from "./base-component.js";
import { Project, ProjectStatus } from "../models/project.js";
import { Autobind } from "../decorators/autobind.js";
import { projectState } from "../state/project-state.js";
import { ProjectItem } from "./project-item.js";
import { DragTarget } from "../models/drag-drop.js";
// ProjectList Class
export class ProjectList extends Component<HTMLDivElement, HTMLElement> implements DragTarget {

    // templateElement: HTMLTemplateElement;
    // hostElement: HTMLDivElement;
    // element: HTMLElement; //because there is no HTMLSectionElement

    assignedProjects: Project[] = [];

    constructor(private type: 'active' | 'finished') {

        super('project-list', 'app', false, `${type}-projects`)

        // this.templateElement = document.getElementById('project-list')! as HTMLTemplateElement;
        // this.hostElement = document.getElementById('app')! as HTMLDivElement;
        // const importedNode = document.importNode(this.templateElement.content, true);
        // this.element = importedNode.firstElementChild as HTMLElement;
        // this.element.id = `${type}-projects`

        // projectState.addListener((projects: Project[]) => {
        //     const relevantProjects = projects.filter(prj => {
        //         if (this.type == 'active') {
        //             return prj.status === ProjectStatus.Active
        //         }
        //         return prj.status === ProjectStatus.Finished
        //     })
        //     this.assignedProjects = relevantProjects;
        //     this.renderProjects();
        // })

        // this.attach(); //attaching to dom
        this.configure()
        this.renderContent()
    }

    @Autobind
    dragOverHandler(event: DragEvent): void {
        if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
            event.preventDefault();
            const listEl = this.element.querySelector('ul')!;
            listEl.classList.add('droppable');
        }
    }

    @Autobind
    dropHandler(event: DragEvent): void {
        const prjId = event.dataTransfer!.getData('text/plain');
        projectState.moveProject(prjId, this.type === 'active' ? ProjectStatus.Active : ProjectStatus.Finished);
    }

    @Autobind
    dragLeaveHandler(_: DragEvent): void {
        const listEl = this.element.querySelector('ul')!;
        listEl.classList.remove('droppable');
    }

    configure() {

        this.element.addEventListener('dragover', this.dragOverHandler);
        this.element.addEventListener('dragleave', this.dragLeaveHandler);
        this.element.addEventListener('drop', this.dropHandler);

        projectState.addListener((projects: Project[]) => {
            const relevantProjects = projects.filter(prj => {
                if (this.type == 'active') {
                    return prj.status === ProjectStatus.Active
                }
                return prj.status === ProjectStatus.Finished
            })
            this.assignedProjects = relevantProjects;
            this.renderProjects();
        })
    }

    private renderProjects() {
        const listEl = document.getElementById(`${this.type}-projects-list`)! as HTMLUListElement;
        listEl.innerHTML = '';
        for (const prjItem of this.assignedProjects) {
            // const listItem = document.createElement('li')
            // listItem.textContent = prjItem.title;
            // listEl.appendChild(listItem)
            new ProjectItem(this.element.querySelector('ul')!.id, prjItem)
        }
    }

    renderContent() {
        const listId = `${this.type}-projects-list`
        this.element.querySelector('ul')!.id = listId;
        this.element.querySelector('h2')!.textContent = this.type.toUpperCase() + ' PROJECTS';
    }

    // private attach() {
    //     // beforeend = before the closing tag of the host element
    //     this.hostElement.insertAdjacentElement('beforeend', this.element)
    // }
}