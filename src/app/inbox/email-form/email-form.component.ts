import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { Email } from "../email";

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss']
})
export class EmailFormComponent implements OnInit {
  @Input() email: Email
  emailForm: FormGroup;

  constructor() {}

  ngOnInit() {
    const { to, from, subject, text } = this.email;

    this.emailForm = new FormGroup({
      to: new FormControl(to),
      from: new FormControl(from),
      subject: new FormControl(subject),
      text: new FormControl(text)
    });
  }
}
