class common {
    static index = 'index'
    static book_list = 'book_list'
    static publish_book = 'publish_book'
    static publish_request = 'publish_request'
    static publish_book2 = 'publish_book2'
    static template = 'template'
    // 获取当前App的状态，包括用户信息等
    static getAppState(callback) {
        request(URL.getLoginStatus, '', (res) => {
            // 成功返回
            if(res.code === 200) {
                callback({
                    user: res.data,
                    status: true,
                    tip: ''
                })
            } else {
                callback({
                    user: null,
                    status: false,
                    tip: res.message
                })
            }
        })
    }
}