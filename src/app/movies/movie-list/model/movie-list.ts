import { Movie } from './movie';

export class MovieList {
    pipe: any;
    filter(arg0: (word: any) => boolean): Movie[] {
      throw new Error("Method not implemented.");
    }
    count: number;
    results: Movie[];
  
    constructor(obj?: any) {
        this.count = obj && obj.count || 0;
        this.results = obj && obj.results.map(elem => { return new Movie(elem); }) || [];
     }
    
}