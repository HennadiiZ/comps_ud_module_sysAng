import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.scss']
})
export class CollectionsHomeComponent implements OnInit {

  data = [
    { name: 'James', age: 34, job: 'Designer', employed: 'true'},
    { name: 'Jill', age: 31, job: 'Engineer', employed: 'true'},
    { name: 'Yazz', age: 24, job: 'QA', employed: 'true'}
  ];

  headers = [
    { key: 'employed', label: 'Has a Job?'},
    { key: 'name', label: 'Name'},
    { key: 'age', label: 'Age'},
    { key: 'job', label: 'Job'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
