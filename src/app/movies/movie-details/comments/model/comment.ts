export class Comment {
  _id: number;
  movies: number;
  author: string;
  text: string;
  date: string;

  constructor(obj?: any) {
    this._id = obj && obj._id || null;
    this.movies = obj && obj.movies || null;
    this.author = obj && obj.author || "";
    this.text = obj && obj.text || "";
    this.date = obj && obj.date || "";
  }
}