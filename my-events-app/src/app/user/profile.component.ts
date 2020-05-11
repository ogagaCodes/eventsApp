import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'

@Component({
  templateUrl:'./profile.component.html'
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup

  constructor(private auth: AuthService, private router: Router ) {

  }
  ngOnInit() {

    this.profileForm = new FormGroup({
      lastName:  new FormControl(
        this.auth.currentUser.lastName
      ),
      firstName : new FormControl(
        this.auth.currentUser.firstName
      )
    })
  }

  cancel() {
    this.router.navigate(['events'])
  }
}
