/**
 * 常用功能的聚合
 */
class common {
    static index = 'index'
    static book_list = 'book_list'
    static publish_book = 'publish_book'
    static publish_request = 'publish_request'
    static book_market = 'book_market'
    static add_book = 'add_book'
    static add_course = 'add_course'
    static template = 'template'
    static open_course = 'open_course'
    static user = 'user'
    static admin_college = 'admin_college'
    static admin_major = 'admin_major'
    static admin_class = 'admin_class'
    static admin_teacher = 'admin_teacher'
    static admin_student = 'admin_student'
    static su = 'su'
    static su_display = '超级管理员'
    static admin = 'admin'
    static admin_display = '学院管理员'
    static teacher = 'teacher'
    static teacher_display = '教师'
    static student = 'student'
    static student_display = '学生'
    static defaultAppState(msg = null) {
        return {
            user: null,
            type: {
                'role': common.student,
                // 显示名称
                'display': '未登录',
                'role_display': common.student_display
            },
            status: false,
            tip: msg === null ? '正在加载中...' : msg
        }
    }
    static getUserType(user) {
        if (user.su === 1) {
            return {
                'role': common.su,
                'display': common.su_display,
                'role_display': common.su_display
            }
        } else if(user.su === 0) {
            return {
                'role': common.admin,
                // 显示学院的名称
                'display': user.college.name,
                'role_display': common.admin_display
            }
        } else {
            if (user.college !== undefined) {
                return {
                    'role': common.teacher,
                    'display': user.name,
                    'role_display': common.teacher_display
                }
            } else {
                return {
                    'role': common.student,
                    'display': user.name,
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
                callback(common.defaultAppState(res.message))
            }
        })
    }
    // 获取location中#后面的部分，并分析成一个对象
    static getHashDic(window) {
        if (window.location.hash === '' || !window.location.hash.startsWith('#')) {
            return null
        } else {
            let dic = {}
            window.location.hash.slice(1).split('&').forEach((value, index) => {
                let l = value.split('=')
                dic[l[0]] = l[1]
            })

            return dic
        }
    }
}

