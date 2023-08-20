export interface IMovieDetails {
    original_title: string;
    poster_path: string;
    overview: string;
    vote_average: number;
    release_date: string;
    status: string;
    runtime: number;
  }
  export interface ICharacter {
    original_name: string;
  }
  
  interface ICrew {
    known_for_department: string;
    name: string;
    job: string;
  }
  
  export interface IMovieInfo {
    cast: ICharacter[];
    crew: ICrew[];
  }