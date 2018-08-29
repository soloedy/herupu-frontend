import { Component, OnInit } from '@angular/core';
import { GLOBAL } from '../../services/global';
import { Collaborator } from '../../models/collaborator';
import { CollaboratorService } from '../../services/collaborator.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-collaborator-profile',
  templateUrl: './collaborator-profile.component.html',
  styleUrls: ['./collaborator-profile.component.css'],
  providers: [
    CollaboratorService
  ]

})
export class CollaboratorProfileComponent implements OnInit {

  private url = GLOBAL.url;
  private collaborator : Collaborator;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private collaboratorService: CollaboratorService
    ) { }

  ngOnInit() {
    this.getCollaboratorId();
  }

  private getCollaboratorId(){
    const id = this._route.snapshot.paramMap.get('id');
    this.collaboratorService.getCollaborator(id)
    .subscribe(
      result => {
        this.collaborator = result.collaborator;
      },
      error =>{
        console.log(error);
      }
    );
  }

}
