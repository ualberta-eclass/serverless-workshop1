var AWS = require('aws-sdk');
const R = new AWS.Rekognition(),
    S3 = new AWS.S3();
let serviceconfig = require("./stackvariables").variables();

module.exports.visiongetlabels = async (event, context, callback) => {
    try {
        const img = 'intersection.jpg',
            s3Bucket = serviceconfig.service + '-sn';


        callback(null, await R.detectLabels({
            
            Image: {
                S3Object: {
                    Bucket: s3Bucket,
                    Name: img,
                },
            },
        }).promise());
    } catch (err) {
        callback(err);
    }
}


module.exports.visiongettext = async (event, context, callback) => {
    try {
        const img = 'cardfrontupass.png',
            s3Bucket = serviceconfig.service + '-sn';


        callback(null, await R.detectText({
            
            Image: {
                S3Object: {
                    Bucket: s3Bucket,
                    Name: img,
                },
            },
        }).promise());
    } catch (err) {
        callback(err);
    }
}