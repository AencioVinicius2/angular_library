import { Component, OnInit } from '@angular/core';
import { UpperCasePipe, TitleCasePipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [
    UpperCasePipe,
    TitleCasePipe,
    DatePipe,
  ],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent implements OnInit {
  someText: string = "Testando algo"

  today = new Date();

  constructor() {}
  ngOnInit(): void {}
}
