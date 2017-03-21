import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import 'hammerjs';

import { AppComponent } from './app.component';

import { RoutingModule } from './app.routing.module';
import { HighlightJsModule, HighlightJsService } from '../../node_modules/angular2-highlight-js';

import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/card/card.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { LessonService } from './shared/lesson.service';
import { CodeFormatPipe } from './code-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HomeComponent,
    ToolbarComponent,
    SidenavComponent,
    CodeFormatPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    MaterialModule.forRoot(),
    FlexLayoutModule,
    HighlightJsModule
  ],
  providers: [LessonService,HighlightJsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
