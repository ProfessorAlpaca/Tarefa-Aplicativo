import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infinitscrollionic',
  templateUrl: './infinitscrollionic.page.html',
  styleUrls: ['./infinitscrollionic.page.scss'],
})
export class InfinitscrollionicPage implements OnInit {

  numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  limite = 5;

  constructor() { }

  ngOnInit() {
  }

  atualizaInfinite(infiniteScrollEvent: any){
    this.limite += 10;
    infiniteScrollEvent.target.complete();

  }

}
