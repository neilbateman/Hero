import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes'
import { Obervable } from 'rxjs/Obervable';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService; fetched heroes')
    return of(HEROES);
  }

  constructor(private messageService: MessageService) { }

}
