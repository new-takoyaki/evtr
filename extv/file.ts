export class FileHeader{
    firstChuck : bigint; //가장 오래된 chuck
    lastChunkNum : bigint; //현재 작성중인 chuck
    nextRecordNum : bigint; //현재 작성중인 chuck
    headerLenght : number; //현재 작성중인 chuck
    minorVersion : number;     
    majorVersion : number; 
    headerSize : number; 
    chunkCount : number; 
    unknown : string; 
    flags : number; 
    checkSum : number; 
    
    constructor(){
        this.firstChuck = BigInt(0);
        this.lastChunkNum = BigInt(0);
        this.nextRecordNum = BigInt(0);
        this.headerLenght = 0;
        this.minorVersion = 0;
        this.majorVersion = 0;
        this.headerSize = 0;
        this.chunkCount = 0;
        this.unknown = "";
        this.flags = 0;
        this.checkSum = 0;
    }

    get isDirty(){
        return this.flags & 0x1;
    }

    get isFull(){
        return this.flags & 0x2
    }
};

export class ChunkHeader{
    magic : string;
    firstLogRecordNum : bigint;
    lastLogRecordNum : bigint;
    firstFileRecordNum : bigint;
    lastFileRecordNum : bigint;
    tablesOffset : number;
    lastRecordOffset : number;
    nextRecordOffset : number;
    dataCRC : number;
    unknown : string;
    headerCRC : number;
    stringTable : Array<number>;
    template
};

export class ChunkRecord{

};

export class Chunk {
    header : ChunkHeader;
    records : Array<ChunkRecord>;

    constructor(){
        this.header = new ChunkHeader();
        this.records = new Array();
    }
};

export class File {
    header : FileHeader;
    chunk : Array<Chunk>;
    
    constructor(){
        this.header = new FileHeader();
        this.chunk = new Array();
    }

    //임시 함수
    open() : Boolean {
        return false;
    }
};