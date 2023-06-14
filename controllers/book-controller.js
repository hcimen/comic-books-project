const Comic = require('../models/comic-model');
const {v4: uuid} = require('uuid');


module.exports = {
  book: (req, res) => {
    const { _id } = req.params;
    Comic.findById(_id)
      .then(foundBook => {
        res.render('pages/book', {
          inventoryItem: foundBook
          });
        })
        .catch(error => {
          console.log(error);
        });
    }}