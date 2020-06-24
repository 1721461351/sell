// pages/home/home.js
// 自动补全，很方便
import {config} from "../../config/config";
import {Theme} from "../../model/theme";
import {Banner} from "../../model/banner";
import {Type} from "../../model/type";

Page({

    /**
     * 页面的初始数据
     */
    data: {
        topTheme: null,
        topBanner:null,
        category:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

        // 参数里为回调函数
        Theme.getHomeLocationA(data => {
            console.log(data[0])
            this.setData({
                topTheme: data[0]
            })

        });

        Banner.getLocationB(data => {
            console.log(data)
            this.setData({
                topBanner: data
            })
        });

        Type.getCategory(data=>{
            console.log("catetgory",data)
            this.setData({
                category:data
            })
        })
    },


    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})