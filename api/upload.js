const { S3Client, PutObjectCommand} = require('@aws-sdk/client-s3')
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner')


module.exports.generateURL = async (contentType) => {
  // bucket='files-829947040538'
  bucket='cyclic-sam-artifacts-542703605194'
  key=`my/awesome/path/README-${Date.now()}.md`

  const client = new S3Client({});
  const command = new PutObjectCommand({
    Bucket: bucket,
    Key: key,
    ContentType: contentType
  })
  const url = await getSignedUrl(client, command, { expiresIn: 60*60 })
  return url
}

module.exports.put = (req,res) => {
  const url = generateURL(req.get('content-type'))
  res.status = 307
  res.set('Location',url)
  res.json({url})
}
