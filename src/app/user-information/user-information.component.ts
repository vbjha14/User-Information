import { Component } from '@angular/core';
import { UserInfoClientService } from '../user-info-client.service';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent {

  constructor(
    private userInfoClient:UserInfoClientService
  ){}

  users:any

  ngOnInit(){
    this.userInfoClient.getPackaging().subscribe(d=>{
      this.users=d;
      console.log(this.users)

    })
  }
}
