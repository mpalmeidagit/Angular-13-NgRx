import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UsuarioModel } from '../Models/UsuarioModel';

@Injectable({ providedIn: 'root' })
export class UsuarioService {
    private url = `${environment.endpoint}`;
    constructor(private http: HttpClient) {
    }


    getUsuarios(){
        return this.http.get<UsuarioModel[]>(`${this.url}`);
    }

    getUsuario(id: number){
        return this.http.get<UsuarioModel[]>(`${this.url}/${id}`);   
    }

    addUsuario(record: UsuarioModel){
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        return this.http.put<UsuarioModel>(`${this.url}/${record.id, JSON.stringify(record)}`, { headers: headers });
    }

    updateUsuario(record: UsuarioModel){
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        return this.http.put<UsuarioModel>(`${this.url}/${record.id, JSON.stringify(record)}`, { headers: headers });
    }

    deleteUsuario(id: number){
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        return this.http.put<UsuarioModel>(`${this.url}/${id}`, { headers: headers });
    }
}