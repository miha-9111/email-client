import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { EmailService } from "../email.service";
import { switchMap } from "rxjs";
import { Email } from "../email";

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.scss']
})
export class EmailShowComponent implements OnInit {
  email: Email;

  constructor(private route: ActivatedRoute,
              private emailService: EmailService) {
    this.route.data.subscribe(data => {
      console.log(data);
    });
  }

  ngOnInit() {
    // this.route.params.subscribe(({ id }) => {
    //   this.emailService.getEmails().subscribe(email => {
    //     console.log(email);
    //   });
    // });
    // this.route.params
    //   .pipe(
    //     switchMap(({ id }) => {
    //       return this.emailService.getEmail(id);
    //     })
    //   )
    //   .subscribe(email => {
    //     this.email = email;
    //   });
  }
}
