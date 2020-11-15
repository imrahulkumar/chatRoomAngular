import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const config: SocketIoConfig = { url: 'https://chat-room-gbu.herokuapp.com', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    ChatRoomComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule, 
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
