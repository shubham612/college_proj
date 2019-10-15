const Customer = require('../models/customer');

module.exports.signUp = function(req,res){

    return res.render('signUp',{
        title: "Sign-up | Form"
    });
};

module.exports.signIn = function(req,res){
    return  res.render('signIn',{
       title: "Sign-in | Form"
   });
 }

 


module.exports.create = function(req,res){
    if(req.body.password != req.body.confirm_password){
       return res.redirect('back');
    }
    Customer.findOne({email: req.body.email},function(err,customer){
       if(err){console.log('Error in finding user in signing up'); return; }

       if(!customer){
           console.log(req.body);
          Customer.create(req.body,function(err,customer){
             if(err){console.log('Error in creating user in signing up'); return; }

             return res.redirect('/sign-in');
          });
       }else{
          return res.redirect('back');
       }
    });
}
