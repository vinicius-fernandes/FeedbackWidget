import { prisma } from "../../prisma";
import { CreateFeedbackData, FeedbacksRepository } from "../feedbacksRepository";

export class PrismaFeedbacksRepository implements FeedbacksRepository{
    async create({type,comment,screenshot}: CreateFeedbackData){
        const feedback= await prisma.feedback.create({
            data:{
                comment:comment,
                type: type,
                screenshot:screenshot
            }
        })
    }
    
}