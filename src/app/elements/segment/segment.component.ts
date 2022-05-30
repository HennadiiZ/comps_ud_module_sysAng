import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.component.html',
  styleUrls: ['./segment.component.scss']
})
export class SegmentComponent implements OnInit {

  @Input() image!: string;
  @Input() text!: string;
  @Input() buttonName!: string;

  constructor() { }

  ngOnInit(): void {}



}
