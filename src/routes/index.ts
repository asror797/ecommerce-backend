import { Router} from "express";
import usersController from "../controllers/users.controller";


const router = Router()


router
      .get('/users',usersController.GET)


export default router;

