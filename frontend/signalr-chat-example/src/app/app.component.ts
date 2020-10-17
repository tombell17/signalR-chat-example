import { Component } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { sign } from 'crypto';
import { SignalRService } from './signal-r.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  title = 'signalr-chat-example';
  constructor(private signalRService: SignalRService){}
}
