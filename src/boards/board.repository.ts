import { Board } from "./board.entity";
import { getRepository , Repository} from 'typeorm';

export class BoardRepository{
    private repository : Repository<Board>;

    constructor(){
        this.repository = getRepository(Board);
    }
}