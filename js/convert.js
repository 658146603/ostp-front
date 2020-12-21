class convert {
    static books(books) {
        books.forEach((book) => {
            book.cover = URL.getImage(book.cover)
            book.price = book.price / 100
        })
    }
}