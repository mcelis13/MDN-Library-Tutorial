var express = require('express');
var router = express.Router();

//Require controller modules
var book_controller = require('../controllers/bookController');
var author_controller = require('../controllers/authorController');
var genre_controller = require('../controllers/genreController');
var book_instance_controller = require('../controllers/bookinstanceController');

/// BOOK ROUTES ///

//GET catalog home page.
router.get('/', book_controller.index);

//GET request for create a Book NOTe this must come before routes that display Book(uses id).
router.get('/book/create', book_controller.book_create_get);

//POST request for creating a book.
router.post('/book/create', book_controller.book_create_post);

//GET request to delete BOOK
router.get('/book/:id/delete', book_controller.book_delete_get);

//POST request to delete Book
router.post('/book/:id/delete', book_controller.book_delete_post);

//GET request to update a BOOK
router.get('/book/:id/update', book_controller.book_update_get);

//POST request to update a Book
router.post('/book/:id/update', book_controller.book_update_post);

//GET request for one BOOK
router.get('/book/:id', book_controller.book_detail);

//GET request for list of all Book items.

router.get('/books', book_controller.book_list);

//AUTHOR ROUTES//

//GET request for creating Author.  Note this must come before route for id
router.get('/author/create', author_controller.author_create_get);

//POST request for creating Author
router.post('/author/create', author_controller.author_create_post);

//GET request for deleting AUTHOR
router.get('/author/:id/delete', author_controller.author_delete_get);

//POST request for deleting Author
router.post('/author/:id/delete', author_controller.author_delete_post);

//GET request for update Author
router.get('/author/:id/update', author_controller.author_update_get);

//POST request for update Author
router.post('/author/:id/update', author_controller.author_update_post);

//GET request for one Author
router.get('/author/:id', author_controller.author_detail);

//GET request for list of all Author
router.get('/authors', author_controller.author_list);

// GENRE ROUTES //

//GET request for creating a Genre. Note this must come before route that displays Genre (uses id)
router.get('/genre/create', genre_controller.genre_create_get);

//POST request for creating GENRE
router.post('/genre/create', genre_controller.genre_create_post);

//GET request to delete GENRE
router.get('/genre/delete', genre_controller.genre_delete_get);

//POST request to delete POST
router.post('/genre/delete', genre_controller.genre_delete_post);

//GET request update Genre
router.get('/genre/update', genre_controller.genre_update_get);

//POST request update Genre
router.post('/genre/update', genre_controller.genre_update_post);

//GET request for one Genre
router.get('/genre/:id', genre_controller.genre_detail );

//GET request for list of all Genre
router.get('/genres', genre_controller.genre_list);

/// BOOKINSTANCE ROUTES ///

//GET request for creating a BookInstance Note this must come before route that displays BookInstance (uses ID)
router.get('/bookinstance/create', book_instance_controller.bookinstance_create_get);

//POST request for creating BookInstance
router.post('/bookinstance/create', book_instance_controller.bookinstance_create_post);

//GET request for delete BookInstance
router.get('/bookinstance/delete', book_instance_controller.bookinstance_delete_get);

//POST request for delete BookInstance
router.post('/bookinstance/delete', book_instance_controller.bookinstance_delete_post);

//GET
router.get('/bookinstance/update', book_instance_controller.bookinstance_update_get);

//POST
router.post('/bookinstance/update', book_instance_controller.bookinstance_update_post);

//GET request for one BookInstance
router.get('/bookinstance/:id/', book_instance_controller.bookinstance_detail);

//GET request for list of all BookInstance
router.get('/bookinstances', book_instance_controller.bookinstance_list);

module.exports = router;
