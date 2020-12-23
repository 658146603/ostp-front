/**
 * 前端数据转换器，用于将后端的数据改成自己想要的数据
 */
class convert {
    static books(books) {
        books.forEach((book) => {
            book.book.cover = URL.getImage(book.cover)
            book.book.price = book.book.price / 100
        })
        return books
    }

    /**
     * 在每个college中加入学院的描述信息
     * @param colleges 学院的集合
     */
    static colleges(colleges) {
        colleges.forEach((college) => {
            college.major_count = -1
            college.teacher_count = -1  // TODO: 添加统计代码
            college.student_count = -1
        })
        return colleges
    }

    /**
     * 在每个major中加入专业的描述信息
     * @param majors 专业的集合
     */
    static majors(majors) {
        majors.forEach((major) => {
            major.class_count = -1 // TODO: 添加统计代码
            major.student_count = -1
        })
        return majors
    }

    static classes(classes) {
        classes.forEach((clazz) => {
            clazz.student_count = -1 // TODO: 添加统计代码
        })
        return classes
    }
}