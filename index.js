const app = require('./app')
const PORT = process.env.PORT || 3000
const {getJobs, getCityInfo} = require('./util')

// app.get('/public', (req, res) => {
//   res.json()
// })

app.listen(PORT, () => {
  console.log('App started:')
  console.log('http://localhost:' + PORT)
})
