const router = require('express').Router()
const avisController = require('../controllers/avis-controller')
const contactController = require('../controllers/contact-controller')
const path = require('path')

router.post('/avis/newavis', avisController.addAvis)
router.get('/avis', avisController.avis)
router.post('/contact', contactController.contact)

router.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../../client/index.html'))
})


module.exports = router