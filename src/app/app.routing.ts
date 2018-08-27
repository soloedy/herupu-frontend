import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { RegisterOptionsComponent } from './components/register-options/register-options.component';
import { RegisterCollaboratorComponent } from './components/register-collaborator/register-collaborator.component';

// Componentes


const appRoutes: Routes = [
	//{path: '', component: HomeComponent},
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'register-option',
		component: RegisterOptionsComponent

	},
	{
		path: 'register',
		component: RegisterComponent
	},
	{
		path: 'register-collaborator',
		component: RegisterCollaboratorComponent
	},
	{
		path: 'homepage',
		component: HomepageComponent
	}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);