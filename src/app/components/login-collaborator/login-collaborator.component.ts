import { Component, OnInit } from '@angular/core';
import { Collaborator } from '../../models/collaborator';
import { CollaboratorService } from '../../services/collaborator.service';
import { Router } from '@angular/router';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-login-collaborator',
  templateUrl: './login-collaborator.component.html',
  styleUrls: ['./login-collaborator.component.css'],
  providers: [
    CollaboratorService
  ]
})
export class LoginCollaboratorComponent implements OnInit {
  public user: Collaborator;

  constructor(
    private _userService: CollaboratorService,
    private router: Router,
    private storage: LocalStorageService,
    private sessionStorage: SessionStorageService,
  ) { 
    this.user = new Collaborator('', '', '', '', '', '','','','','');
  }

  ngOnInit() {
  }

  onSubmit() {
    this._userService.loginColab(this.user)
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