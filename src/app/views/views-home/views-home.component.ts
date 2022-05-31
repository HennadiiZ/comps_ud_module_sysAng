import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.scss']
})
export class ViewsHomeComponent implements OnInit {

  stats = [
    { value: 22, label: '# of Users'},
    { value: 900, label: 'Revenue'},
    { value: 50, label: 'Review'},
  ];

  items = [
    { image: '/assets/images/pic.png', title: 'Travel', descr: 'we like to travel'},
    { image: '/assets/images/pic1.png', title: 'Tea', descr: 'we are tea lovers'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
