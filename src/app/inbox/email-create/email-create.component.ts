import { Component } from '@angular/core';
import { Email } from "../email";

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.scss']
})
export class EmailCreateComponent {
  showModal = false;
  email: Email

  constructor() {
    this.email = {
      id: '',
      subject: '',
      text: '',
      to: '',
      from: 'test12345@angular-email.com',
      html: '',
    }
  }
}
