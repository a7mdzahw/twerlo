import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Word } from './word';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  url = 'http://localhost:42598/';
  constructor(private httpClient: HttpClient) {}

  getWords() {
    return this.httpClient.get<Word[]>(this.url + 'wordlist');
  }

  getRank(score: number) {
    return this.httpClient.post<number>(this.url + `rank`, { score });
  }
}
