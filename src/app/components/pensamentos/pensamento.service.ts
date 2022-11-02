import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API = '  http://localhost:3000/pensamentos';

  constructor(private http: HttpClient) { }

  listar(pagina: number): Observable<Pensamento[]> {
    const itens = 3;
    let params = new HttpParams()
      .set("_page", pagina)
      .set("_limit", itens)
    
    return this.http.get<Pensamento[]>(this.API, { params });
    //return this.http.get<Pensamento[]>(`${this.API}?_page=${pagina}&_limit=${itens}`);
  }

  criar(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.API, pensamento);
  }

  excluir(id: number): Observable<Pensamento> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Pensamento>(url);
  }

  buscarPeloid(id: number): Observable<Pensamento> {
    const url = `${this.API}/${id}`;
    return this.http.get<Pensamento>(url);
  }

  editar(pensamento: Pensamento): Observable<Pensamento> {
    const url = `${this.API}/${pensamento.id}`;
    return this.http.put<Pensamento>(url, pensamento);
  }
}
