import { ShowToastEvent } from 'lightning/platformShowToastEvent'

/* Step1 - Create an ES6 Module

As of Now This Utility Method is used in paginationParent component.

*/


const showToast = (variant = 'info', mode = 'dismissable', title, message) => {
    const event = new ShowToastEvent({

        title: title,
        message: message,
        mode: mode,
        variant:variant
    });
    return event;
}

const showAlert = () => { 

    alert('I am inside an other module');
}

/*Step2 - Export the module */
export { showToast, showAlert}