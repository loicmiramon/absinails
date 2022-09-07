const avisModel = require('../models/avis-model')

module.exports.addAvis = async (req, res) => {
  const dataAvis = new avisModel({
    name: req.body.name,
    note: req.body.note,
    message: req.body.message
  })

  try {
    const newAvis = await dataAvis.save()
    res.status(200).json(newAvis)
  } catch (err) {
    console.log(err)
  }
}

module.exports.avis = (req, res) => {
  const avis = avisModel.find((err, docs) => {
    if(!err) {
      res.send(docs)
    } else {
      console.log('Error Avis', err)
    }
  })
}

