const Bear = require('../models/bear');

module.exports = {
  getAll: (req, res) => {
    Bear.find(function(err, bears) {
      if (err)
        res.send(err);
      res.json(bears);
    });
  },

  save: (req, res) => {
    const bear = new Bear();
    bear.name = req.body.name;

    bear.save(function(err) {
      if (err)
        res.send(err);

      res.json({ message: 'Bear created!' });
    });
  },

  getOne: (req, res) => {
    Bear.findById(req.params.bear_id, (err, bear) => {
      if (err)
        res.send(err);
      res.json(bear);
    });
  },

  update: (req, res) => {
    Bear.findById(req.params.bear_id, (err, bear) => {

      if (err)
        res.send(err);

      bear.name = req.body.name;
      bear.save(function(err) {
        if (err)
          res.send(err);

        res.json({ message: 'Bear updated!' });
      });

    });
  },

  remove: (req, res) => {
    Bear.remove({
      _id: req.params.bear_id
    }, function(err, bear) {
      if (err)
        res.send(err);

      res.json({ message: 'Successfully deleted' });
    });
  }
};
