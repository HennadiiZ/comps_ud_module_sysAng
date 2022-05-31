import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(
    private elementRef: ElementRef
  ){
    // console.log(elementRef.nativeElement)
  }

  ngOnInit(): void {
    document.body.append(this.elementRef.nativeElement)
  }

}
