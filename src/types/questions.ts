export interface Question {
  id?: number;
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: Array<string>;
  answers: Array<string>;
  answer_user?: string;
}

export interface Historic {
  corrects: number;
  wrongs: number;
  historicQuestions: Question[];
}
