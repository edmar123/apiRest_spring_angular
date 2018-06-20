import { HttpModule } from '@angular/http';
import { CommentsService } from './comments/comments.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommentsComponent } from './comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent
    
  ],
  imports: [
    BrowserModule,
    HttpModule
   
  ],
  providers: [CommentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
