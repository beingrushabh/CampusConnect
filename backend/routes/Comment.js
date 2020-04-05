const router = require('express').Router();
let Event = require('../models/Event.model');
let Comment = require('../models/Comment.model');
let User = require('../models/User.model');

//id of the event
router.route('/add/:id').post((req, res) => {
  const Description = req.body.Description;
  const Event = req.params.id;
    var query = User.findOne({UserName: String(req.body.UserName)},{'_id':1});
	
  query.exec(function(err,user){
	  if(err)
		  return console.log(err);
		
	User=user._id;
  
  
  const newComment = new Comment({
	  Event,  
	  Description, 
	  User	  
	});

  newComment.save()
    .then(() => res.json('Comment added!'))
    .catch(err => res.status(400).json('Error: ' + err));
	
	});
	
});

//find all comments for the event with 'id'
router.route('/:id').get((req, res) => {
  Comment.find({Event : req.params.id})
    .then(Comment => res.json(Comment))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Comment.findByIdAndDelete(req.params.id)
    .then(() => res.json('Comment deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Comment.findById(req.params.id)
    .then(Comment => {		
		Comment.Description = req.body.Description;
		//Comment.Event = Comment.Event;
		//Comment.User = Comment.User;
      
		
			Comment.save()
			.then(() => res.json('Comment updated!'))
			.catch(err => res.status(400).json('Error: ' + err));
		     
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;