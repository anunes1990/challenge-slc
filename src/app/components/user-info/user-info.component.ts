import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  @Input() userInfo: any;

  constructor() { }

  ngOnInit(): void {
  }

  public goToPerfil(){
    window.open(this.userInfo.html_url, "_blank")
  }
}