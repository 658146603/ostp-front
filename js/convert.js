/**
 * 前端数据转换器，用于将后端的数据改成自己想要的数据
 */
class convert {
    /**
     * 转换book中的数据为合适的类型
     * @param books
     * @returns {*}
     */
    static books(books) {
        books.forEach((book) => {
            book.book.cover = URL.getImage(book.book.cover)
            book.book.price = book.book.price / 100
        })
        return books
    }

    /**
     * 分析book中与用户相关的数据
     * @param books
     * @param student
     */
    static books2(books, student) {
        books.forEach((book) => {
            book.courseOpensRelated = book.courseOpens.filter((co) =>
                student.clazz.major.id === co.course.major.id
            )
            book.canOrdered = book.courseOpensRelated.length !== 0
            book.received = false
            book.ordersRelated = book.orders.filter((order) => {
                if (student.id === order.student.id && order.received) {
                    book.received = true
                }
                return student.id === order.student.id
            })


            book.isOrdered = book.ordersRelated.length !== 0
            if (book.received){
                book.state = 3
            } else if (book.canOrdered && book.isOrdered) {
                book.state = 2
            } else if (book.canOrdered) {
                book.state = 1
            } else {
                book.state = 0
            }
        })
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