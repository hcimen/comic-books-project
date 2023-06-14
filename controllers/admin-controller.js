const Comic = require('../models/comic-model');
const {v4: uuid} = require('uuid');

module.exports = {
  admin: (req, res) => {
    if (req.isAuthenticated()) {
      Comic.find({}, (error, allComics) => {
        if (error) {
          return error;
        } else {
          res.render('pages/admin', {
            allComics: allComics
          });
        }
      });
    } else {
      res.redirect('/login');
    }
  },
        
  create: (req, res) => {
    if (req.isAuthenticated()) {
      res.render('pages/create');
      console.log('rendering create page');
      } else {
        res.redirect('/login');
      }
  },

  create_new_comic: (req, res) => {
    if (req.isAuthenticated()) {
      const { title, author, publisher, genre, pages, rating, synopsis, image } = req.body;
      const newComic = new Comic({
        _id: uuid(),
        title: title,
        author: author,
        publisher: publisher,
        genre: genre,
        pages: pages,
        rating: rating,
        synopsis: synopsis,
        image: image
      });
      newComic.save();
      console.log(Comic);
      res.redirect('/admin-console');
    } else {
      res.redirect('/login');
    }
  },
    
  update: (req, res) => {
    if (req.isAuthenticated()) {
      const { _id } = req.params;
      Comic.findById(_id)
        .then(foundBook => {
          res.render('pages/update', {
            inventoryItem: foundBook
          });
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      res.redirect('/login');
    }
  },

  update_comic: (req, res) => {
    if (req.isAuthenticated()) {
      const { _id } = req.params;
      const { title, author, publisher, genre, pages, rating, synopsis, image } = req.body;
      Comic.findByIdAndUpdate(_id, {
        title: title,
        author: author,
        publisher: publisher,
        genre: genre,
        pages: pages,
        rating: rating,
        synopsis: synopsis,
        image: image
      })
        .then(updatedComic => {
          console.log(updatedComic);
          res.redirect('/admin-console');
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      res.redirect('/login');
    }
  },
    
  delete_comic: (req, res) => {
    if (req.isAuthenticated()) {
      const { _id } = req.params;
      Comic.findByIdAndRemove(_id)
        .then(removedComic => {
          console.log(removedComic);
          res.redirect('/admin-console');
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      res.redirect('/login');
    }
  }
};