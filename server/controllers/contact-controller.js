const db = require('../config/db')


module.exports.contact = async (req, res) => {
  const results = db.query('INSERT INTO message (lastname, firstname, email, phone, service, message) VALUES ($1,$2,$3,$4,$5,$6)', [
    req.body.lastname,
    req.body.firstname,
    req.body.email,
    req.body.phone,
    req.body.service,
    req.body.message
  ])

  try {
    res.status(200).json({
      message : results.rows
    })
  } catch (error) {
    console.log('POST CONTACT : ', error);
  }
}
