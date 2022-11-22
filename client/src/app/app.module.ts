import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { RankComponent } from './rank/rank.component';
import { ProgressComponent } from './progress/progress.component';
import { MessageComponent } from './message/message.component';
import { RouterModule } from '@angular/router';
import { QuestionComponent } from './question/question.component';

const routes = [
  {path: '', component: QuestionsComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    RankComponent,
    ProgressComponent,
    MessageComponent,
    QuestionComponent
  ],
  imports:
  [
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
