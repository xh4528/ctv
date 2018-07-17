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

    FatherFun1(x: any) {
        alert("我是父组件的方法,子组件给我传递了:" + JSON.stringify(x));
        x["c"]();
    }



}
