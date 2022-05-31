import { Component, OnInit } from '@angular/core';
import { Trainee } from './trainee';

@Component({
  selector: 'app-fiable-trainee-list',
  templateUrl: './fiable-trainee-list.component.html',
  styleUrls: ['./fiable-trainee-list.component.css']
})
export class FiableTraineeListComponent implements OnInit {
  
  traineeList : Trainee[] = [
    new Trainee("Omer","Sevinc",41,"Angular"),
    new Trainee("Amar","Reddy",33,"Angular"),
    new Trainee("Lucy","Johnson",26,"Angular"),
    new Trainee("Johnson","Leo",36,"Angular"),
    new Trainee("David","Robert",43,"Angular"),
    new Trainee("Sunny","Luis",32,"Angular"),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
