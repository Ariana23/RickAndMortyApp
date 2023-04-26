import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RickAndMortyService } from '../services/rick-and-morty.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, SharedModule],
})
export class HomePage implements OnInit {
Sevent: any;
loadData(arg0: any) {
throw new Error('Method not implemented.');
}
  
  characters: any[] = [];
  params = {} as any;

  constructor(
    private rickAndMortySvc: RickAndMortyService
  ) {}

  ngOnInit() {
    this.params.page = 0;
    this.getCharacters()
  }

  //obtener personajes
  getCharacters(event?: any){
    this.params.page += 1;

    this.rickAndMortySvc.getCharacters(this.params).subscribe({

        next: (res: any) => {
          
          this.characters.push(...res.results)
          console.log(this.characters);

          if(event) event.target.complete();

        },
        error:(error:any) => {
          if(event) event.target.complete();


        }


    })

  }
  //BUSCAR PERSONAJES
  searchCharacters() {
    this.params.page = 1;

    this.rickAndMortySvc.getCharacters(this.params).subscribe({

        next: (res: any) => {
          
          this.characters = res.results

        

        },
        error:(error:any) => {
         


        }


    })

  }

}
