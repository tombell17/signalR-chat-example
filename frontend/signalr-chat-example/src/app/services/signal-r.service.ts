import { EventEmitter, Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { Message } from '../models/message';


@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  private hubConnection: signalR.HubConnection;
  messageReceivedEventEmitter = new EventEmitter<Message>();

  constructor() { 
    this.buildConnection();
    this.startConnection();
  }

  private buildConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:5000/chat')
      .build();  
  }

  private startConnection = async () => {
    try {

      await this.hubConnection.start();
      console.log("Connection started");
      this.registerEvents();
    } catch(Exception) {      

      console.log(`There was an error while connecting to the server. ${Exception.message}`);
    }    
  }

  public PublishMessage =  async (message: Message) => {        
    await this.hubConnection.invoke("SendMessage", message);
  }

  private registerEvents() {
    this.hubConnection.on("SendMessage", (message: Message) => {
      this.messageReceivedEventEmitter.emit(message);
    });
  }
}
