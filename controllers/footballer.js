const Footballer = require('../models/footballer');

module.exports = {
  getAll: (req, res) => {
    Footballer.find(function(err, footballers) {
      if (err)
        res.send(err);
      res.json(footballers);
    });
  },

  save: (req, res) => {
    console.log(req.body);
    const footballer = new Footballer();
    footballer.firstName = req.body.firstName;
    footballer.lastName = req.body.lastName;
    footballer.country = req.body.country;
    footballer.club = req.body.club;

    footballer.save(function(err) {
      if (err)
        res.send(err);

      res.json({ 
        message: 'Footballer created!', 
        firstName: footballer.firstName, 
        lastName: footballer.lastName, 
        country: footballer.country,
        club: footballer.club });
    });
  },

  getOne: (req, res) => {
    Footballer.findById(req.params.footballer_id, (err, footballer) => {
      if (err)
        res.send(err);
      res.json(footballer);
    });
  },

  update: (req, res) => {
    Footballer.findById(req.params.footballer_id, (err, footballer) => {

      if (err)
        res.send(err);

      footballer.firstName = req.body.firstName;
      footballer.lastName = req.body.lastName;
      footballer.country = req.body.country;
      footballer.club = req.body.club;
      footballer.save(function(err) {
        if (err)
          res.send(err);

        res.json({ message: 'Footballer updated!' });
      });

    });
  },

  remove: (req, res) => {
    console.log('removing.....');
    console.log(req.params);
    Footballer.remove({
      _id: req.params.footballer_id
    }, function(err, footballer) {
      if (err)
        res.send(err);

      res.json({ message: 'Successfully deleted' });
    });
  }
};
