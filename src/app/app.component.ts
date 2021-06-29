import { Component, ElementRef, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Forms';
  isSubmitted=false;
  defaultvalue='pet';
  answer='';
  genders=['Male','Female'];
  @ViewChild('form')
  Registerform!: NgForm;
  user={
    username:'',
    email:'',
    secreteQuestion:'',
    answer:'',
    gender:''
  }

  onSubmit(){

this.isSubmitted=true;
this.user.username=this.Registerform.form.value.userData.username;
this.user.email=this.Registerform.form.value.userData.email;
this.user.secreteQuestion=this.Registerform.form.value.secret;
this.user.answer=this.Registerform.form.value.answer;
this.user.gender=this.Registerform.form.value.gender;

  }
  suggesstionUser(){

    console.log("hiii")
    const suggesstionUseename ='supriya';
    this.Registerform.form.patchValue({
userData:{
  username:suggesstionUseename
}
    });

  }
}
