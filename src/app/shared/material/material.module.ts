import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
@NgModule({
  imports: [
    MatCardModule,
    MatInputModule,
  ],
  exports: [
    MatCardModule,
    MatInputModule,
  ],
})
export class MaterialModule { }
