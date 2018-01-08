import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';
import { UserPreferencesService } from './userPreferences.service';

@Component({
    selector: 'list-employee',
    templateUrl: './employeeList.component.html',
    styleUrls: ['./employeeList.component.css']
})
export class EmployeeListComponent implements OnInit{
    employees: IEmployee[];
    selectedEmployeeCountRadioButton: string = "All";
    statusMessage: string = "Loading data - Please wait...";   


    constructor(private _employeeService: EmployeeService,
                private _userPreferencesService: UserPreferencesService) {       
    }  

    get colour(): string {
        return this._userPreferencesService.colourPreference;
    }

    set colour(value: string) {
        this._userPreferencesService.colourPreference = value;
    }


    ngOnInit() {
        this._employeeService.getEmployees()
            .subscribe((employeeData) => this.employees = employeeData,
            (error) => {
                this.statusMessage = 'Problem with the service. Please try again later.';
                console.error(error);
            });        
    }

    onEmployeeCountRadioButtonChange(selectedRadioButtonValue : string) : void {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }

    getTotalEmployeesCount(): number {
        return this.employees.length;
    }

    getTotalMaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender === 'Male').length;
    }

    getTotalFemaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender === 'Female').length;
    }


}
