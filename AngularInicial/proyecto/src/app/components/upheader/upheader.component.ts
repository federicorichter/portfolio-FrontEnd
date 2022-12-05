import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { EditService } from 'src/app/service/edit.service';

@Component({
  selector: 'app-upheader',
  templateUrl: './upheader.component.html',
  styleUrls: ['./upheader.component.css']
})
export class UpheaderComponent {
  clickEventsubscription!:Subscription;
  showModal: boolean=false;
  registerForm!: FormGroup;
  submitted = false;
  showEditLogo:boolean=false;
  faCoffee = faCoffee;

  constructor(private formBuilder: FormBuilder,private editService:EditService) {

   }

  show()
  {
    this.showModal = true; // Show-Hide Modal Check
    
  }
  //Bootstrap Modal Close event
  hide()
  {
    this.showModal = false;
  }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });
}
// convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }
onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    if(this.submitted)
    {
      this.showModal = false;
      this.showEditLogo=true;
      this.editService.logIn()

    }
}
endEdit(){
  this.showEditLogo=false;
  this.editService.logOut()
}

}
