import { LightningElement, track,api } from 'lwc';
export default class lwc25DesignAttributes extends LightningElement {
    @api showDetails = false;
    @api strName;
    @api empName;
    @api empDepartment;
    @api empLocation;
    @api empAge;
    @api empGender;


}