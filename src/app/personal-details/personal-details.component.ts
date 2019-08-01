import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {
  highlighted = "true"
  details = {
    "Name" : "John Doe",
    "Age" : "38 Years",
    "Location" : "Rome, Italy",
    "Experience" : "15 years",
    "Degree" : "MBA",
    "Career Level" : "Mid-Level",
    "Phone" : "(800)123-4567",
    "Fax" : "(800)123-4568",
    "E-Mail" : "test@test.com",
    "Website" : "test.com"
  }
  constructor() { }

  ngOnInit() {
  }

}
