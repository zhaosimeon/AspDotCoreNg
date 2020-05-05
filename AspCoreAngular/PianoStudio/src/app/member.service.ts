import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Member from './Member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private memUrl;
  constructor(private http: HttpClient,  @Inject('API_URL') private apiUrl: string) {

   }

  addMember(memberName:string, memberBio:string, memberAge1: any) {
    const memberAge:number = Number(memberAge1);
    const id: number = 0;
    const obj: Member = {
      id,
      memberName,
      memberBio,
      memberAge
    };
    console.log(obj);
    this.http.post<Member>(`${this.apiUrl}members`, obj)
      .subscribe(res => console.log('Done'));
  }

  getMembers() {
    return this.http.get(`${this.apiUrl}members`);
  }
}
