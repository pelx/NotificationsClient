import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRouterModule } from './app-router.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

// services
import { NotificationService } from './notification.service';

// material design
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';

@NgModule({
	declarations: [ AppComponent, NotificationsComponent, FooterComponent, HeaderComponent ],
	imports: [
		BrowserModule,
		AppRouterModule,
		HttpClientModule,
		// material
		BrowserAnimationsModule,
		MatButtonModule,
		MatTableModule
	],
	providers: [ NotificationService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
