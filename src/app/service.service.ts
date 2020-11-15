import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  isUserInserted: boolean;

  constructor(private socket: Socket) { }

  formatMessage(username, text) {
    return {
      username,
      text,
      time: new Date()
    };
  }


  // Join chatroom
  joinRoom(username, room) {
    this.socket.emit('joinRoom', { username, room });
  }

  //Get Room Name and Users 
  getRoomNameAndUser() {
    return this.socket
      .fromEvent("roomUsers")
      .pipe(map((data) => data));
  }

  sendMessage(message) {
    // let currentUser = JSON.parse(localStorage.getItem('user'));
    // let msg = this.formatMessage(currentUser.username, message);
    this.socket.emit('chatMessage', message);
  }

  getMessage() {
    return this.socket
      .fromEvent("message")
      .pipe(map((data) => data));
  }

}
