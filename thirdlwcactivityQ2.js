import { LightningElement } from 'lwc';

export default class ThirdlwcactivityQ2 extends LightningElement {

    inputs = {
        firstName: '',
        lastName: '',
        email: '',
        website: '',
        empresa: '',
        receitaAnual: ''
    }

    handleInputChange(event) {

        let inputName = event.target.name;
        let value = event.detail.value;

        this.inputs = {
            ...this.inputs, [inputName]: value
        };

        console.log(this.inputs);

    }

    onClick(){
        alert("Form enviado");
    }
}
