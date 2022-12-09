import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input() message: string;
  @Output() close: new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onCLose() {
    this.close.emit()
  }

}
