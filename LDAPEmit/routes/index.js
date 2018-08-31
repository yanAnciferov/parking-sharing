var express = require('express');
var router = express.Router();
const { users } = require('../users');

router.post('/api/account/login', function(req, res, next) {
  let loginData = req.body;
  console.log(loginData);
  let index = users.findIndex((value)=>{return value.password === loginData.password && value.username === loginData.username});
  if(index !== -1){
      res.send({token: users[index].token, user: {
              firstname: users[index].firstname,
              lastname: users[index].lastname,
              location: users[index].location,
              username: users[index].username
          }});
  }else {
    res.sendStatus(403);
  }
});


router.post('/api/account/verifyToken', function(req, res, next) {
    let { token } = req.body;
    let index = users.findIndex((user) => {
        return user.token === token;
    });
    let { email, firstname, lastname, location, username } = users[index];
    res.send({
        email,
        firstname,
        lastname,
        location,
        username
    });

});

module.exports = router;
