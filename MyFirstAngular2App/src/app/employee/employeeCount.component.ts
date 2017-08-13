import { Component } from '@angular/core';

@Component({
    selector: 'employee-count',
    templateUrl: './employeeCount.component.html',
    styleUrls: ['./employeeCount.component.css']
})
export class EmployeeCountComponent {
    all: number = 10;
    male: number = 5;
    female: number = 5;
}