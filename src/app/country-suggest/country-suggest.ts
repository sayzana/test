export class Country {
  alpha2Code: string;
  alpha3Code: string;
  altSpellings: Array<string>;
  area: number;
  borders: Array<string>;
  callingCodes: Array<string>;
  capital: string;
  cioc: string;
  currencies: Array<any>;
  demonym: string;
  flag: string;
  gini: number;
  languages: Array<any>;
  latlng: Array<number>;
  name: string;
  nativeName: string;
  numericCode: string;
  population: number;
  region: string;
  regionalBlocs: Array<any>;
  subregion: string;
  timezones: Array<string>;
  topLevelDomain: Array<string>;
  translations: any;
  constructor(init: Partial<Country>) {
    Object.assign(this, init);
  }
}
