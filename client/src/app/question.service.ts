import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Word } from './word';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  // api url for the server to fetch data
  url = 'http://localhost:3000/';

  // inject HttpClient service
  constructor(private httpClient: HttpClient) {}

  /*
    * Method to fetch the random words from the server
    * @return Observable<Word[]>
    * */
  getWords() {
    return this.httpClient.get<Word[]>(this.url + 'wordlist');
  }

  /*
    * Method to fetch the user rank from the server
    * @return Observable<number>
    * */
  getRank(score: number) {
    return this.httpClient.post<number>(this.url + `rank`, { score });
  }
}
