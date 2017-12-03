import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.css']
})
export class AuthSignupComponent implements OnInit {
  newUser: any = {};
  constructor(
    private sessionService : SessionService,
    private router : Router
  ) {}

  ngOnInit() {}

  onSubmitSignup() {
    this.sessionService.signup(this.newUser)
      .subscribe(
        data => {
          console.log('Signup success!', data);
          this.sessionService.updateInfo(data);
          this.router.navigate(['private']);
          // signupForm.reset();

        }
      )
  }
}
