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
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
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

  moveTo(){
    this.router.navigate(['/signup'])
  }
}
