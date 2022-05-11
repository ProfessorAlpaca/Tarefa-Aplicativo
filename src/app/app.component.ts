import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Scroll Alfabeto', url: '/scrollalfabeto', icon: 'language'},
    { title: 'Formulario', url: '/formulario', icon: 'reader'},
    { title: 'Infinit Scroll', url: '/infinitscrollionic', icon: 'infinite'},
    { title: 'DateTime', url: '/datetime', icon: 'timer'},
    { title: 'Input', url: '/input', icon: 'document-text' },
    { title: 'Cursos', url: '/cursos', icon: 'globe'},
    { title: 'Checkbox', url: '/checkbox', icon: 'checkbox'},
    { title: 'Card', url: '/card', icon: 'newspaper'},
    { title: 'Badge', url: '/badge', icon: 'list'}, 
    { title: 'Alerta', url: '/alert', icon: 'alert-circle'},
    { title: 'Action Sheet', url: '/actionsheet', icon: 'alert'},
    { title: 'Navegação', url: '/navegacao', icon: 'code' },
    { title: 'Lucros', url: '/folder/Lucros', icon: 'cash' },
    { title: 'Pratos', url: '/folder/Pratos', icon: 'restaurant' },
    { title: 'Bebidas', url: '/folder/Bebidas', icon: 'wine' },
    { title: 'Doces', url: '/folder/Doces', icon: 'ice-cream' },
    { title: 'Clientes', url: '/folder/Clientes', icon: 'person-add' },
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
