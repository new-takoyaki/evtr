import { open, close, readSync } from 'fs';

export class FileStream {
    private _readable : boolean;
    private fd : number;
    private isBigEndian : boolean;

    constructor(path : string, isBigEndian = false){
        this.isBigEndian = isBigEndian;
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

    private readBytes(offset : number, size : number) : Promise<Uint8Array> {
        if(!this.readable){
            return Promise.reject("no readable");
        }else{
            const buffer = new Uint8Array(size);
            const readCount = readSync(this.fd, buffer, 0, buffer.length, offset);
            if(readCount != size){
                return Promise.reject("fail read data");
            }else{
                return Promise.resolve(
                    !this.isBigEndian 
                    ? buffer.reverse() 
                    : buffer
                );
            }
        }
    }
    
    async readUInt8(offset : number) : Promise<number> {
        try{
            const array = await this.readBytes(offset, 1);
            return Promise.resolve(array[0]);
        }catch (error) {
            return Promise.reject(error);
        }
    }

    async readUInt16(offset : number) : Promise<number> {
        try{
            const array = await this.readBytes(offset, 2);
            var result : number = (array[0] << 8);
            result += array[1];
            return Promise.resolve(result);
        }catch (error) {
            return Promise.reject(error);
        }
    }
    
    async readUInt32(offset : number) : Promise<number> {
        try{
            const array = await this.readBytes(offset, 4);
            var result : number = array[0];
            for(var i = 1;i<array.length;i++){
                result = result << 8;
                result += array[i];
            }
            return Promise.resolve(result);
        }catch (error) {
            return Promise.reject(error);
        }
    }

    async readUInt64(offset : number) : Promise<bigint> {
        try{
            const array = await this.readBytes(offset, 4);
            var result : bigint = BigInt(array[0]);
            for(var i = 1;i<array.length;i++){
                result = result << 8n;
                result += BigInt(array[i]);
            }
            return Promise.resolve(result);
        }catch (error) {
            return Promise.reject(error);
        }
    }

    close(){
        if(this.readable){
            close(this.fd, ()=>{
                this._readable = false;
                console.log("File Close");
            });
        }
    }
}