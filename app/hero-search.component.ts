/**
 * Created by robertmcbryde on 01/02/2017.
 */
import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { HeroSearchService } from './hero-search.service';
import { Hero } from './hero';

@Component({
    moduleId: module.id,
    selector: 'hero-search',
    templateUrl: './hero-search.component.html',
    styleUrls: ['./hero-search.component.css'],
    providers: [ HeroSearchService ]
})

export class HeroSearchComponent implements OnInit{

  heroes: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroSearchService: HeroSearchService,
              private router: Router) {}


  ngOnInit(): void {
      this.heroes = this.searchTerms
        .debounceTime(300)  // wait 300ms after each keystroke before considering term
        .distinctUntilChanged()  // ignore if search term hasn't changed
        .switchMap(term => term ? this.heroSearchService.search(term) : Observable.of(<Hero[]>([])) // switch to new search term whenever one comes up
            .catch(error => {
              console.log('serach terms failed', error)
              return Observable.of(<Hero[]>([]));
            })
        )
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  goToDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}


