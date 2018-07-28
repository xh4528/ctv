import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {VgAPI} from 'videogular2/core';

@Component({
    selector: 'page-contact',
    templateUrl: 'contact.html'
})
export class ContactPage {
    src: any;
    api: VgAPI;

    constructor(public navCtrl: NavController) {
        this.src = "https://dw-bw6.dwstatic.com/723173f14c0f0c91206a5dfb8a33f723/5b5c7a4c/49/2/1612/1503093-101-1458744342.mp4"
        // this.src1 = "http://ugcbsy.qq.com/uwMRJfz-r5jAYaQXGdGnTyzuTKg_mimTp9P4QCv2fos/p07313945kf.mp4?vkey=39B08FF325D17E3C81E53D2607CB0EC591F82B088DDF84383849B583BD9FA7A530AEF763A504828717EFF59FA63A3C7D7B4C8E18BEABB51FDE18A8829493849B8D7475082E634CA9BE0E46CD7951B21FAEA318A3D2BD62A200633AF7C71359B44A50C465F61902C9849E5B02E9E375C14CF58FB8E9916E9B";
        // this.src2 = "http://14.29.86.22/sportsts.tc.qq.com/A2Ekgb-FzXYMD-0FjhlwiJ-W-3LkPoAz63Xe4wX_DQOc/rZRcPM4tkTtX2DdgHtmazY5hc3PdVkD8hkNXvzLLCcPYXspvrBlzNjo4zDFtw9gdrhvp65QBRng8zRSOUQPyqg1YM2FyCBVY96-6MU5ys6dPrRfJvZcUtDrfHuELLd-x-kaE-X2MmnQ/d0027ro5gk9.321003.ts.m3u8?ver=4"
        // this.src2 = "https://v.qq.com/472ca070-22c7-442e-9d2a-9e5b135dfb6e";
    }

    onPlayerReady(api: VgAPI) {
        this.api = api;
    }


}
