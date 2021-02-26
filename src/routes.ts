import { Router } from "express"
import { UserController } from "./controllers/UserController"
import { SendMailController } from "./controllers/SendMailController"

import  { SurveysController } from "./controllers/SurveysController"

const router = Router()

const userController = new UserController();
const surveysController = new SurveysController()

const sendMailController = new SendMailController()


router.post("/users", userController.create)
router.post("/surveys", surveysController.create)
router.get("/show", surveysController.show)

router.post ("/sendMail", sendMailController.execute)

export { router }