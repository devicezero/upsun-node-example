const express = require('express')
const Blackfire = require('@blackfireio/node-tracing');
const appName = process.env.PLATFORM_APPLICATION_NAME || 'hello-world-app'

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('look ma, a code change!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  Blackfire.start({appName});
})
