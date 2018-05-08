"use strict";

/**
 * @file Loads jobs into catamel
 * @author Gareth Murphy
 * @version 0.1
 */

class Orig {
    data: any;
    options: any;

    constructor() {
        this.data = {
            "size": 5859874481,
            "dataFileList": [
                {
                    "path": "/static/test.txt",
                    "size": 2718281828,
                    "time": "2018-04-23T09:23:47.000Z",
                    "chk": "string",
                    "uid": "string",
                    "gid": "string",
                    "perm": "string"
                },
                {
                    "path": "/static/GEM_3300V_4000V_2cm_2cm_dataTree_thresh100dead200.h5",
                    "size": 3141592653,
                    "time": "2018-04-23T09:23:47.000Z",
                    "chk": "string",
                    "uid": "string",
                    "gid": "string",
                    "perm": "string"
                },
                {
                    "path": "/static/file4.nxs",
                    "size": 3141592653,
                    "time": "2018-04-23T09:23:47.000Z",
                    "chk": "string",
                    "uid": "string",
                    "gid": "string",
                    "perm": "string"
                }
            ],
            "ownerGroup": "string",
            "accessGroups": [
                "string"
            ],
            "createdBy": "string",
            "updatedBy": "ingestor",
            "datasetId": "<PID>/a4ec147c-0d5d-4cfd-9fa5-893423a68729",
            "rawDatasetId": "string",
            "derivedDatasetId": "string",
            "createdAt": "2018-04-23T09:23:47.918Z",
            "updatedAt": "2018-04-23T09:59:04.506Z"
        };
        this.options = {
            url: "www.defaultnottobeused.com",
            method: 'POST',
            body: {"nottobeused": "test"},
            json: true,
            rejectUnauthorized: false,
            requestCert: true
        };
    }
}

export {Orig};