import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  tipo = 'Simples';
  preco = 100;

  // getFullPrice() {
  //   setTimeout(() => {
  //     console.log('Set TimeOut ');
  //     this.tipo = 'Teste';
  //   }, 4000)
  //   return "R$" + this.preco + ",00/Mês"
  // }
  plano = {
    infos: {
      tipo: 'Simples',
      preco: 100, 
    }
  }

  // @ts-ignore
  //tipos:
}
