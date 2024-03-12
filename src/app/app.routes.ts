import { Routes } from '@angular/router';
import { ClimaComponent } from './pages/clima/clima.component';
import { HomeComponent } from './pages/home/home.component';
import { GithubComponent } from './pages/github/github.component';
import { AdivinanzaComponent } from './pages/adivinanza/adivinanza.component';
import { DogComponent } from './pages/dog/dog.component'; // Actualiza la importación


export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Inicio' },
  { path: 'clima', component: ClimaComponent, title: 'Clima' },
  { path: 'github', component: GithubComponent, title: 'Github' },
  { path: 'adivinanza', component: AdivinanzaComponent, title: 'Adivinanza' },
  { path: 'dog', component: DogComponent, title: 'Perros' }, // Cambia el nombre del componente y el título
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
