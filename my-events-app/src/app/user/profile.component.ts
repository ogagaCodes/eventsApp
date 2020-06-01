import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'

@Component({
  templateUrl:'./profile.component.html',
  styles: [
    `
    em {float:right; color:#E05C65;padding-left:10px;}
    .error input {background-color:#E3C3C5}
    `
  ]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup
  firstName: any
  lastName: any
  constructor(private auth: AuthService, private router: Router ) {

  }
  ngOnInit() {

    this.profileForm = new FormGroup({
      lastName:  new FormControl(
        this.auth.currentUser.lastName, Validators.required
      ),
      firstName : new FormControl(
        this.auth.currentUser.firstName, Validators.required
      )
    })
  }
  validateFirstName() {

    this.firstName = new FormControl(
      this.auth.currentUser.firstName, Validators.required
    )
    return this.firstName.valid || this.firstName.untouched
  }
  validateLastName() {
    this.lastName = new FormControl(
      this.auth.currentUser.lastName, Validators.required
    )
    return this.firstName.valid || this.firstName.untouched
  }

  cancel() {
    this.router.navigate(['events'])
  }

  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.auth.updateCurrentUser(formValues.firstName, formValues.lastName)
      this.router.navigate(['events'])
    }
    // if (this.profileForm.invalid) {
    //    this.window.
    // }
  }
}
