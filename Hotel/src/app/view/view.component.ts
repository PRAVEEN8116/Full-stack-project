import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/hotel.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  data:any;
  constructor(private s1:HotelService) { }

  ngOnInit(): void {
     let response = this.s1.viewservice();
     response.subscribe((data1)=>this.data=data1);
  }
}