import { Component, OnInit } from '@angular/core';
import { Message } from '../models/message';
import { SignalRService } from '../services/signal-r.service';

@Component({
  selector: 'app-main-chat-view',
  templateUrl: './main-chat-view.component.html',
  styleUrls: ['./main-chat-view.component.css']
})
export class MainChatViewComponent implements OnInit {
  chatContent: string = '';
  constructor(private signalRService: SignalRService) { }

  ngOnInit(): void {
    this.signalRService.messageReceivedEventEmitter.subscribe((message) => {
      const formattedRecievedMessage: string = `[${message.timestamp}] - ${message.sentByUser} says: ${message.content}`;

      this.chatContent = this.chatContent + '\r\n' + formattedRecievedMessage;
    });
  }

  public async publishMessage(sentByUser: string, content: string) {
    let messageToPublish = new Message();

    messageToPublish.Content = content;
    messageToPublish.SentByUser = sentByUser;
    messageToPublish.Timestamp = new Date();

    await this.signalRService.PublishMessage(messageToPublish);    
  }
}
