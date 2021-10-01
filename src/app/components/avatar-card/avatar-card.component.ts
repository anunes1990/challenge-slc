import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
declare var $: any;

@Component({
  selector: 'app-avatar-card',
  templateUrl: './avatar-card.component.html',
  styleUrls: ['./avatar-card.component.css']
})
export class AvatarCardComponent implements OnInit {
  @Input() user: any;
  
  public userInfo: any = null;

  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
  }

  public async openModalInfo(user: any) {
    try {
      const resp = await this.apiService.getGeneric(`https://api.github.com/users/${user.login}`);
      this.userInfo = resp;
      setTimeout(() => {
        $("#dialog-user")[0].showModal();
      }, 100);
    } catch (error) {
      console.error("ERROR GET USERS > ", error)
    }
  }

  public closeModalInfo(){
    this.userInfo = null;
    $("#dialog-user")[0].close();
  }

}
