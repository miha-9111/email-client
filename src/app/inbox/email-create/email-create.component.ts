import { Component } from '@angular/core';
import { Email } from "../email";
import { AuthService } from "../../auth/auth.service";

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.scss']
})
export class EmailCreateComponent {
  showModal = false;
  email: Email

  constructor(private authService: AuthService) {
    this.email = {
      id: '',
      subject: '',
      text: '',
      to: '',
      from: `${authService.username}@angular-email.com`,
      html: '',
    }
  }
}
