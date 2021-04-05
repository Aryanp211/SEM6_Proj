const router = require('express').Router();
let Central = require('../models/central.model');

router.route('/').get((req, res) => {
  Central.find()
    .then(centralusers => res.json(centralusers))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const centraluser_name = req.body.centraluser_name;
  const centraluser_email = req.body.centraluser_email;
  const centraluser_mobile= Number(req.body.centraluser_mobile);
  const centraluser_password= req.body.centraluser_password;
  //const centraluser_Gender= req.body.centraluser_Gender;
  //const centraluser_DoB = req.body.centraluser_DoB;
  //const centraluser_Central=req.body.centraluser_Central;
  const centraluser_Post=req.body.centraluser_Post;
  const newCentral = new Central({centraluser_name, centraluser_email, centraluser_mobile, centraluser_password, centraluser_Post});

  newCentral.save()
    .then(() => res.json('Central user added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Central.findById(req.params.id)
    .then(centralusers => res.json(centralusers))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Central.findByIdAndDelete(req.params.id)
    .then(() => res.json('Central deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/find').post((req,res)=>{
  const name = req.body.centraluser_name;
  Central.find({centraluser_name:name})
.then((centralusers) => res.json(centralusers))
});
// router.route('/search').post((req,res)=>{
//   //const bd = req.body.bd;
//   //const ed = req.body.ed;
//   Central.find({centraluser_DoB:{"$gte": new Date("1999")}})
// .then((centralusers) => res.json(centralusers))
// });
router.route('/update/:id').post((req, res) => {
  Central.findById(req.params.id)
    .then(centralusers  => {
  centralusers.centraluser_name = req.body.centralusername;
  centralusers.centraluser_email = req.body.centraluser_email;
  centralusers.centraluser_mobile= Number(req.body.centraluser_mobile);
  centralusers.centraluser_password= req.body.centraluser_password;
  //centralusers.centraluser_Central=req.body.centraluser_Central;
  centralusers.centraluser_Post=req.body.centraluser_Post;
  
      centralusers.save()
        .then(() => res.json('Central updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;