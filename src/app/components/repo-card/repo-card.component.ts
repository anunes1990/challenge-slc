import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.css']
})
export class RepoCardComponent implements OnInit {
  @Input() repo: any;

  constructor() { }

  ngOnInit(): void {
  }

  public goToRepo(){
    window.open(this.repo.svn_url, "_blank")
  }

}
