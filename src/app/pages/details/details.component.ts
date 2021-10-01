import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { MockListUsersService } from 'src/app/services/mock-list-users.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  private user:any;
  public userInfo:any;
  public userRepos:any = [];
  public msgError: string | undefined;

  constructor(
    private acRoute: ActivatedRoute,
    private apiService: ApiService,
    private mockService: MockListUsersService,
    private utils: UtilsService
    ) { 
    this.user = this.acRoute.snapshot.paramMap.get("login");
  }

  ngOnInit(): void {
    this.getInfoUser();
    //this.userInfo = this.mockService.user;
    //this.userRepos = this.utils.orderByDesc(this.mockService.listRepos, "stargazers_count");
  }

  private async getInfoUser(){
    try {
      const resp = await this.apiService.getGeneric(`/${this.user}`);
      this.userInfo = resp;
      console.log("Informações User > ", this.userInfo);
      this.getUserRepos();
    } catch (error:any) {
        console.error("ERROR GET USER INFO", error);
        this.msgError = `Código do Erro : ${error.status} | Não foi possível carregar as informações do usuário`;
      }
  }

  private async getUserRepos(){
    try {
      const resp = await this.apiService.getGeneric(`/${this.user}/repos`);
      if(resp.length > 0){
        this.userRepos = this.utils.orderByDesc(resp, "stargazers_count");
        this.msgError = undefined;
      } else {
        this.msgError = `Este usuário não possui repositórios registrados`;
      }
    } catch (error:any) {
        console.error("ERROR GET USER INFO", error);
        this.msgError = `Código do Erro : ${error.status} | Não foi possível carregar os repositórios do usuário`;

    }
  }
}