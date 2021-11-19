const Book = require("../models/book.model");
module.exports.bookController = {
  addBooks: async (req, res) => {
    try {
      const addBook = await Book.create({
        name: req.body.name,
        genres: req.body.genres,
        userRent: req.body.userRent,
      });
      res.json("Книга добавлена");
    } catch (e) {
      res.json(e.message);
    }
  },
  deleteBooksById: async (req, res) => {
    try {
      const deleteBook = await Book.findByIdAndDelete(req.params.id);
      res.json("Книга удалена");
    } catch (e) {
      res.json(e.message);
    }
  },
  patchBooksbyId: async (req, res) => {
    try {
      const patchBook = await Book.findByIdAndUpdate(
        req.params.id,
        {
          name: req.body.name,
          genres: req.body.genres,
          userRent: req.body.userRent,
        },
        { new: true }
      );
      res.json("Данные книги изменены");
    } catch (e) {
      res.json(e.message);
    }
  },
};
