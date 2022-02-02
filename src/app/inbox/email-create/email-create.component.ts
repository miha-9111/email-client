import { Component } from '@angular/core';
import { Email } from "../email";
import { AuthService } from "../../auth/auth.service";
import { EmailService } from "../email.service";

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.scss']
})
export class EmailCreateComponent {
  showModal = false;
  email: Email;

  constructor(private authService: AuthService,
              private emailService: EmailService) {
    this.email = {
      id: '',
      subject: '',
      text: '',
      to: '',
      from: `${authService.username}@angular-email.com`,
      html: '',
    }
  }

  onSubmit(email: Email) {
    this.emailService.sendEmail(email).subscribe(() => {
      this.showModal = false;
    });
  }
}
