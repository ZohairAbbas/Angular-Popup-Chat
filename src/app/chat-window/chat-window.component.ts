import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})

export class ChatWindowComponent implements OnInit, AfterViewInit{
  @ViewChild('messageInput', { static: true }) messageInput!: ElementRef<HTMLInputElement>;
  messages: string[] = ["Hello, How can I help you?"];
  newMessage: string = '';
  isMinimized = false;

  ngOnInit() {
    // Add any necessary initialization logic here
  }
  constructor(private http: HttpClient) {}

  ngAfterViewInit() {
    this.messageInput.nativeElement.addEventListener('keydown', (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        this.sendMessage();
      }
    });
  }

  sendMessage() {
    this.messages.push(this.newMessage);
    let temp = this.newMessage
    this.newMessage = '';
    this.http.post('https://ingestai.io/api/library/3615', { q: temp, apikey: 'G7Pr0Bb4CMuNBunFLVmq316BhWKcr4YvyX' }).subscribe((response: any) => {
      this.messages.push(response.answer);
    });
  }

}

