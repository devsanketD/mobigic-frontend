import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from "../../services/user.service";
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup;
  isNew = false;
  constructor(private router: Router, private userService: UserService) {

  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.signinForm = new FormGroup({
      name: new FormControl('a@gmail.com', [Validators.required]),
      username: new FormControl('a@gmail.com', [Validators.required]),
      password: new FormControl('ashish', [Validators.required])
    });
  }
  signin() {
    this.userService.login(this.signinForm.value)
      .subscribe((response: any) => {
        console.log(response)
        if (response.success) {
          localStorage.setItem('token', response.token)
          this.router.navigate(['dashboard']);
        } else {
          this.signinForm.patchValue({ password: '' })
        }
      })
  }

  toggle() {
    this.isNew = !this.isNew;
    this.signinForm.reset();
  }

  signup() {
    if (this.signinForm.valid) {
      this.userService.signup(this.signinForm.value)
        .subscribe((response: any) => {
          // console.log(response)
          if (response.success) {
            this.toggle();
          } else {
            this.signinForm.patchValue({ password: '' })
          }
        })
    }
  }
}
