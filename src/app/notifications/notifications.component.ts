import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';
import { MatTableDataSource } from '@angular/material';

@Component({
	selector: 'app-notifications',
	templateUrl: './notifications.component.html',
	styleUrls: [ './notifications.component.css' ]
})
export class NotificationsComponent implements OnInit {
	displayedColumns: string[] = [ 'AppointmentDate', 'Name', 'Reason' ];
	dataSource;

	constructor(private service: NotificationService) {}

	ngOnInit() {
		this.service.getAll().subscribe((data) => {
			console.log('Result - ', data);
			this.dataSource = new MatTableDataSource<Notification>(data as Notification[]);
		});
	}
}
