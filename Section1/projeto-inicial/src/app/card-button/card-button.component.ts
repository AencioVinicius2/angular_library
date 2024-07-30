import { Component } from '@angular/core';

@Component({
  selector: 'card-button',
  // templateUrl: './card-button.component.html',
  template: `
    <div class="card__button">R$250,0/Mês</div>
  `,
  styles: 
  `
  .card__button {
    font-size: 16px;
    text-align: center;
    margin-top: 10px;
    border-radius: 25px;
    background-color: #FFFF;
    cursor: pointer;
  }
  `
})
export class CardButtonComponent {

}
