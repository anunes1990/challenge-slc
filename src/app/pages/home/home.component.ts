import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { MockListUsersService } from 'src/app/services/mock-list-users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public form: FormGroup;
  public users: any = [];
  public submitted:boolean = false;
  public searched:boolean = false;
  public msgError: string | undefined;

  constructor(
    private apiService: ApiService,
    private mock: MockListUsersService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      user: [null, Validators.required]
    });
  }

  async ngOnInit() {
    this.getUsers()
  }

  public async getUsers(since: number = 0, perPage: number = 90) {
    this.searched = false;
    this.form.patchValue({user : null})
    try {
      const resp = await this.apiService.getGeneric(`?since=${since}&per_page=${perPage}`);
      this.users = resp;
      this.searched = false;
      this.msgError = undefined;
    } catch (error:any) {
      this.msgError = `Código do Erro : ${error.status} | Não foi possível carregar a lista de usuários`
      console.error("ERROR GET USERS > ", error)
    }
  }

  public async getUser() {
    this.submitted = true;
    if(this.form.valid){ 
      this.users = [];
      this.searched = true;
      try {
        const resp = await this.apiService.getGeneric(`/${this.form.get("user")?.value}`);
        this.users.push(resp);        
        this.submitted = false;
        this.msgError = undefined;
      } catch (error:any) {
        this.submitted = false;
        if(error.status === 404){
          this.msgError = `Código do Erro : ${error.status} | Usuário não localizado ou inexistente`
        } else {
          this.msgError = `Código do Erro : ${error.status} | Não foi possível carregar as informações do usuário`
        }
        console.error("ERROR GET USERS > ", error)
      }
    }
  }
}
