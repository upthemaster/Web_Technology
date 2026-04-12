const express = require('express')
const app = express()
const port = "4000"

function checkRoute(request, response, next) {
  console.log("Visited URL:", request.url)
  next()
}

app.use(checkRoute)

app.use((req, res, next) => {
  console.log("Middleware Executed at:", new Date())
  next()
})

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('Welcome to about page')
})

app.listen(port, () => {
  console.log(`Server running on port 4000`)
})