import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent {
  // Event emitter to emit next action to parent component
  @Output() next = new EventEmitter<any>();

  // EventEmitter to emit the answer to the parent component
  @Output() chooseAnswer: EventEmitter<string> = new EventEmitter();

  // Input property to receive the question from parent component
  @Input() question: any = {};

  // Message to display to the user
  message: string = '';

  /*
   * Method to emit the answer to the parent component
    * @param answer: string
    * @return void
   */
  onAnswer(answer: string) {
    if (answer === this.question.answer) {
      this.message = 'Correct!';
    } else {
      this.message = 'Incorrect!';
    }
    this.chooseAnswer.emit(answer);
  }

  /*
    * Method to emit the next action to the parent component
    * @return void
    * */
  onNext() {
    this.message = '';
    this.next.emit();
  }
}
