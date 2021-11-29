export interface Ask {
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

export interface Record {
  corrects: number;
  wrongs: number;
  recordQuestions: Ask[];
}
