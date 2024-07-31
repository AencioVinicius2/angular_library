import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-two-way-binding',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './two-way-binding.component.html',
  styleUrl: './two-way-binding.component.css'
})
export class TwoWayBindingComponent implements OnInit {
  name: string = '';

  constructor() {}

  ngOnInit(): void {}
}
