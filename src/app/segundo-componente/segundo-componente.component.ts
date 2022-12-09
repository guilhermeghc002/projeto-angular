import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {

nome = "Guilherme";
dataNascimento = "1993-09-29";
urlImagem = "/assets/joao.PNG";

}
