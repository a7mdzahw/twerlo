import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {
  @Output() next = new EventEmitter<any>();
  @Output() chooseAnswer: EventEmitter<string> = new EventEmitter();
  message: string = '';
  @Input() question: any = {};



  onAnswer(answer: string) {
    if (answer === this.question.answer) {
      this.message = 'Correct!';
    } else { this.message = 'Incorrect!'; }
    this.chooseAnswer.emit(answer);
  }

  onNext() {
    this.message = '';
    this.next.emit();
  }



}
