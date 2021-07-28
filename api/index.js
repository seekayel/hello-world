module.exports.all = (req,res) => {
  console.log(`req: ${JSON.stringify(req,null,2)}`)
  res.json({
    Hello: ['Hola', 'こんにちは', 'Hello', 'Привет', 'Olá', '你好', 'Hi','Howdy'],
    World: ['🌎','🌍','🌏'],
    at: new Date().toISOString(),
    msg: "You are off to great places."
  }
)}
