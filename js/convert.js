/**
 * 前端数据转换器，用于将后端的数据改成自己想要的数据
 */
class convert {
    static books(books) {
        books.forEach((book) => {
            book.cover = URL.getImage(book.cover)
            book.price = book.price / 100
        })
        return books
    }
}