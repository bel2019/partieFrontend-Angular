import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Address } from '../models/address';


@Injectable({
  providedIn: 'root'
})
export class AddressService {
 
  constructor(private http: HttpClient) { }

  getAll():Observable<Address[]> {
    return this.http.get<Address[]>(`${environment.apiUrl}/addresses`);
  }

  Save(data: Address) {
    return this.http.post(`${environment.apiUrl}/addresses`, data);
  }
}
