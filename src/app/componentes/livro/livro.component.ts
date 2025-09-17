import { Component } from '@angular/core';
import { Livro } from './livro';

@Component({
  selector: 'app-livro',
  imports: [],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css'
})
export class LivroComponent {

  alternarFavorito(): void {
    this.livro.favorito = !this.livro.favorito;
  }
  
  livro: Livro = {
    titulo: 'O Senhor dos Anéis',
    autoria: 'J.R.R. Tolkien',
    favorito: false,
    genero: 'Fantasia Épica',
    imagem: 'https://harpercollins.com.br/cdn/shop/files/9786555114249_256x382.jpg?v=1754636754'
  };

}
