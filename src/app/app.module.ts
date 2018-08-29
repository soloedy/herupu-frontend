import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2Webstorage } from 'ngx-webstorage';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginOptionsComponent } from './components/login-options/login-options.component';
import { LoginCollaboratorComponent } from './components/login-collaborator/login-collaborator.component';
import { CollaboratorComponent } from './components/collaborator/collaborator.component';
import { CollaboratorProfileComponent } from './components/collaborator-profile/collaborator-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginOptionsComponent,
    LoginCollaboratorComponent,
    LoginComponent,
    RegisterComponent,
    HomepageComponent,
    CollaboratorComponent,
    CollaboratorProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    BrowserAnimationsModule,
    Ng2Webstorage,
    
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
