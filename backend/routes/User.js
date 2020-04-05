const router = require('express').Router();
const bcrypt = require('bcryptjs');
let User = require('../models/User.model');

router.route('/').get((req, res) => {
  User.find()
    .then(User => res.json(User))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/register').post((req, res) => {
  const UserName = req.body.UserName;
  const Password = bcrypt.hashSync(String(req.body.Password), 10);
  const Email_ID = req.body.Email_ID;
  const FirstName = req.body.FirstName;
  const LastName = req.body.LastName;
  const Gender = req.body.Gender;
  const Age = req.body.Age;
  const Address = req.body.Address;
  const Clg_ID = req.body.Clg_ID;
	
  const newUser = new User({
	  UserName,
	  Password,
	  Email_ID,
	  FirstName,
	  LastName,
	  Gender,
	  Age,
	  Address, 
      Clg_ID,  
	});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
		
});

router.route('/login').post((req,res) => {
	User.findOne({UserName: req.body.UserName})
	.then(user => {
		if(user==null){
			return res.status(400).json('Username does not exist');
		}
		if(!bcrypt.compareSync(req.body.Password, user.Password)){
			return res.status(400).json('Message: The password is invalid');
		}
		res.json('Login Succesful');
	})
	.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .then(User => res.json(User))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  User.findById(req.params.id)
    .then(User => {
		
		User.UserName = req.body.UserName;
		//User.Password = Bcrypt.hashSync(req.body.Password, 10);
		User.Email_ID = req.body.Email_ID;
		User.FirstName = req.body.FirstName;
		User.LastName = req.body.LastName;
		User.Gender = req.body.Gender;
		User.Age = req.body.Age;
		User.Address = req.body.Address;
		User.Clg_ID = req.body.Clg_ID;  
	  
      User.save()
        .then(() => res.json('User updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


//change password: provide old passwordas well with new password
router.route('/changepassword/:id').post((req, res) => {
  User.findById(req.params.id)
    .then(User => {
		if(!bcrypt.compareSync(req.body.OldPassword, User.Password)){
			return res.status(400).json('Message: The password is invalid');
		}
		User.Password = bcrypt.hashSync(req.body.NewPassword, 10);
		 	  
      User.save()
        .then(() => res.json('User updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;