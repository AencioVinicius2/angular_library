import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent implements OnInit {
  animals = [
    {name: "Turca", type: "Dog"},
    {name: "Tom", type: "Cat"},
    {name: "Frida`", type: "Dog"},
    {name: "Bob", type: "Horse"},
  ]

  constructor() {}

  ngOnInit(): void {}
}
