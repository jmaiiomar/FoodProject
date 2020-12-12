import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/modele/Users';
import { UserService } from 'src/app/service/user.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-user-component',
  templateUrl: './add-user-component.component.html',
  styleUrls: ['./add-user-component.component.css']
})
export class AddUserComponentComponent implements OnInit {
  myform: FormGroup;
  constructor(private fb: FormBuilder, private Us: UserService, private router: Router, private toastr: ToastrService) {
    let formcontrols = {
      firstname: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z.'-]+")
      ]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z.'-]+")
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern("[0-9.'-]+")
      ])
    }
    this.myform = this.fb.group(formcontrols);
  }
  // tslint:disable-next-line: typedef
  get firstname() {
    return this.myform.get('firstname');

  }
  get lastname() {
    return this.myform.get('lastname');

  }
  get email() {
    return this.myform.get('email');

  }
  get password() {
    return this.myform.get('password');

  }
  get phone() {
    console.log(this.myform.invalid);

    return this.myform.get('phone');
  }
  ngOnInit(): void {
  }
  addUser() {
    let data = this.myform.value;
    let user = new User();
    user.firstname = data.firstname;
    user.lastname = data.lastname;
    user.phone = data.phone;
    user.email = data.email;
    user.passwrd = data.password;
    this.Us.addUser(user).subscribe(res => {
      this.toastr.success('Success!', 'Register ');
      this.router.navigateByUrl('/login');
    });
  }

}
