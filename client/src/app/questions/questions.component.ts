import { Component } from '@angular/core';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent {
  question: any = {};
  currentQuestion = 0;
  questions: any[] = [];
  correctAnswerCounts = 0;
  progress = 0;
  score = 0;
  message: string = '';

  constructor(private questionService: QuestionService) {}


  next() {
    this.message = '';
    this.currentQuestion++;
    this.question = this.questions[this.currentQuestion];
  }

  onAnswer(answer: string) {
    if (!!this.message) return;
    if (answer === this.question.answer) {
      this.correctAnswerCounts++;
      this.message = 'Correct!';
    } else { this.message = 'Incorrect!'; }
    const isLastQuestion = this.currentQuestion === this.questions.length - 1;
    if (isLastQuestion) {
      this.score = (this.correctAnswerCounts / this.questions.length) * 100;
      this.progress = 100;
      console.log(this.question,this.score);
    } else {
      this.progress = (this.currentQuestion / this.questions.length) * 100;
      this.score = (this.correctAnswerCounts / this.questions.length) * 100;
      this.question = this.questions[this.currentQuestion];
      console.log(this.score, this.progress);
    }
  }

  ngOnInit() {
    this.questionService.getWords().subscribe((words: any[]) => {
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
