import dotenv from 'dotenv'
import aws from 'aws-sdk';
import crypto from 'crypto'

dotenv.config()

const region = "eu-north-1"
const bucketName = "doctor-project-website"
const accessKeyId = process.env.AWS_ACCESS_KEY_ID
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY_ID
//1st key saz7b71b7+KX+okPzM8VKcjCVbDE/rohnJ8cC2tF
//2nd key SrTh0gSY6lzgoQOaERmyq3zjticinFKOF0lbp8ab

const s3 = new aws.S3({
    region: region,
    accessKeyId : accessKeyId,
    secretAccessKey : secretAccessKey,
   signatureVersion: 'v4'
})


export async function generateUploadURL() {
    console.log("in random bytes")
    const rawBytes = await crypto.randomBytes(16)
    const imageName = rawBytes.toString('hex')

    const params = ({
        Bucket: bucketName,
        Key: imageName,
        Expires: 300
    })


    const uploadURL = await s3.getSignedUrlPromise('putObject', params)
    return uploadURL;
}