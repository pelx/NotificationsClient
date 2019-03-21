import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class NotificationService {
	baseUrl: string = 'https://localhost:44393/api/notifications/';

	constructor(private http: HttpClient) {}

	getAll() {
		return this.http.get(this.baseUrl);
	}
}
