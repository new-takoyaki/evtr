import { open, close, read } from 'fs';

export class FileParser {
    private _readable : boolean;
    private fd : number;

    constructor(path : string){
        this._readable = false;
        this.fd = -1;
        open(path, 'r', (err, fd : number) : void=>{
            if(err){
                console.error(err.message);
            }else{
                this._readable = true;
                this.fd = fd;
            }
        });
    }

    get readable(){
        return this._readable;
    }

    readInt8(offset : number){

    }
    
    readInt16(offset : number){

    }
    
    readInt32(offset : number){

    }

    readInt64(offset : number){

    }

    readUInt8(offset : number){

    }
    
    readUInt16(offset : number){

    }
    
    readUInt32(offset : number){

    }

    readUInt64(offset : number){

    }
    close(){
        close(this.fd, ()=>{
            console.log("File Close");
        });
    }
}