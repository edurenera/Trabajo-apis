import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios: any[] = [];

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(): void {
    this.usuariosService.obtenerUsuarios(0, 100)
      .subscribe(data => {
        this.usuarios = data.usuarios;;
      });
  }

  crearUsuario(): void {
    const nuevoUsuario = {
      nombre: 'Nuevo',
      apellido: 'Usuario',
      edad: 25,
      ciudad: 'Ciudad',
      ocupacion: 'Ocupación'
    };

    this.usuariosService.crearUsuario(nuevoUsuario).subscribe(data => {
        console.log('Usuario creado:', data);
        this.obtenerUsuarios();
      });
  }

  eliminarUsuario(id: number): void {
    if (confirm('¿Estás seguro de eliminar este usuario?')) {
      this.usuariosService.eliminarUsuario(id)
        .subscribe(data => {
          console.log(data.message);
          this.obtenerUsuarios();
        });
    }
  }
}
