import { Component } from '@angular/core';
import { Contato, Tipo } from '../adiciona-contato/contato';

@Component({
  selector: 'app-adiciona-contato',
  templateUrl: './adiciona-contato.component.html',
  styleUrls: ['./adiciona-contato.component.css']
})
export class AdicionaContatoComponent {
  contatos: Contato[] = [];
  novoContato: Contato = new Contato('', '', '', '', Tipo.AMIGO);

  adicionarContato() {
    this.contatos.push(
      new Contato(
        this.novoContato.nome,
        this.novoContato.telefone,
        this.novoContato.email,
        this.novoContato.aniversario,
        this.novoContato.tipo
      )
    );
    this.novoContato = new Contato('', '', '', '', Tipo.AMIGO);
  }
}
