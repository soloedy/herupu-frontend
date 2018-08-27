import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCollaboratorComponent } from './register-collaborator.component';

describe('RegisterCollaboratorComponent', () => {
  let component: RegisterCollaboratorComponent;
  let fixture: ComponentFixture<RegisterCollaboratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterCollaboratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCollaboratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
