import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';

export class Contact {
  public email?: string;
  public text?: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form: any;

  model = new Contact();

  constructor(private router: Router, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  get formControls(): any {
    return this.form.controls;
  }

  onSubmit(form: any): any {
    console.log(form.status === 'VALID');
    if (form.status === 'VALID') {
      return this.router.navigate(['/blog']);
    }
  }

}
