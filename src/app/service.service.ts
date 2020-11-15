import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private socket: Socket) { }


  // Join chatroom
  joinRoom(username, room) {
    this.socket.emit('joinRoom', { username, room });
  }


  //Get Room Name and Users 
  getRoomNameAndUser() {
    return this.socket
    .fromEvent("roomUsers")
    .pipe(map((data) => data));

    // this.socket.on('roomUsers', ({ room, users }) => {
    //   return { room, users }
    // });
  }


}
