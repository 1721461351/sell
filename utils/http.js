import {config} from "../config/config";

class Http {
    // 封装wx.request
    static request({url,method='Get',callback,data}){
        wx.request({
            // 模板字符串
            url:`${config.baseUrl}${url}`,
            data,
            success:result => {
                callback(result.data);
            }
        })

    }
}
export {
    Http
}