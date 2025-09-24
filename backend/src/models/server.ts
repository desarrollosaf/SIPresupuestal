import express, {Application} from 'express'
import cors from 'cors'
import path from 'path';

class Server {

    private app: Application
    private port: string


    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.midlewares();
        this.router();
        this.DBconnetc();
        this.listen();
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log("La aplicación se esta corriendo exitosamente en el puerto => "+ this.port)
        })
    }

    router(){

    }



    midlewares(){
        //Parseo BOdy
        this.app.use(express.json())
         this.app.use(cors({
            origin: 'http://localhost:4200',
            credentials: true
        }))
        this.app.use('/storage', express.static(path.join(process.cwd(), 'storage')));
    }

    async DBconnetc(){
        try {
            console.log("Conexion de DB exitoso");

        } catch (error) {
            console.log("Conexion de DB errorena => "+error);

        }
    }


}


export default Server
