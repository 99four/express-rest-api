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
    console.log(req);
    const footballer = new Footballer();
    footballer.name = req.body.name;

    footballer.save(function(err) {
      if (err)
        res.send(err);

      res.json({ message: 'Footballer created!', name: footballer.name, res: 'fdsfdsfs' });
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

      footballer.name = req.body.name;
      footballer.save(function(err) {
        if (err)
          res.send(err);

        res.json({ message: 'Footballer updated!' });
      });

    });
  },

  remove: (req, res) => {
    Footballer.remove({
      _id: req.params.footballer_id
    }, function(err, footballer) {
      if (err)
        res.send(err);

      res.json({ message: 'Successfully deleted' });
    });
  }
};
