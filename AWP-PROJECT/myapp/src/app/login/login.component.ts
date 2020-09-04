import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {


  public uiInvalidCredential = false;

  public myFormGroup = this.fb.group({
    email: ['',
      [Validators.required,
      Validators.pattern(/^[A-Za-z0-9._]{3,}@[A-Za-z]{3,}[.]{1}[[A-Za-z.]{2,6}$/),
      ]
    ],

    password: ['', [Validators.required,
    Validators.pattern(/^(?=.*[0-9])(?=.*[!@#%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/),
    ]
    ],
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient
  ) { }


  ngOnInit(): void {
  }

  async loginHere() {

    const data = this.myFormGroup.value;
    const url = 'http://localhost:3000/login';
    const output: any = await this.http.post(url, data).toPromise();
    if (output && output.opr) {
      sessionStorage.setItem('sid', 'true');
      this.router.navigate(['home']);
    } else {
      this.uiInvalidCredential = true;
      this.router.navigate(['login']);
    }

  }
}
