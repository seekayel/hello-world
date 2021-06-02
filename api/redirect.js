module.exports.all = (req,res) => {
  res.status(302)
  res.set('Location','http://localhost')
  res.set('Content-Type','text/plain')
  res.body('')
}
