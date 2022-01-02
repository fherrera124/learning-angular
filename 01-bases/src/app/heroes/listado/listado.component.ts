import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = [
    'Spiderman',
    'Ironman',
    'Hulk',
    'Thor',
    'Capitán América',
  ];

  heroesBorrados: string[] = [];

  ultimoBorrado: string = "";

  borrarHeroe(): boolean {
    const heroeBorrado = this.heroes.shift();

    if (heroeBorrado != undefined) {
      this.ultimoBorrado = heroeBorrado;
      console.log('Borrado: ' + heroeBorrado);
      this.heroesBorrados.push(heroeBorrado);
      return true;
    }

    return false;
  }

  resetearListado(): void {

    this.heroes = this.heroes.concat(this.heroesBorrados);

    this.heroesBorrados = []

  }
}
