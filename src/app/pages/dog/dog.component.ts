import { Component, inject } from '@angular/core';
import { DogService } from '../../services/dog.service';

@Component({
  selector: 'app-dog',
  standalone: true,
  imports: [],
  templateUrl: './dog.component.html',
  styleUrl: './dog.component.css'
})
export class DogComponent {
  imgDog: string = '../assets/loading.jpg';
  private _dogsService = inject(DogService);

  
  insertarDog() {
    this._dogsService.getDog().subscribe(
      (data) => {
        this.imgDog = this._dogsService.processDog(data);
      }
    )
  }
}
