import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repositories/UsersRespository';
import * as yup from 'yup'; 
import { AppError } from '../errors/AppError';


class UserController {

    async create(request: Request, response: Response) {
        const { name, email } = request.body;

        const schema = yup.object().shape({
            name: yup.string().required("Nome Obrigatório"),
            email: yup.string().email().required("Email incorreto")
        });

       try {
           await schema.validate(request.body, { abortEarly:false });
       } catch (err) {
            throw new AppError(err);
       }
        
        const usersReposity = getCustomRepository(UsersRepository);

        const userAlreadyExists = await usersReposity.findOne({
            email
        });

        if(userAlreadyExists){
            throw new AppError("User already exists!");
        }

        const user = usersReposity.create({
            name, email
        });

        await usersReposity.save(user);

        return response.status(201).send(user);
    }

}

export { UserController }