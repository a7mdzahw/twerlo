import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Word } from './word';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private httpClient:HttpClient) { }

  getWords() {
    return this.httpClient.get<Word[]>('http://localhost:4555/wordlist');
  }

  getRank(score: number) {
    return this.httpClient.post<number>(`http://localhost:4555/rank`, { score });
  }
}
