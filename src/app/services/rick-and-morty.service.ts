import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
  getCharacter(params: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  getCharacters(params: any){
    return this.http.get(environment.baseUrl + environment.character, {params})

  }

  getCharacterById(id: string){
    return this.http.get(environment.baseUrl + environment.character + id)

  }

  getByUrl (url:string){
    return this.http.get(url)
  }


}
