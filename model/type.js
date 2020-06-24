import {Http} from "../utils/http";
//获取类型
class Type {
    static getCategory(callback){
        Http.request({
            url:`category`,
            method:'get',
            callback:data=>{
                callback(data)
            }
        })
    }
}

export {
    Type
}
