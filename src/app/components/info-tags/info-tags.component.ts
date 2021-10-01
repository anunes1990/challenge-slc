import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-info-tags',
  templateUrl: './info-tags.component.html',
  styleUrls: ['./info-tags.component.css']
})
export class InfoTagsComponent implements OnInit {
  @Input() icon:any;
  @Input() text:any;
  @Input() value:any;

  constructor() { }

  ngOnInit(): void {
  }

}
