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
  openItemIndex = 0;


  constructor() { }

  ngOnInit(): void {
  }

  onChangeAccordion(i: number){
    
    if(i === this.openItemIndex){
      this.openItemIndex = -1;
    }else{
      this.openItemIndex = i;
    }
  }

}
