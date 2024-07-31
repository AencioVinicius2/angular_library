import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-if-render',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './if-render.component.html',
  styleUrl: './if-render.component.css'
})
export class IfRenderComponent implements OnInit {
  canShow: boolean = true;
  name: string = 'Matheus'

  constructor() {}

  ngOnInit(): void {}
}
