import { Component } from '@angular/core';

@Component({
  selector: 'app-card-button-cancel',
  standalone: false,
  templateUrl: './card-button-cancel.html',
  //styleUrl: './card-button-cancel.scss'
  styles: [
    `
    .card-cancel-button{
      font-size: 16px;
      text-align: center;
      margin-top: 10px;
      border-radius: 25px;
      background-color: #eb1c1cff;
      cursor: pointer;
      font-weight: bold;
      padding: 10px;
    }
    `
  ]
})
export class CardButtonCancel {

}
