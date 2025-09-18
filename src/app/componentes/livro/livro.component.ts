import { Component, input } from '@angular/core';
import { Livro } from './livro';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-livro',
  imports: [CommonModule],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css'
})
export class LivroComponent {

  //criando inputSignal Aqui
  livro = input.required<Livro>();

  alternarFavorito(): void {
    //usando o sinal para alterar o valor de favorito
    this.livro().favorito = !this.livro().favorito;
  }
}
