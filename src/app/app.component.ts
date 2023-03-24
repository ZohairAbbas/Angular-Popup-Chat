import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChatWindowComponent } from './chat-window/chat-window.component';

@Component({
  selector: 'app-root',
  template: `
    <button mat-raised-button (click)="openChat()">Open Chat</button>
  `,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'popup-chat';
  constructor(private dialog: MatDialog) {}

  openChat() {
    this.dialog.open(ChatWindowComponent)}
}


