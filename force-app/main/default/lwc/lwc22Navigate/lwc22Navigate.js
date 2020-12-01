import { LightningElement,api} from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class lwc22Navigate extends NavigationMixin(LightningElement) {
    @api recordId;
    navigateCurrentTab() {
        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                apiName: "Import Tests",
            }
        });
    }

    navigateToObjectHome() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                "objectApiName": "Contact",
                "actionName": "home"
            }
        });
    }

    navigateToListView() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                "objectApiName": "Contact",
                "actionName":"list"
            },
            state: {
                filterName: 'Recent'
            }

        });
    }
    navigateToRecordView() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: "0030o00002iXwOsAAK",
                objectApiName: 'Contact', // objectApiName is optional
                actionName: 'view'
            }
        });
    }
    navigateToNewRecord() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'new'
            }

        });
    }

    navigateToRecordEditPage() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: '0030o00002iXwOsAAK',
                objectApiName: 'Contact',
                actionName:'edit'
            }
        });
    }
    navigateToRelatedList() {
        let recId = this.recordId;
        //alert(recId);
        this[NavigationMixin.Navigate]({
            type: 'standard__recordRelationshipPage',
            attributes: {
                recordId: recId,
                objectApiName: 'Account',
                relationshipApiName: 'Contacts',
                actionName: 'view'
            }
        });
    }
    navigateToWebPage() {
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url:'https://www.salesforce.com'
            }
        });
    }
    navigateAccountRecentView() {
        this[NavigationMixin.Navigate]({
            type: "standard__objectPage",
            attributes: {
                objectApiName: "Account",
                actionName: "list"
            },
            state: {
                filterName: "Recent"
            }
        });
    }
    navigateToComponent() {
        this[NavigationMixin.Navigate]({
            type: 'standard__component',
            attributes: {
                componentName: 'c__overLayLibraryCustomModal'
            }
        });
    }
    navigateToHomePage() {
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: {
                pageName: 'home'
            },
        });
    }
    navigateToChatterHome() {
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: {
                pageName: 'chatter'
            },
        });
    }
    navigateToFilesHome() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'ContentDocument',
                actionName: 'home'
            },
        });
    }

}