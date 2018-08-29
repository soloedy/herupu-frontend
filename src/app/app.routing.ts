import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginOptionsComponent } from './components/login-options/login-options.component';
import { LoginCollaboratorComponent } from './components/login-collaborator/login-collaborator.component';
import { CollaboratorComponent } from './components/collaborator/collaborator.component';
import { CollaboratorProfileComponent } from './components/collaborator-profile/collaborator-profile.component';

// Componentes


const appRoutes: Routes = [
	//{path: '', component: HomeComponent},
	{
		path: '',
		redirectTo: 'login-option',
		pathMatch: 'full'
	},
	{
		path: 'login-option',
		component: LoginOptionsComponent
	},
	{
		path: 'login-collaborator',
		component: LoginCollaboratorComponent
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'register',
		component: RegisterComponent
	},
	{
		path: 'register-collaborator',
		component: CollaboratorComponent
	},
	{
		path: 'collaborators-homepage',
		component: HomepageComponent
	},
	{
		path: 'collaborator-profile/:id',
		component: CollaboratorProfileComponent
	}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);