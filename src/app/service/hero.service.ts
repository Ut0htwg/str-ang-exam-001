import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  list: Hero[] = [
    {
      "id": 1,
      "name": "Joel Lanchberry",
      "superpower": "angular programmer",
      "address": "Pervomaysk"
        }, {
      "id": 4,
      "name": "Almeria Sunshine",
      "superpower": "filterfan",
      "address": "Smolensk"
    }, {
      "id": 6,
      "name": "Geri Yeskin",
      "superpower": "matrix",
      "address": "Kuangshan"
    }, {
      "id": 7,
      "name": "Paco Grigolashvill",
      "superpower": "Virtual",
      "address": "Yerevan"
    }, {
      "id": 10,
      "name": "Nonna Adolthine",
      "superpower": "Refracturation",
      "address": "Arvika"
    }, {
      "id": 11,
      "name": "Darrick McLaine",
      "superpower": "ego-centric",
      "address": "Pomabamba"
    }, {
      "id": 13,
      "name": "Luis Ibbitt",
      "superpower": "github fan",
      "address": "Kolomak"
    }, {
      "id": 14,
      "name": "Dorine Klimshuk",
      "superpower": "modular",
      "address": "Tiflet"
    }, {
      "id": 15,
      "name": "Pauletta Handyside",
      "superpower": "first time succedy",
      "address": "Pajeksan"
    }, {
      "id": 16,
      "name": "Gardy Jordeson",
      "superpower": "frontend magician",
      "address": "Lanús"
    }
  ];

  getAll(): Hero[] {
     return this.list;
    }

  constructor() { }
}
