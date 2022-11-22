import { Component } from '@angular/core';
import { QuestionService } from '../question.service';
import { Word } from '../word';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent {
  // Current question
  question: any = {};
  // Current question index
  currentQuestion = 0;
  // List of questions
  questions: any[] = [];
  // Number of correct answers
  correctAnswerCounts = 0;
  // Progress bar value
  progress = 0;
  // User Score
  score = 0;

  constructor(private questionService: QuestionService) {}

  /*
    * Method to get the next question
    * @return void
    * */
  next() {
    this.currentQuestion++;
    this.question = this.questions[this.currentQuestion];
  }

  /*
    * Method to check the answer
    * @param answer
    * */
  onAnswer(answer: string) {
    if (answer === this.question.answer) this.correctAnswerCounts++;
    this.score = (this.correctAnswerCounts / this.questions.length) * 100;
    this.progress = ((this.currentQuestion + 1)  / this.questions.length) * 100;
  }

  // Fetches random words from the server on Component Init and maps the response to the questions array
  ngOnInit() {
    this.questionService.getWords().subscribe((words: Word[]) => {
      this.questions = words.map((word) => {
        return {
          word: word.word,
          answer: word.pos,
        };
      });
      this.question = this.questions[this.currentQuestion];
    });
  }
}
