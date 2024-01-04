import { Component } from '@angular/core';
import { NotificationService } from './service/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'differenziata-front-end';

  constructor(
    private notificationService: NotificationService
  ) {
    notificationService.requestNotificationPermission();
  }

  scheduleNotification() {
    const scheduledTime = new Date('2024-01-04T12:22:00'); // Imposta l'orario desiderato
    const currentTime = new Date();

    const timeDifference = scheduledTime.getTime() - currentTime.getTime();

    if (timeDifference > 0) {
      setTimeout(() => {
        this.notificationService.showNotification('Titolo della notifica', {
          body: 'Contenuto della notifica',
        });
      }, timeDifference);
    }
  }
}
