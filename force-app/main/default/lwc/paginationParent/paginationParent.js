import { LightningElement, track, api } from 'lwc';
import { showToast, showAlert} from 'c/utilJS'
const PAGE_SIZE = 5;
export default class PaginationParent extends LightningElement {
    @api page = 1;
    //@api totalrecords;
    totalrecords;
    trecs; //added for testing purpose
    @api _pagesize = PAGE_SIZE;
    get pagesize() {
        return this._pagesize;
    }
    set pagesize(value) {
        this._pagesize = value;
    }
    handlePrevious() {
        if (this.page > 1) {
            this.page = this.page - 1;
        }
    }
    handleNext() {
        if (this.page < this.totalPages)
            this.page = this.page + 1;
    }
    handleFirst() {
        this.page = 1;
    }
    handleLast() {
        this.page = this.totalPages;
    }
    handleRecordsLoad(event) {
        alert('=trecs new2=' + this.totalrecords);
        
        this.totalrecords = event.detail;
        this.totalPages = Math.ceil(this.totalrecords / this.pagesize);

        this.dispatchEvent(
            showToast('success','dismissable','Success!!','PaginationParent-Test Utilities Component(utilJS.js)- Loaded Records')
        );
    }
    handlePageChange(event) {
        this.page = event.detail;
    }
}