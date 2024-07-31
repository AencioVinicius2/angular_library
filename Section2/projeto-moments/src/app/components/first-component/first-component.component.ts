import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent implements OnInit {
  name: string = "Matheus";
  age: number = 30;
  job: string = 'Programador';
  hobbies = ["Correr", "Jogar", "Comer"]
  car = {
    name: "Polo",
    year: "2019"
  }

  constructor() {}

  ngOnInit(): void {}
}
