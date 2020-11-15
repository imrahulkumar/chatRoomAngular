import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  constructor(private service: ServiceService,
    private route: Router) {
    this.createJoinRoomForm();
  }

  authentication: FormGroup;

  ngOnInit(): void {
  }


  createJoinRoomForm() {
    this.authentication = new FormGroup({
      username: new FormControl('', [Validators.required]),
      room: new FormControl('JavaScript', [Validators.required])
    })
  }


  onSubmit(f) {
    if (f.invalid) {
      alert("Please fill the form");
      return;
    }
    this.service.joinRoom(f.value.username, f.value.room);
    localStorage.setItem('user', JSON.stringify(f.value));
    this.service.isUserInserted = true;
    this.route.navigateByUrl('/chat-room');
    console.log("f", f.value);
  }

}
