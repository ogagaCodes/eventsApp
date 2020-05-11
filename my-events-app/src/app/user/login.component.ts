import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { AuthService } from './auth.service';
import { Router } from "@angular/router";


@Component({
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush



})

export class LoginComponent {
  userName
  password
  constructor(private authService: AuthService, private router:Router, private cdRef:ChangeDetectorRef) {

  }
  ngAfterViewInit() {

    this.cdRef.detectChanges();
     }
  login(formValues) {
    this.authService.loginUser(formValues.userName, formValues.password)
    this.router.navigate(['events'])
  }

  cancel() {
    this.router.navigate(['events'])
  }
}
