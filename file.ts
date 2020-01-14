import * as fs from 'fs';

export class File{
    private path : string;

    constructor(path : string){
        this.path = path;
    }

    parse() : Promise<File>{
        return new Promise<File>((resolve, reject)=>{
            if(!fs.existsSync(this.path)){
                reject("File Not Found");
            }else{
                resolve(this);
            }
        });
    }
}