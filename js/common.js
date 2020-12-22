class common {
    static index = 'index'
    static book_list = 'book_list'
    static publish_book = 'publish_book'
    static publish_request = 'publish_request'
    static book_market = 'book_market'
    static template = 'template'
    static su = 'su'
    static su_display = '超级管理员'
    static admin = 'admin'
    static admin_display = '学院管理员'
    static teacher = 'teacher'
    static teacher_display = '教师'
    static student = 'student'
    static student_display = '学生'
    static defaultAppState() {
        return {
            user: null,
            type: {
                'role': common.student,
                'role_display': common.student_display
            },
            status: false,
            tip: '正在加载中...'
        }
    }
    static getUserType(user) {
        if (user.su === 1) {
            return {
                'role': common.su,
                'role_display': common.su_display
            }
        } else if(user.su === 0) {
            return {
                'role': common.admin,
                'role_display': common.admin_display
            }
        } else {
            if (user.college !== undefined) {
                return {
                    'role': common.teacher,
                    'role_display': common.teacher_display
                }
            } else {
                return {
                    'role': common.student,
                    'role_display': common.student_display
                }
            }
        }
    }
    // 获取当前App的状态，包括用户信息等
    static getAppState(callback) {
        request(URL.getLoginStatus, '', (res) => {
            // 成功返回
            if(res.code === 200) {
                callback({
                    user: res.data,
                    type: common.getUserType(res.data),
                    status: true,
                    tip: ''
                })
            } else {
                callback({
                    user: null,
                    type: {
                      'role': common.student,
                      'role_display': common.student_display
                    },
                    status: false,
                    tip: res.message
                })
            }
        })
    }
}