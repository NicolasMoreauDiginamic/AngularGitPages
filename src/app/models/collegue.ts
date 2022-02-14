export interface Collegue {
    pseudo : string;
    score : number;
    photoURL : string;

}

export interface CreeCollegue{
    pseudo : string;
    photo : string;
    nom : string;
    prenom : string;
}
export enum Avis {
    Aimer,
    Detester
}