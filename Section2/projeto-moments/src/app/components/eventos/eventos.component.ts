import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent implements OnInit {

  canShow: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  showMessage():void {
    this.canShow = !this.canShow;
  }


}
