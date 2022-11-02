import { Router} from "express";
import usersController from "../controllers/users.controller";


const router = Router()


router
      .get('/users',usersController.GET)
      .post('/sign-up',usersController.NEW_USER)


export default router;

