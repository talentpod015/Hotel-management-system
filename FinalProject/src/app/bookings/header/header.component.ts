import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from 'src/app/services/authservice.service';
 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  constructor(private authservice:AuthserviceService) { }
  isLoggedIn;
  ngOnInit() {
    this.authservice.loginSubject.subscribe(data=>{
      this.isLoggedIn=data;
      //console.log(this.isLoggedIn);
      });

}
logout(){
  this.authservice.logout();
}
}