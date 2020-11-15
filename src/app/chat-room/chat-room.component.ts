import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {

  roomName: string = "";
  userList: any[] = [];
  message: string = "";

  chatMsg: any[] = [];

  constructor(private service: ServiceService) {
    this.getRoomNameAndUser();
    this.getMessage();
  }

  ngOnInit(): void {
    if (!this.service.isUserInserted) {
      let currentUser = JSON.parse(localStorage.getItem('user'));
      this.service.joinRoom(currentUser.username, currentUser.room)
    }

  }

  getRoomNameAndUser() {
    this.service.getRoomNameAndUser().subscribe((res: any) => {
      console.log("room and user", res);
      if (res && res.room) {
        this.roomName = res.room;
      }
      if (res && res.users && Array.isArray(res.users)) {
        this.userList = res.users;
      }
    })
  }


  sendMessage() {
    if (this.message.trim())
      this.service.sendMessage(this.message.trim());
    this.message = "";
  }

  getMessage() {
    this.service.getMessage().subscribe((res: any) => {
      console.log("get msg ::", res);
      this.chatMsg.push(res)
    })
  }

}
