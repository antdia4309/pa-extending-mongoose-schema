const User = require('mongoose').model('User');

exports.create = async function(req, res){
    const user = new User(req.body);
    await user.save()
    .then((response) => {
        console.log('Value of response: {0}', response);
        res.status(200).send("User Added");
    })
    .catch((error)=> {
        console.error('Could not save user: {0}', error);
    });
};