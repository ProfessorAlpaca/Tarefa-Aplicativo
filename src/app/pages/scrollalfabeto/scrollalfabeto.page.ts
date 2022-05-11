import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrollalfabeto',
  templateUrl: './scrollalfabeto.page.html',
  styleUrls: ['./scrollalfabeto.page.scss'],
})
export class ScrollalfabetoPage implements OnInit {

  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  limite = 5;


  constructor() { }
  
  ngOnInit() {
  }

  atualizaInfinite(infiniteScrollEvent: any){
    this.limite += 10;
    infiniteScrollEvent.target.complete();
    
  }

}
