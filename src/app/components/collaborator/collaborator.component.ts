import { Component, OnInit } from '@angular/core';
import { Collaborator } from '../../models/collaborator';
import { CollaboratorService } from '../../services/collaborator.service';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.css'],
  providers: [
    CollaboratorService
  ]
})
export class CollaboratorComponent implements OnInit {

  public collaborator: Collaborator;
  public status: string;

  constructor(
    private collaboratorService: CollaboratorService
  ) { 
    this.collaborator = new Collaborator('','','','','','','','','','');
  }

  ngOnInit() {
  }

  onSubmit(registerForm) {
    this.collaboratorService.register(this.collaborator)
      .subscribe(
        response => {
          if (response.Collaborator && response.Collaborator._id) {
            this.status = 'success';

            this.collaborator = new Collaborator('','','','','','','','','','');
            registerForm.reset();
          } else {
            this.status = 'error';
          }
        },
        error => {
          alert(error);
        }
      );
  }
}


