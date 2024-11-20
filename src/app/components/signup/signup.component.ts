// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.css']
// })
// export class SignupComponent implements OnInit {
//   signupForm!: FormGroup;  // Added non-null assertion operator

//   constructor(private fb: FormBuilder) { }

//   ngOnInit(): void {
//     this.signupForm = this.fb.group({
//       username: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', Validators.required],
//     });
//   }

//   onSubmit() {
//     if (this.signupForm.valid) {
//       console.log('Form Submitted:', this.signupForm.value);
//     }
//   }
// }


import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Data:', form.value);
    }
  }
}
