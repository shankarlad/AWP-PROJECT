import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public myFormGroup = this.fb.group({

    fname: ['',
      [Validators.required,
      Validators.pattern(/[A-Za-z ]{3,20}$/),
      ]
    ],

    lname: ['', [Validators.required,
    Validators.pattern(/[A-Za-z ]{3,20}$/),
    ]
    ],

    email: ['',
      [Validators.required,
      Validators.pattern(/^[A-Za-z0-9._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/),
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

  async registerHere() {
    const data = this.myFormGroup.value;
    const url = 'http://localhost:3000/register';
    await this.http.post(url, data).toPromise();
    this.router.navigate(['login']);
  }



}
