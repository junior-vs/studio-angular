import { MessageService } from './message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {



  constructor(private serviceMessage: MessageService) {

  }

  ngOnInit(): void {
  }

  getMessages() {
    return this.serviceMessage.getMessages();
  }

  clear(){
    return this.serviceMessage.clear();
  }


}
