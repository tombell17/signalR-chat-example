import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  private hubConnection: signalR.HubConnection;

  constructor() { 
    this.buildConnection();
    this.startConnection();
  }

  public buildConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:5000/chat')
      .build();
  }

  private startConnection = async () => {
    try {

      await this.hubConnection.start();
      console.log("Connection started");

    } catch(Exception) {      

      console.log(`There was an error while connecting to the server. ${Exception.message}`);
    }
    

  }
}
