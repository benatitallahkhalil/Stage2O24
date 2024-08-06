
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Bilan } from 'src/app/models/bilan.model';

@Injectable({
  providedIn: 'root'
})
export class BilanService {
  private apiUrl = 'https://localhost:7143/api/bilan';

  constructor(private http: HttpClient) { }

  getAllBilans(): Observable<Bilan[]> {
    return this.http.get<Bilan[]>(this.apiUrl);
  }

  getBilanById(id: number): Observable<Bilan> {
    return this.http.get<Bilan>(`${this.apiUrl}/${id}`);
  }

  addBilan(bilan: Bilan): Observable<Bilan> {
    return this.http.post<Bilan>(this.apiUrl, bilan);
  }

  updateBilan(id: number, bilan: Bilan): Observable<Bilan> {
    return this.http.put<Bilan>(`${this.apiUrl}/${id}`, bilan)
      .pipe(
        catchError(error => {
          console.error('Erreur lors de la mise à jour du bilan', error);
          return throwError(error);
        })
      );
  }
  deleteBilan(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
