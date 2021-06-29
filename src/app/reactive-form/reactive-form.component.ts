import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  genders = ['Male', 'Female'];
  registerForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {

    this.registerForm = new FormGroup({
      'userData':new FormGroup({
        'username': new FormControl(null, Validators.required),
        'email': new FormControl(null,[Validators.required, Validators.email]),
      }),

      'gender': new FormControl('Female'),
      'hobbies':new FormArray([])

    })
  }
  onSubmit(){
    console.log(this.registerForm)
  }
  addHobby(){


    const controls = new FormControl(null, Validators.required);
    (<FormArray>this.registerForm.get('hobbies')).push(controls);

  }
}
