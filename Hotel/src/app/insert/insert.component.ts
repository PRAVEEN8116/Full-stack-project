import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/hotel.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {
  constructor(private s1:HotelService) {}
  bannerResult: any = [];
  ngOnInit(): void {
  }
insert(insertform:{value:any;})
{
 return this.s1.insertservice(insertform.value).subscribe(); 
 

}
}

