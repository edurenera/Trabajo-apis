import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private baseUrl = 'http://localhost:3000';
  private _http = inject(HttpClient);

  obtenerUsuarios(page: number, perPage: number): Observable<any> {
    return this._http.get<any>(`${this.baseUrl}/usuarios?page=${page}&perPage=${perPage}`);
  }

  crearUsuario(usuario: any): Observable<any> {
    return this._http.post<any>(`${this.baseUrl}/usuarios`, usuario);
  }

  eliminarUsuario(id: number): Observable<any> {
    return this._http.delete<any>(`${this.baseUrl}/usuarios/${id}`);
  }
}
