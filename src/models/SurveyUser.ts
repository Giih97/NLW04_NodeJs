import { ManyToOne } from "typeorm";
import { JoinColumn } from "typeorm";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm"
import { v4 as uuid } from "uuid"
import { Survey } from "./Survey";
import { User } from "./User";

@Entity("surveys_user")
class SurveyUser {

    @PrimaryColumn()
    readonly id: string;
    
    @Column()
    user_id: string;

    @ManyToOne(() => User)
    @JoinColumn({name:"user_id"})
    user:User

    @Column()
    survey_id: string;

    @ManyToOne(() => Survey)
    @JoinColumn({name:"survey_id"})
    survey:Survey

    @Column()
    value: number;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) { //se não existir o id
            this.id = uuid()
        }
    }
}


export { SurveyUser }