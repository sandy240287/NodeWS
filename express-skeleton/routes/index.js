exports.index = function(req, res){
  res.render('index');
};

exports.custom = function (req, res) {
  var name = req.params.name;
  res.render('custom/' + name);
};

