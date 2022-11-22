import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.scss'],
})
export class RankComponent {
  @Input() score: number = 0;
  rank = 0;

  constructor(
    private questionService: QuestionService,
  ) {}

  ngOnInit() {
    this.questionService.getRank(this.score).subscribe((rank: number) => {
      this.rank = rank;
    });
  }

  onPlayAgain() {
    window.location.reload();
  }
}
