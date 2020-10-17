import { Component } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { SignalRService } from './services/signal-r.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  title = 'signalr-chat-example';
  
}
