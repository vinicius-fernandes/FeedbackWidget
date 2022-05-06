import express from 'express';
import { SubmitFeedbackService } from './services/submitFeedbackService';
import { PrismaFeedbacksRepository } from './repositories/prisma/prismaFeedbacksRepository';
import { NodeMailerMailAdapter } from './adapters/nodeMailer/nodeMailerMailAdapter';



export const routes = express.Router();




  

routes.post('/feedbacks',async (req,res)=>{
  const {type,comment,screenshot} = req.body;

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
  const nodeMailerMailAdapter = new NodeMailerMailAdapter();

  const submitFeedbackService = new SubmitFeedbackService(prismaFeedbacksRepository,nodeMailerMailAdapter);

  await submitFeedbackService.execute({
    type,
    comment,
    screenshot
  })


    return res.status(201).send();

})