import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {

  @Output() close = new EventEmitter();
  constructor(
    private elementRef: ElementRef
  ){
    // console.log(elementRef.nativeElement)
  }

  ngOnInit(): void {
    document.body.append(this.elementRef.nativeElement)
  }

  ngOnDestroy(){
    this.elementRef.nativeElement.remove();
  }

  closeModal(event: any){
    this.close.emit();
    // this.elementRef.nativeElement.remove();
    // event.stopPropagation();
  }

}
