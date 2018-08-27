import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCollaboratorComponent } from './login-collaborator.component';

describe('LoginCollaboratorComponent', () => {
  let component: LoginCollaboratorComponent;
  let fixture: ComponentFixture<LoginCollaboratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginCollaboratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginCollaboratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
