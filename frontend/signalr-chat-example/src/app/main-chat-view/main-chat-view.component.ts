import { Component, OnInit } from '@angular/core';
import { SignalRService } from '../services/signal-r.service';

@Component({
  selector: 'app-main-chat-view',
  templateUrl: './main-chat-view.component.html',
  styleUrls: ['./main-chat-view.component.css']
})
export class MainChatViewComponent implements OnInit {

  constructor(private signalRService: SignalRService) { }

  ngOnInit(): void {
  }

  public onMessageSubmit(){
    
  }
}
