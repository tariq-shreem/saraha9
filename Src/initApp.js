import connectDb from '../DB/connection.js';
import authRouter from './Modules/auth/auth.router.js';
import messageRouter from './Modules/Messages/message.router.js';

const initApp= (app,express)=>{
    connectDb();
    app.use(express.json());
    app.use('/auth',authRouter);
    app.use('/messages',messageRouter);
    app.use('*',(req,res)=>{
        return res.status(404).json({message:"page not found"});
    });
}

export default initApp;