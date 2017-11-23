import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AframePipe } from './aframe.pipe';
import { RealtimeService } from 'app/realtime.service';
import { FirebaseNotesService } from 'app/firebase-notes.service';


@NgModule({
  declarations: [
    AppComponent,
    AframePipe,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [RealtimeService, FirebaseNotesService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
})
export class AppModule { }
