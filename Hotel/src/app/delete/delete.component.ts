import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/hotel.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  constructor(private s1:HotelService) {}
  ngOnInit(): void {
  }
delete(deleteform:{value:any;})
{
 return this.s1.deleteservice(deleteform.value).subscribe(); 
 

}

}