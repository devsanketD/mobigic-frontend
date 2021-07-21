import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signinForm: FormGroup;
  isNew = false;

  constructor(
    private router: Router, private userService: UserService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(): void {
    this.signinForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }


  signup() {
    if (this.signinForm.valid) {
      this.userService.signup(this.signinForm.value)
        .subscribe((response: any) => {
          if (response.success) {
            this.router.navigate(['/sign'])
          } else {
            this.signinForm.patchValue({ password: '' })
          }
        })
    }
  }

  moveTo() {
    this.router.navigate(['/sign'])
  }
}
