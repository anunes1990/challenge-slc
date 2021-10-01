import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { MockListUsersService } from 'src/app/services/mock-list-users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public user: any;
  public users: any = [];

  constructor(
    private apiService: ApiService,
    private mock: MockListUsersService,
  ) { }

  async ngOnInit() {
    //this.users = this.mock.users;
    this.getUsers(0, 90)
  }

  private async getUsers(since:number, perPage:number){
    try {
      const resp = await this.apiService.getGeneric(`https://api.github.com/users?since=${since}&per_page=${perPage}`);
      this.users = resp;
      console.log("Usuário > ", this.user)
    } catch (error) {
      console.error("ERROR GET USERS > ", error)
    }
  }

  public async getUser(user: string) {
    try {
      const resp = await this.apiService.getGeneric(`https://api.github.com/users/${user}`);
      this.user = resp;
      console.log("Usuário > ", this.user)
    } catch (error) {
      console.error("ERROR GET USERS > ", error)
    }
  }



}
