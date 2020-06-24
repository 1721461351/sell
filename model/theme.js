// 业务对象 相当于MVC中的M层，service层
// 重点和精力应该放在这里
import {config} from "../config/config";
import {Http} from "../utils/http";

class Theme {
    /**
     * 版本2
     * @param callback
     */
    static getHomeLocationA(callback){
        Http.request({
            url:`themes`,
            data:{
                name:'t-1'
            },
            callback:data=>{
                callback(data);
            }
        })
        /**
         * 版本1
         */
        // wx.request({
        //     // 模板字符串 注意不是单冒号，是tab键上面的
        //     url:`${config.baseUrl}themes`,
        //     // url:"http://localhost:53000/themes",
        //     method:"get",
        //     data:{
        //         name:'t-1'
        //     },
        //     header:{
        //         appkey:config.appkey
        //     },
        //     //箭头函数可以保持this指向不变
        //     success:res=>{
        //         console.log(res);
        //         // 把成功后的数据传到home.js中
        //         callback(res.data);
        //     }
        // })
    }

}
export {
    Theme
}