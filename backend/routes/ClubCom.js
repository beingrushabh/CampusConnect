const router = require('express').Router();
let ClubCom = require('../models/ClubCom.model');

router.route('/').get((req, res) => {
  ClubCom.find()
    .then(clubcom => res.json(clubcom))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const Name = req.body.Name;
  const Contact = req.body.Contact;
  const Clg_ID = req.body.Clg_ID;

  const newClubCom = new ClubCom({
	  Name,  
	  Contact, 
      Clg_ID,  
	});

  newClubCom.save()
    .then(() => res.json('ClubCom added!'))
    .catch(err => res.status(400).json('Error: ' + err));
	
	
	
});



router.route('/:id').get((req, res) => {
  ClubCom.findById(req.params.id)
    .then(ClubCom => res.json(ClubCom))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req, res) => {
  ClubCom.findByIdAndDelete(req.params.id)
    .then(() => res.json('ClubCom deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/update/:id').post((req, res) => {
  ClubCom.findById(req.params.id)
    .then(ClubCom => {
		ClubCom.Name = req.body.Name;	
		ClubCom.Contact = Number(req.body.Contact);
		ClubCom.Clg_ID = Number(req.body.Clg_ID);
      
	  
      ClubCom.save()
        .then(() => res.json('ClubCom updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;