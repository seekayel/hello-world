module.exports.all = (req,res) => {
  res.json({
    Hello: ['Hola', 'こんにちは', 'Hello', 'Привет', 'Olá', '你好', 'Hi'],
    World: '🌎',
    at: new Date().toISOString()
  }
)}
