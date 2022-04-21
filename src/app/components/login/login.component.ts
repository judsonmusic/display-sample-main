import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnChanges {
  @Input() componentData: any;
  public loginForm: any;

  constructor(public fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
      this.componentData = changes.componentData.currentValue;
      console.log(this.componentData);
  }

}
