import express, {Express,Request,Response,Application} from 'express';
const app: Application = express();
const bodyParser = require('body-parser');
import router from './controller'
console.log(router);
const PORT = process.env.PORT || 6000;
app.use(bodyParser.json())

const start = ()=>{
    try{
        app.get('/',(req:Request,res:Response)=>{
            return res.send('Server is working on TypeScript')
        })
        app.listen(PORT,()=>{
            console.log(`Listening on port ${PORT}`);
        })
    } catch(e){
        console.log(e);
    }
}
start();