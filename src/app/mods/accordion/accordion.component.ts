import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  // @Input() title!: string;
  // @Input() content!: string;

  @Input() items!: Array<any>;


  constructor() { }

  ngOnInit(): void {
  }

}
