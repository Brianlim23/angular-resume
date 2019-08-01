import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professional-details',
  templateUrl: './professional-details.component.html',
  styleUrls: ['./professional-details.component.css']
})
export class ProfessionalDetailsComponent implements OnInit {
 details = {
   "Name" : "John Doe",
   "Age" : "38 Years",
   "Location" : "Rome, Italy",
   "Experience" : "15 years",
   "Degree" : "MBA",
 }
  constructor() { }

  ngOnInit() {
  }

}
