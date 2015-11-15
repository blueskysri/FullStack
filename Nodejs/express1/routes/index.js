exports.index = function(req,res){
res.render('default',{
title: 'Home',
classname: 'home',
users: ['Srinivas','Reddy','Maram','Rajesh']
});  // ejs by default renders from the views folder and we also do not need an extension here.

}
// we can add different routes . the following is a different route 
exports.about = function(req,res){
res.render('default',{
title: 'About me',
classname: 'home'
//users: ['Srinivas','Reddy','Maram','Rajesh']
});
}