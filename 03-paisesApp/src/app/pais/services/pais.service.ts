import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiKey: string = '16edcf36da9eacae9c6aedef4937abdd';
  private apiUrl: string = 'http://api.countrylayer.com/v2';

  constructor(private http: HttpClient) {}

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}?access_key=${this.apiKey}`;

    return this.http.get<Country[]>(url);
  }
}
