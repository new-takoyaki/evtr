
export class FileHeader{
    signature : string;
    firstChuck : bigint; //가장 오래된 chunk
    lastChunkNum : bigint; //마지막 chunk
    nextChunkNum : bigint; //다음 작성할 레코드
    headerLenght : number; //헤더 길이
    minorVersion : number;     
    majorVersion : number; 
    headerSize : number; 
    chunkCount : number; 
    unknown : string; 
    flags : number; 
    checkSum : number; 
    
    constructor(){
        this.signature = "ElfFile\x00";
        this.firstChuck = BigInt(0); 
        this.lastChunkNum = BigInt(0);
        this.nextChunkNum = BigInt(0);
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
    signature : string;
    firstLogRecordNum : bigint;
    lastLogRecordNum : bigint;
    firstFileRecordNum : bigint;
    lastFileRecordNum : bigint;
    headerSize : number; 
    lastRecordOffset : number;
    freeSpaceOffset : number;
    recordCRC : number;
    unknown : string; //68
    headerCRC : number;
    stringTable : Array<number>; //64
    templateTable : Array<number>; //32

    constructor(){
        this.signature = "ElfChnk\x00";
        this.firstLogRecordNum = BigInt();
        this.lastLogRecordNum = BigInt();
        this.firstFileRecordNum = BigInt();
        this.lastFileRecordNum = BigInt();
        this.headerSize = 0;
        this.lastRecordOffset = 0;
        this.freeSpaceOffset = 0;
        this.recordCRC = 0;
        this.unknown = "";
        this.headerCRC = 0;
        this.stringTable = new Array(); 
        this.templateTable = new Array();
    }
};

const BinaryXML = require('binary-xml');
export class ChunkRecord{
    signature : string;
    size : number;
    identifier : number;
    writtenTime: Date;
    //TODO : binary XML 파싱 필요
    event : any;
    copyOfSize : number;

    constructor(){
        this.signature = "";
        this.size = 0;
        this.identifier = 0;
        this.writtenTime = new Date();
        this.event = "";
        this.copyOfSize = 0;
        this.event = new BinaryXML();
    }
};

export class Chunk {
    header : ChunkHeader;
    records : Array<ChunkRecord>;

    constructor(){
        this.header = new ChunkHeader();
        this.records = new Array();
    }
};

export class EvtxFile {
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