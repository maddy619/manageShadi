import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient }    from '@angular/common/http';

@Injectable()
export class InvitationCardService {

  constructor(private http: HttpClient) { 

  }

  getInvitation() : Observable<string>{

     return this.http.get<string>(
       'http://127.0.0.1:1212/'
      );
   
  }

}
