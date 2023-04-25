import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  inserturl =   "http://localhost:9002/insert";
  updateurl =   "http://localhost:9002/update";
  deleteurl =   "http://localhost:9002/delete";
  viewurl =   "http://localhost:9002/view";
  constructor (private h1 : HttpClient) { }
  insertservice(data:any)
  {
    return this.h1.post(this.inserturl,data);
  }
  updateservice(data:any)
  {
    return this.h1.post(this.updateurl,data);
  }
  deleteservice(data:any)
  {
    return this.h1.post(this.deleteurl,data);
  }
viewservice()
{
  return this.h1.get(this.viewurl);
}

}