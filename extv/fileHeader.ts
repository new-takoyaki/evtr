export class FileHeader{
    oldestChuck : bigint; //가장 오래된 chuck
    currentChunkNum : bigint; //현재 작성중인 chuck
    nextRecordNum : bigint; //현재 작성중인 chuck
    headerPart1Lenght : number; //현재 작성중인 chuck
    minorVersion : number;     
    majorVersion : number; 
    headerSize : number; 
    chunkCount : number; 
    unknown : string; 
    flags : number; 
    checkSum : number; 
    
    constructor(){
        this.oldestChuck = BigInt(0);
        this.currentChunkNum = BigInt(0);
        this.nextRecordNum = BigInt(0);
        this.headerPart1Lenght = 0;
        this.minorVersion = 0;
        this.majorVersion = 0;
        this.headerSize = 0;
        this.chunkCount = 0;
        this.unknown = "";
        this.flags = 0;
        this.checkSum = 0;
    }
};