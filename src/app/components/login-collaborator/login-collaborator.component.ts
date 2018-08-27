import { Component, OnInit } from '@angular/core';
import { UserCollaborator } from '../../models/user-collaborator';
import { UserCollaboratorService } from '../../services/user-collaborator.service';
import { Router } from '@angular/router';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-login-collaborator',
  templateUrl: './login-collaborator.component.html',
  styleUrls: ['./login-collaborator.component.css']
})
export class LoginCollaboratorComponent implements OnInit {
  public user: UserCollaborator;

  constructor(
    private _userService: UserCollaboratorService,
    private router: Router,
    private storage: LocalStorageService,
    private sessionStorage: SessionStorageService,
  ) { 
    this.user = new UserCollaborator('', '', '', '', '', '','','','');
  }

  ngOnInit() {
  }

  onSubmit() {
    this._userService.login(this.user)
      .subscribe(
        response => {
          const token = response['token'];
          this.storage.store('token', token);
          this.sessionStorage.store('tokenSession', token);
          this.router.navigate(['/homepage']);
        },
        error => {
          console.log(error);
        }
      );
  }
}