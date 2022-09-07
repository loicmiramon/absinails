const contactModel = require("../models/contact-model")


module.exports.contact = async (req, res) => {
  const dataContact = new contactModel({
    lastname: req.body.lastname,
    firstname: req.body.firstname,
    email: req.body.email,
    phone: req.body.phone,
    service: req.body.service,
    message: req.body.message
  })

  try {
    const newContact = await dataContact.save()
    res.status(200).json(newContact)
  } catch (err) {
    console.log(err)
  }
}
