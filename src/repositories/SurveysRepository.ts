import { EntityRepository, Repository } from "typeorm";
import { Survey } from "../models/Survey";


@EntityRepository(Survey)
class SurveysRepository extends Repository <Survey>{
    findOne(arg0: { id: any; }) {
        throw new Error("Method not implemented.");
    }


}

export { SurveysRepository };