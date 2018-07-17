import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    data1: any;

    constructor(public navCtrl: NavController) {
        this.data1 = {
            "firstname": "张",
            "lastname": "三"
        }
    }

    /**
     * 子组件要执行的方法
     * @param x     子组件传递的参数
     * @constructor
     */
    FatherFun1(x: any) {
        alert("我是父组件的方法,子组件给我传递了:" + JSON.stringify(x));
        x["c"]();
        console.log("子组件调用父组件的方法时,里面的this是子组件:", this);
    }

    /**
     * 子组件要执行的方法
     * @param e     子组件传递的参数
     */
    exeFun(e: any) {
        console.log(e, "我是父组件的方法");
    }
}
