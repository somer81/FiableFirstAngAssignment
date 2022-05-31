import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})



export class EmployeeListComponent implements OnInit {

  employeeList : Employee[] = [
    new Employee(1,"Omer Sevinc",9100,"SW Developer",7),
    new Employee(2,"Amar Reddy",3300,"Accounting",8),
    new Employee(3,"Lucy Johnson",12600,"Services",5),
    new Employee(4,"Johnson Leo",3600,"Sell",12),
    new Employee(5,"David Robert",9300,"Marketing",8),
    new Employee(6,"Sunny Luis",9200,"Engineering",5),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
