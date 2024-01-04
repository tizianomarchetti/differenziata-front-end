import { Component } from '@angular/core';
import { NotificationService } from './service/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'differenziata-front-end';
  esitoClick: string = '';

  constructor(
    private notificationService: NotificationService
  ) {
  }

  scheduleNotification() {
    this.notificationService.requestNotificationPermission();
    const scheduledTime = new Date('2024-01-04T12:52:00'); // Imposta l'orario desiderato
    const currentTime = new Date();

    const timeDifference = scheduledTime.getTime() - currentTime.getTime();

    this.esitoClick = 'Notifica programmata'

    if (timeDifference > 0) {
      setTimeout(() => {
        this.notificationService.showNotification('Titolo della notifica', {
          body: 'Contenuto della notifica',
        });
      }, timeDifference);
    }
  }
}
