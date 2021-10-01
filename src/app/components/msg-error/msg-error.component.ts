import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-msg-error',
  templateUrl: './msg-error.component.html',
  styleUrls: ['./msg-error.component.css']
})
export class MsgErrorComponent implements OnInit {
  @Input() msg: any;

  constructor() { }

  ngOnInit(): void {
  }

}
