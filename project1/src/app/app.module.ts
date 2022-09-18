import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolBarComponent } from './component/tool-bar/tool-bar.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FotterComponent } from './component/fotter/fotter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AppRouting } from './component/Routes/RoutesModel';
import { MainComponent } from './main/main.component';
import {MatTableModule} from '@angular/material/table';
import { CardComponent } from './component/card/card.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    
    FotterComponent,
    MainComponent,
    CardComponent,
    

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    AppRouting,
    MatTableModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  
    
    

  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
