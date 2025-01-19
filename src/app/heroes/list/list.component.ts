import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames:string [] = ['spiderman','ironman','baclkwidow','hulk'] ;
  public deleteHeroes ?:string ;

  removeLastHero():void{
     this.deleteHeroes = this.heroNames.pop();
  }

}
