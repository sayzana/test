import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { CountrySuggestService } from './country-suggest.service';
import { Country } from './country-suggest';

@Component({
  selector: 'app-country-suggest',
  templateUrl: './country-suggest.component.html',
  styleUrls: ['./country-suggest.component.css']
})
export class CountrySuggestComponent implements OnInit {
  @Input() apiUrl: string;

  countries$: Observable<Country[]>;
  private searchTerms = new Subject<string>();

  constructor(private service: CountrySuggestService) {}

  ngOnInit() {
    if (this.apiUrl) this.service.setApiUrl(this.apiUrl);
    this.countries$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.service.searchCountries(term))
    );
  }

  search(term) {
    this.searchTerms.next(term);
  }
}
