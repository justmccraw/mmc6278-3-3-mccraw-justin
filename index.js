const app = require('./app')
const {getJobs, getCityInfo} = require('./util')
const path = require('path')
const express = require('express')
const PORT = process.env.PORT || 3000

// TODO: import the getCityInfo and getJobs functions from util.js (Done!)
// TODO: Statically serve the public folder
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

app.get('/index.js', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.js'))
})

app.get('/style.css', (req, res) => {
  res.sendFile(path.join(__dirname, './public/style.css'))
})
// TODO: declare the GET route /api/city/:city
// app.get('/public', (req, res) => {
//   res.json()
// })
// This endpoint should call getCityInfo and getJobs and return
// the result as JSON.
// The returned JSON object should have two keys:
// cityInfo (with value of the getCityInfo function)
// jobs (with value of the getJobs function)
// If no city info or jobs are found,
// the endpoint should return a 404 status



app.listen(PORT, () => {
  console.log('App started:')
  console.log('http://localhost:' + PORT)
})
