import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginService } from './services/login.service';
import { MetadataService } from './services/metadata.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderByPipe } from './pipes/orderBy.pipe';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    LoginService,
    MetadataService,
  ],
  bootstrap: [AppComponent],
  exports:[
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AppModule {}
