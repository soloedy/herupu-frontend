import { Component, OnInit } from '@angular/core';
import { UserCollaborator } from '../../models/user-collaborator';
import { UserCollaboratorService } from '../../services/user-collaborator.service';

@Component({
  selector: 'app-register-collaborator',
  templateUrl: './register-collaborator.component.html',
  styleUrls: ['./register-collaborator.component.css'],
  providers: [
    UserCollaboratorService
  ]
})
export class RegisterCollaboratorComponent implements OnInit {

  public user: UserCollaborator;
  public status: string;

  constructor(
    private userService: UserCollaboratorService,
  ) {
    this.user = new UserCollaborator('', '', '', '', '', '','','','');
   }

  ngOnInit() {
    
  }

  onSubmit(registerForm) {
    this.userService.register(this.user)
      .subscribe(
        response => {
          if (response.user && response.user._id) {
            this.status = 'success';

            this.user = new UserCollaborator('', '', '', '', '', '','','','');
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