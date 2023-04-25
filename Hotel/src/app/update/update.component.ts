import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/hotel.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  constructor(private s1:HotelService) {}
  ngOnInit(): void {
  }
update(updateform:{value:any;})
{
 return this.s1.updateservice(updateform.value).subscribe(); 
 

}

}