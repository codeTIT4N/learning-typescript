import Cmp from "./base-component";
import * as validation from "../util/validation";
import { Autobind as autobind } from "../decorators/autobind";
import { projectState } from "../state/project-state";

// ProjectInput Class
export class ProjectInput extends Cmp<HTMLDivElement, HTMLFormElement>{

    // templateElement: HTMLTemplateElement;
    // hostElement: HTMLDivElement;
    // element: HTMLFormElement;

    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;

    constructor() {
        super('project-input', 'app', true, 'user-input')

        // // accesses the template on html
        // this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
        // // holds the content
        // this.hostElement = document.getElementById('app')! as HTMLDivElement;
        // // when we create a new instance of the class. I will render a form that belongs to this instance.
        // const importedNode = document.importNode(this.templateElement.content, true);
        // this.element = importedNode.firstElementChild as HTMLFormElement;
        // this.element.id = 'user-input'

        this.titleInputElement = this.element.querySelector('#title')! as HTMLInputElement;
        this.descriptionInputElement = this.element.querySelector('#description')! as HTMLInputElement;
        this.peopleInputElement = this.element.querySelector('#people')! as HTMLInputElement;
        this.configure();
        // this.attach();
    }

    private gatherUserInput(): [string, string, number] | void {//returns tuple
        const enteredTitle = this.titleInputElement.value;
        const enteredDescription = this.descriptionInputElement.value;
        const enteredPeople = this.peopleInputElement.value;

        const titleValidatable: validation.Validatable = {
            value: enteredTitle,
            required: true
        }
        const descriptionValidatable: validation.Validatable = {
            value: enteredDescription,
            required: true,
            minLength: 5
        }
        const peopleValidatable: validation.Validatable = {
            value: +enteredPeople,
            required: true,
            min: 1,
            max: 5
        }
        if (
            !validation.validate(titleValidatable) ||
            !validation.validate(descriptionValidatable) ||
            !validation.validate(peopleValidatable)
        ) {
            alert('Invalid Input, Please try again!!!')
            return;
        } else {
            return [enteredTitle, enteredDescription, +enteredPeople]
        }
    }

    private clearInputs() {
        this.titleInputElement.value = '';
        this.descriptionInputElement.value = '';
        this.peopleInputElement.value = '';
    }

    @autobind
    private submitHandler(event: Event) {
        event.preventDefault(); //to prevent an http request to be sent - default submit behavior
        const userInput = this.gatherUserInput();
        if (Array.isArray(userInput)) {
            const [title, desc, people] = userInput;
            projectState.addProject(title, desc, people);
            this.clearInputs();
        }
    }

    configure() {
        this.element.addEventListener('submit', this.submitHandler)
    }

    renderContent() { }

    // private attach() {
    //     this.hostElement.insertAdjacentElement('afterbegin', this.element);
    // }
}