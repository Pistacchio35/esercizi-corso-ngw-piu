import { Component } from '@angular/core';
import { IUser } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})

export class UserComponent {
  constructor(private userDTO: UserService) { }

  userDetail: IUser[] = [];

  ngOnInit() {
    this.userDTO.getUser(1, 10).subscribe({
      next: (response: any) => {
        this.userDetail = response.data;
        console.log(response.data);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}