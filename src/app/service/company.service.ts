import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment} from '../../environments/environment.development';
import {ICompany, ICompanyForm} from '../types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  public api: string;

  constructor(private http: HttpClient) {
    this.api = environment.api;
  }

  getAll(): Observable<ICompany[]> {
    return this.http.get<ICompany[]>(`${this.api}/company`);
  }

  create(data: ICompanyForm) {
    return this.http.post<ICompany>(`${this.api}/company`, {
      ...data,
    });
  }

  read(id: string) {
    return this.http.get<ICompany>(`${this.api}/company/${id}`);
  }

  update(data: ICompany) {
    const {id, ...otherProps} = data;

    return this.http.patch<ICompany>(`${this.api}/company/${id}`, {
      ...otherProps,
    });
  }

  delete(id: string) {
    return this.http.delete<ICompany>(`${this.api}/company/${id}`);
  }
}
