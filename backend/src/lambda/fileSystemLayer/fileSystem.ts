import * as AWS from 'aws-sdk'

const s3 = new  AWS.S3({
    signatureVersion: 'v4'
})

const bucketName =  process.env.IMAGES_S3_BUCKET
const urlExpiration = process.env.SIGNED_URL_EXPIRATION

export async function getUrl(imageId:String):Promise<String>{
    const url = s3.getSignedUrl('putObject', {
        Bucket: bucketName,
        Key: imageId,
        Expires: urlExpiration
    })
    return url
}