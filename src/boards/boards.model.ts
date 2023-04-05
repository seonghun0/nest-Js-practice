export interface Board {
    id:String;
    title :String;
    description:string;
    status : BoardStatus;
}

export enum BoardStatus {
    PUBLIC = 'PUBLIC',
    PRIVATE = 'PRIVATE'
}