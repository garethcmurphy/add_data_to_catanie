"use strict";
import * as data from '/tmp/config.json';

const rp = require('request-promise');
import * as os from 'os';

class LoggerIn {

    url_base: string;
    login_url: string;
    machine_name: string;
    url: string;
    url_pick: any;

    constructor() {
	   this.url_pick = {
            "local": "http://localhost:3000",
            //"macmurphy.local": "http://localhost:3000",
            "macmurphy.local": "https://scicatapi.esss.dk",
            //"CI0020036": "http://localhost:3000",
            "CI0020036": "https://scicatapi.esss.dk",
            "kubetest01.dm.esss.dk": "https://kubetest02.dm.esss.dk:32223",
            "scicat01.esss.lu.se": "https://scicat03.esss.lu.se:32223",
            "dst": "https://scicatapi.esss.dk",
            "k8s": "http://catamel-dacat-api-server-dev"
        };


        this.machine_name = os.hostname();
        //this.machine_name = "http://catamel-dacat-api-server-dev"
        console.log("machine name ", this.machine_name);
        //this.machine_name = "kubetest01";

        this.url = this.url_pick[this.machine_name];
        this.url_base = this.url+"/api/v2/";
        //this.url_base = "https://kubetest02.dm.esss.dk:32223/api/v2/"
        //this.url_base = "https://scicat03.esss.lu.se:32223/api/v2/"
        this.login_url = this.url_base + "Users/login";
    }

    async login() {

        let url = this.login_url;
        let rawdata = data;
        console.log(data);

        let options1 = {
            url: url,
            method: 'POST',
            body: rawdata,
            json: true,
            rejectUnauthorized: false,
            requestCert: true
        };
        try {
            const response = await
                rp(options1);
            return Promise.resolve(response);
        }
        catch (error) {
            return Promise.reject(error);
        }

    }

}


export {LoggerIn}