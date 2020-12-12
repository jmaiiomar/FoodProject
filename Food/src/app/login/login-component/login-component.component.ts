import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/modele/Users';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private Us: UserService, private auth: AuthenticationService, private router: Router) {
    let formcontrols = {
      email: new FormControl('', [
        Validators.required,
      ]),
      password: new FormControl('', [
        Validators.required,
      ])
    };
    this.loginForm = this.fb.group(formcontrols);

  }

  ngOnInit(): void {
   this.Us.logout();
  }
  
  login() {
    let data = this.loginForm.value;
    let user = new User();
    /*this.Us.findbyid(data.email).subscribe (res => {
      this.Us.login2(res).subscribe (res2 => {
        
       // this.router.navigateByUrl('/home');
        });
     // this.router.navigateByUrl('/home');
      });
    
      this.voiretodo(data.email);*/
    this.Us.findbyid(data.email,data.password).subscribe(res => {
      console.log('resultats: '+res)
      if(localStorage.getItem('currentUser')==='[]')
      {localStorage.removeItem('currentUser');
      alert("you have to verify your passwor or Email")
    }
      else
      this.router.navigateByUrl('/');
});

    }

  
  
}
