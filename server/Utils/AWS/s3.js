import AWS from "aws-sdk";

//AWS S3 bucket config
const s3Bucket = new AWS.S3({
    accessKeyId: "AKIA2AR2RMKJU5P3ODGU",
    secretAccessKey:"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",
    region: "ap-south-1"
});

export const s3Upload = (options) => {
    return new Promise((resolve, reject) => 
        s3Bucket.upload(options, (error, data) => {
            if(error) return reject(error);
            return resolve(data);
        })
    );
};

// AWS_S3_ACCESS_KEY=AKIA2AR2RMKJU5P3ODGU
// AWS_S3_SECRET_KEY=