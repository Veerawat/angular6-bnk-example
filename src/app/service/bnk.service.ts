import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from '../models/member';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Feed } from '../models/feed';

@Injectable({
  providedIn: 'root'
})
export class BnkService {

  constructor(private http: HttpClient) { }

  getListBnk(): Observable<Member[]> {
    return this.http.get<Member[]>(`${environment.api_url}bnk/members`);
  }

  getInstragram(id: string): Observable<Feed> {
    return this.http.get<Feed>(`${environment.instragram_api_url}${id}`);
  }
}
