const apm = require('elastic-apm-node').start({

  serviceName: '',

  secretToken: '',

  serverUrl: '',
})

const app = require('express')()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000)
