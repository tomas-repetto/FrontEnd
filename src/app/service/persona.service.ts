import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { persona } from '../model/persona.model';
import { Observable } from 'rxjs';


const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';
@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'https://argentinaprogramabackend-apyc.onrender.com/personas/';
  constructor(private http: HttpClient) { }

  public getPersona(): Observable<persona>{
    return this.http.get<persona>(this.URL+'traer/pefil')
  }
}
