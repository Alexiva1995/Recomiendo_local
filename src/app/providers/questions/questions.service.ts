import { Injectable } from "@angular/core";
import { ApiService } from "../api/api.service";

@Injectable({
  providedIn: "root",
})
export class QuestionsService {
  constructor(private api: ApiService) {}
  /* Método para consultar la pregunta
   * **/
  public getQuestions() {
    return new Promise((resolve, reject) => {
      const seq = this.api.post("api/auth/user/question", null, true);
      seq.subscribe(
        (res: any) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }
  public async sendAnswers(question, answer) {
    let param = {
      question_id: question.id,
      answer: answer,
    };
    return new Promise((resolve, reject) => {
      const seq = this.api.post("api/auth/user/answer", param, true);
      seq.subscribe(
        (res: any) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }
}
