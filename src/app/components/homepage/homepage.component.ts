import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animation';
import { CollaboratorService } from '../../services/collaborator.service';
import { Collaborator } from '../../models/collaborator';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  animations: [
    fadeIn
  ],
  providers: [
    CollaboratorService
  ],
})
export class HomepageComponent implements OnInit {

  public collaborators: Collaborator[];

  constructor(
    private collaboratorService: CollaboratorService,
  ) { }

  ngOnInit() {
    this.requestCollaborators();
  }
 
  private requestCollaborators(){
    this.collaboratorService.getCollaborators()
    .subscribe(
      result => {
        this.collaborators = result.collaborators
      },
      error => {
        alert(error);
      }
    );
  }
}
