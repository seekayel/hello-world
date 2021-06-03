module.exports.all = (req,res) => {
  res.status = 302
  res.set('Location','https://s3.us-east-2.amazonaws.com/BUCKET_NAME/OBJECT_KEY?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=bing%2F20210603%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20210603T165620Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=02b312179450a0c0ec4d12389bfed2f774646eb6f17aef0e869074e3683bba3a')
  res.body = ''
}
