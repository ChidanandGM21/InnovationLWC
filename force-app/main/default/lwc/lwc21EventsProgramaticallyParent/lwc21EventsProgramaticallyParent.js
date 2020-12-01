import { LightningElement, track } from 'lwc';
export default class lwc21EventsProgramaticallyParent extends LightningElement {
    @track answer = "Child:";
    question = "Parent:Have You Completed Study for Today?";

  /*  constructor() {
        alert("constructor");
        super();
        this.template.addEventListener('answer', this.handleAnswer.bind(this));
        alert('-final-');
    } */

    connectedCallback() {
        //super();
        this.template.addEventListener('answer', this.handleAnswer.bind(this));
        
    }
    handleAnswer(event) {
       // alert('==hey==');
        //log("Res==>"+event.detail);
        const res = event.detail;
        //alert('=event='+event);
        //alert('=res='+res);
       this.answer = this.answer+res;
    }

}