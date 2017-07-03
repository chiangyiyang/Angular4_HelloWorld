import { PostService } from './post.service';
import { SignupFormComponent } from './SIGNUP~1/signup-form.component';
import { SummaryPipe } from './summary.pipe';
import { AuthorsService } from './authors.service';
import { CoursesService } from './courses.service';
import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { AuthorsComponent } from './authors/authors.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCaseInputComponent } from './title-case-input/title-case-input.component';
import { LowPrepositionPipe } from './low-preposition.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { NewCourseTopicFormComponent } from './new-course-topic-form/new-course-topic-form.component';
import { PostComponent } from './post/post.component';
import { HttpModule, JsonpModule } from "@angular/http";
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { GithubService } from "app/github.service";
import { SpotifyArtistSearchComponent } from './spotify-artist-search/spotify-artist-search.component';




@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    CourseComponent,
    CoursesComponent,
    AuthorsComponent,
    SummaryPipe,
    FavoriteComponent,
    TitleCaseInputComponent,
    LowPrepositionPipe,
    PanelComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    NewCourseFormComponent,
    NewCourseTopicFormComponent,
    PostComponent,
    GithubProfileComponent,
    SpotifyArtistSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [
    CoursesService,
    AuthorsService,
    PostService,
    GithubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
