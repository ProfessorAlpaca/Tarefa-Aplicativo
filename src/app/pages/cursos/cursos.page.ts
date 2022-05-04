import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage implements OnInit {

    cursosSaoLucas: any[] = [
      {nomeCurso: 'Administração', valor: 1, marcado: false},
      {nomeCurso: 'Biomedicina', valor: 2, marcado: false},
      {nomeCurso: 'Direito', valor: 3, marcado: false},
      {nomeCurso: 'Medicina Veterinaria', valor: 4, marcado: false},
      {nomeCurso: 'Farmácia', valor: 5, marcado: false},
      {nomeCurso: 'Pedagogia', valor: 6, marcado: false},
      {nomeCurso: 'Medicina', valor: 7, marcado: false},
      {nomeCurso: 'Sistemas de Informação', valor: 8, marcado: false},
      {nomeCurso: 'Engenharia Civil', valor: 9, marcado: false},
      {nomeCurso: 'Gestão Financeira', valor: 10, marcado: false},
    
    ];

  constructor() { }

  ngOnInit() {
  }

  exibircursosSaoLucas() {
    console.log(this.cursosSaoLucas);

  }

}
