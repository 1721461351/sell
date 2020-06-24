import {Http} from "../utils/http";

class Banner {
    static bannerId = 1;

    static getLocationB(callback) {
        Http.request({
            url: `banner/${this.bannerId}`,
            method: 'get',
            callback: data => {
                callback(data);
            }
        })
    }
}

export {
    Banner
}