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
  public collaborator: Collaborator;

  constructor(
    private _collaboratorService: CollaboratorService,
    private router: Router,
    private storage: LocalStorageService,
    private sessionStorage: SessionStorageService,
  ) { 
    this.collaborator = new Collaborator('', '', '', '', '', '','','','','');
  }

  ngOnInit() {
  }

  onSubmit() {
    this._collaboratorService.loginColab(this.collaborator)
      .subscribe(
        response => {
          const token = response['token'];
          this.storage.store('token', token);
          this.sessionStorage.store('tokenSession', token);
          this.router.navigate(['/collaborator-profile']);
        },
        error => {
          console.log(error);
        }
      );
  }
}