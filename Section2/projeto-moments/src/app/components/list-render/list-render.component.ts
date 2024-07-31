import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IAnimal } from '../../interfaces/Animal';

import { ListService } from '../../services/list.service';
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
  animals: IAnimal[] = [
    {name: "Turca", type: "Dog", age: 4},
    {name: "Tom", type: "Cat", age: 2},
    {name: "Frida`", type: "Dog", age: 1},
    {name: "Bob", type: "Horse", age: 5},
  ]

  animalDetails = '';

  constructor(private listService: ListService) {}

  ngOnInit(): void {}

  showAge(animal: IAnimal): void {
    this.animalDetails = 'o animal ' + animal.name + ' tem ' + animal.age + ' anos';
  }

  removeAnimal(animal: IAnimal): void {
    console.log("Removendo animal...")
    this.animals =  this.listService.remove(this.animals, animal)
  }
}
