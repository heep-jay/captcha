import { Component } from '@angular/core';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-root',
  template: `
  <ejs-schedule width='100%' height='550px' [selectedDate]='selectedDate'
  [eventSettings]='eventSettings' [currentView]="setView">
  <ng-template #eventSettingsTemplate let-data>
    <div class="template-wrapper">
      <p>{{data.eventName}}</p>
      <!-- <p>Date: <span>{{data.startTime}}</span></p> -->
    </div>
  </ng-template>
   </ejs-schedule>
   `,
  styleUrls: ['./app.component.css'],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
})
export class AppComponent {
  public data: object[] = [{
    id: 2,
    eventName: 'Fucking',
    startTime: new Date(2022, 10, 15, 10, 0),
    endTime: new Date(2022, 10, 16, 12, 30),
    isAllDay: false
  }];
  public setView = 'Month';
  public selectedDate: Date = new Date();
  public eventSettings = {
    dataSource: this.data,
    fields: {
      id: 'id',
      subject: { name: 'eventName' },
      isAllDay: { name: 'isAllDay' },
      startTime: { name: 'startTime' },
      endTime: { name: 'endTime' },
    }
  };

  title = 'shedular_app';
}



// <ng-container>
// <app-captcha></app-captcha>
// </ng-container>
