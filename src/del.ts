import * as data from '/tmp/config.json';
import * as assert from 'assert';

const rp = require('request-promise') ;


function login_url(){
	return "https://scicatapi.esss.dk/api/v2/Users/login"
}

function datasets_url(){
	return "https://scicatapi.esss.dk/api/v2/Datasets"
}

function make_url(temp_url, access_token){
	return temp_url+'?access_token='+access_token;
}

async function login(){
	var code =3;
	let url=login_url();
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
      const response = await rp(options1);
      return Promise.resolve(response);
    }
    catch (error) {
      return Promise.reject(error);
    }

}

function get_datasets(response){
	var access = response.id;
	console.log(access)
	assert ( access.length == 64);
	var datasets = 'ddd';
	let dataset_url= datasets_url();
	let url= "https://scicatapi.esss.dk/api/v2/Datasets?access_token="+access;
	console.log(url);

    let options2 = {
            url: url,
            method: 'GET',
            body: {"test":"test"},
            json: true,
            rejectUnauthorized: false,
            requestCert: true
    };

    rp(options2).then((body) => {
			var a= JSON.stringify(body);
            //console.log("login OK: " + a);
			console.log( JSON.stringify(body[0]));

	let deletable = body[0].pid.replace("/","%2F");
	let url= "https://scicatapi.esss.dk/api/v2/Datasets/"+deletable+"?access_token="+access;
    console.log(url);
    let options3 = {
            url: url,
            method: 'DELETE',
            body: deletable,
            rejectUnauthorized: false,
            requestCert: true
    };
		rp(options3);

			for (var key in body) {
    if (body.hasOwnProperty(key)) {
        //console.log(key + " -> " + body[key].pid);


	let deletable = body[key].pid.replace("/","%2F");
	let url= "https://scicatapi.esss.dk/api/v2/Datasets/"+deletable+"?access_token="+access;
    let options3 = {
            url: url,
            method: 'DELETE',
            body: body[0].pid,
            rejectUnauthorized: false,
            requestCert: true
    };
		rp(options3);


    }
}
        });
	return datasets;
}

async function main(){
	var x = await login();
	var y = await get_datasets(x)
	console.log(y);
}

main()