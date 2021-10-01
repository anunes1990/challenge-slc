import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
  private user:any;
  public form: FormGroup;
  public userInfo:any;
  public userRepos:any = [];
  public msgError: string | undefined;
  public submitted:boolean = false;

  constructor(
    private acRoute: ActivatedRoute,
    private apiService: ApiService,
    private utils: UtilsService,
    private formBuilder: FormBuilder,
    private router: Router
    ) { 
    this.form = this.formBuilder.group({
      user: ["", Validators.required]
    });
    this.user = this.acRoute.snapshot.paramMap.get("login");
  }

  ngOnInit(): void {
    this.getInfoUser();
  }

  private async getInfoUser(){
    this.userInfo = null;
    this.userRepos = [];
    try {
      const resp = await this.apiService.getGeneric(`/${this.user}`);
      this.userInfo = resp;
      this.getUserRepos();
    } catch (error:any) {
        console.error("ERROR GET USER INFO", error);
        if(error.status === 404){
          this.msgError = `Código do Erro : ${error.status} | Usuário não localizado ou inexistente`
        } else {
          this.msgError = `Código do Erro : ${error.status} | Não foi possível carregar as informações do usuário`
        }
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

  public getNewUser(){
    this.submitted = !this.submitted;
    if (this.form.valid) {
      this.submitted = !this.submitted;
      this.router.navigate(["/details", this.form.get("user")?.value]);      
      this.user = this.form.get("user")?.value;
      this.getInfoUser();
    }
  }
}