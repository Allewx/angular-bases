import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,

  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironmam';
  public age: number = 45;

  get capitalizaName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeName(): void {
    this.name = 'silver';
  }
  changeAge(): void {
    this.age = 25;
  }

  resetDatos(): void {
    this.name = 'ironman';
    this.age = 45;
   }
}
