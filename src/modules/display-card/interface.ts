import { ICharacter } from "../details-page/interface";

export interface IDetails {
    url: string,
    title : string,
    description:string,
    rating: number,
    releaseDate: string,
    time: number,
    characters: ICharacter,
    director:[],
}