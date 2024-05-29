import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {  MatRippleModule } from '@angular/material/core';

import {MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';



















@NgModule({
  declarations: [],
  imports: [
    MatCardModule,
    LayoutModule,
    MatToolbarModule,
    MatRippleModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
    MatSnackBarModule,
    MatTableModule,


  ],
  exports: [MatCardModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatRippleModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatMenuModule,
    


  ]
})
export class MaterialModule { }
