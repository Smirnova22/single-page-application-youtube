

class InputCreator {
    private nameInput: HTMLInputElement;
    private surnameInput: HTMLInputElement;
   
    constructor() {
       this.nameInput = this.createInput("nameInput", "text", "Enter your name");
       this.surnameInput = this.createInput("surnameInput", "text", "Enter your surname");
       this.appendInputs();
    }
   
    private createInput(id: string, type: string, placeholder: string): HTMLInputElement {
       const input = document.createElement("input");
       input.id = id;
       input.type = type;
       input.placeholder = placeholder;
       return input;
    }
   
    private appendInputs(): void {
       document.body.appendChild(this.nameInput);
       document.body.appendChild(this.surnameInput);
    }
   }
export default InputCreator;
   