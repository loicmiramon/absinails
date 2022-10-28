const db = require('../config/db')

module.exports.addAvis = async (req, res) => {

  const data = {
    name: '',
    note: -1,
    message: ''
  }

  const regex = new RegExp('[a-zA-Z0-9]', 'g')
  const name = regex.test(req.body.name)
  if (name) {
    data.name = req.body.name
  } else {
    data.name = ''
  }
  const note = regex.test(req.body.note)
  if (note) {
    data.note = req.body.note
  } else {
    data.note = -1
  }
  const message = regex.test(req.body.message)
  if (message) {
    data.message = req.body.message
  } else {
    data.message = ''
  }


  if(data.name !== '' && data.note === -1 && data.message !== '') {
    const results = db.query('INSERT INTO avis (name, note, message) VALUES ($1,$2,$3)', [
      data.name,
      data.note,
      data.message
     ])

     try {
      res.status(200).json({
        avis : results.rows
      })
   } catch (error) {
    console.log('POST AVIS :', error);
   }
  } else {
    return
  }
}

module.exports.avis = async (req, res) => {
  const results = await db.query('SELECT * FROM avis')
  try {
    res.status(200).json({
      avis: results.rows
    })
  } catch (error) {
    console.log('GET AVIS :', error);
  }
}

