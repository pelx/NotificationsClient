import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { NotificationsComponent } from './notifications/notifications.component';

const routes: Routes = [
	{ path: '', component: NotificationsComponent },
	{ path: 'notifications', component: NotificationsComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRouterModule {}
