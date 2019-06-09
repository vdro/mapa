import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 latitude= 54.331613;
 longitude= 18.633065;

 onChoseLocation(event){
   console.log(event);
   this.latitude=event.coords.lat;
   this.longitude=event.coords.lng;
 }
}
