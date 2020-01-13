Components.utils.import("resource://gre/modules/ctypes.jsm");

export class FileHeader{
    oldestChuck : bigint; //가장 오래된 chuck
    currentChunkNum : bigint; //현재 작성중인 chuck
    currentChunkNum : bigint; //현재 작성중인 chuck
    currentChunkNum : bigint; //현재 작성중인 chuck

    constructor(){
        this.oldestChuck = BigInt(0);
        this.currentChunkNum = BigInt(0);
    }
};