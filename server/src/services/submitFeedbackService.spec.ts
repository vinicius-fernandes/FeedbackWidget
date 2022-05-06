import { SubmitFeedbackService } from "./submitFeedbackService"


const createFeedbackSpy= jest.fn();
const sendMailSpy = jest.fn();
const submitFeedback = new SubmitFeedbackService(
    {create: createFeedbackSpy},
    {sendMail:sendMailSpy}
)


describe('Submit seedback',()=>{
    it('Should be able to submit a feedback',async ()=>{

        await expect(submitFeedback.execute({
            type:'TEST',
            comment:'Test comment',
            screenshot:'data:image/png;base64sadasdsadsad'
        })).resolves.not.toThrow();   
    expect(createFeedbackSpy).toBeCalled();
    expect(sendMailSpy).toBeCalled();
    }),
    it('Should throw type empty when type is empty',async ()=>{

        await expect(submitFeedback.execute({
            type:'',
            comment:'Test comment',
            screenshot:'data:image/png;base64sadasdsadsad'
        })).rejects.toThrow();    
    }),
    it('Should throw type comment when comment is empty',async ()=>{

        await expect(submitFeedback.execute({
            type:'Test',
            comment:'',
            screenshot:'data:image/png;base64sadasdsadsad'
        })).rejects.toThrow();    
    }),
    it('Should throw image invalid when image is not base64',async ()=>{

        await expect(submitFeedback.execute({
            type:'Test',
            comment:'Teste commment',
            screenshot:'img.png'
        })).rejects.toThrow();    
    })



})