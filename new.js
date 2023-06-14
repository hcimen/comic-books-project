update_comic: (req, res) => {
    const {_id} = req.params;
    const {title, author, publisher, genre, pages, rating, synopsis, image} = req.body;    
    Comic.findByIdAndUpdate(_id, {$set: {
      title:title, 
      author:author, 
      publisher:publisher, 
      genre:genre, 
      pages:pages, 
      rating:rating, 
      synopsis: synopsis, 
      image:image
    }}, {new: true}, error => {
      if(error) {
        return error;
      } else {
        response.redirect("/admin-console");
      }
    })    
  }
