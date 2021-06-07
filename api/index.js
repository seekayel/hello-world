module.exports.all = (req,res) => {
  res.json({
    Hello: ['Hola', 'こんにちは', 'Hello', 'Привет', 'Olá', '你好'],
    World: '🌎',
    at: Date.now()
  }
)}
