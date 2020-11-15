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

  constructor(private service: ServiceService) {
    this.getRoomNameAndUser();
  }

  ngOnInit(): void {
  }

  getRoomNameAndUser() {
    this.service.getRoomNameAndUser().subscribe((res: any) => {
      if (res && res.room) {
        this.roomName = res.room;
      }
      if (res && res.users && Array.isArray(res.users)) {
        this.userList = res.users;
      }
    })
  }

}
