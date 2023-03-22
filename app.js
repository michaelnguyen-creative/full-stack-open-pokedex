const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 8080

app.use(express.static('dist'))

app.get('/health', (_req, res) => {
  try {
    res.sendStatus('200')
  } catch (error) {
    res.send(error).end()
  }
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server started on port 8080')
})
