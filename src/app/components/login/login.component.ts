import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AlertController, AlertOptions } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnChanges {
  @Input() componentData: any;
  public loginForm: any;

  constructor(public fb: FormBuilder, public alertController: AlertController) {
    // TODO: make the reactive form dynamic so we can use validation.
    this.loginForm = this.fb.group({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
      this.componentData = changes.componentData.currentValue;
      console.log(this.componentData);
  }

  async doLogin(){
    let alert = await this.alertController.create({
      header: 'Guess What?',
      message: 'Logged in',
      buttons: ['OK']
    } as AlertOptions)
    await alert.present();
    alert.onDidDismiss().then(()=>{
      this.loginForm.reset();
    })
  }

}
