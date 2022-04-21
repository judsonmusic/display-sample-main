import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LoginComponentModule } from '../components/login/login.component.module';

import { LoginService } from '../services/login.service';
import { MetadataService } from '../services/metadata.service';


const declarations = [
]

const imports = [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    LoginComponentModule,
]

@NgModule({
    declarations: [
        ...declarations
    ],
    imports: [
        ...imports
    ],
    exports: [
        ...imports,
        ...declarations
    ],
    providers: [
        MetadataService,
        LoginService,
    ]
})
export class SharedModule { }