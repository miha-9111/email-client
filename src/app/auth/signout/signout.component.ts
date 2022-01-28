import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.scss']
})
export class SignoutComponent implements OnInit {

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.signOut().subscribe(() => {
      // Navigate the user back to a signin page
    });
  }

}
