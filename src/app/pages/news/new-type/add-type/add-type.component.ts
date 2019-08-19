import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder,Validators} from '@angular/forms'
@Component({
  selector: 'app-add-type',
  templateUrl: './add-type.component.html',
  styleUrls: ['./add-type.component.css']
})
export class AddTypeComponent implements OnInit {


  constructor(private fb: FormBuilder) {
  }
  validateForm: FormGroup;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }
  }

  genderChange(value: string): void {
    this.validateForm.get('note').setValue(value === 'male' ? 'Hi, man!' : 'Hi, lady!');
  }


  ngOnInit(): void {
    this.validateForm = this.fb.group({
      note  : [ null, [ Validators.required ] ],
      gender: [ null, [ Validators.required ] ]
    });
  }
}