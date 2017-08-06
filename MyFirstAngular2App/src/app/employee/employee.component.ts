import { Component} from '@angular/core';

@Component({
    selector: 'my-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
    columnSpan: number = 2;
    firstName: string = 'Tom';
    lastName: string = 'Hopkins';
    gender: string = 'Male';
    age: number = 20;
    showDetails: boolean = false;

    toggleDetails(): void {
        this.showDetails = !this.showDetails;
        console.log(this.showDetails);
    }
}
