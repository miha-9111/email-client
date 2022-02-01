import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { EmailService } from "../email.service";
import { switchMap } from "rxjs";

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.scss']
})
export class EmailShowComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private emailService: EmailService) {}

  ngOnInit() {
    // this.route.params.subscribe(({ id }) => {
    //   this.emailService.getEmails().subscribe(email => {
    //     console.log(email);
    //   });
    // });
    this.route.params
      .pipe(
        switchMap(({ id }) => {
          return this.emailService.getEmail(id);
        })
      )
      .subscribe(email => {
        console.log(email);
      });
  }
}
