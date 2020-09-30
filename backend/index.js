const express = require('express')
const app = express()

app.get('/', (req,res)=>  {
  return 'Hello World'
})

const PORT = 3001
app.listen(PORT , ()=>  {
  console.log('server running')
})