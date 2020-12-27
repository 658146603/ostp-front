/**
 * 引入异步编程方式，解决js的回调地域问题
 */
class asyncNet {
    _state = {
        user: null,
        type: {
            'role': common.student,
            // 显示名称
            'display': '未登录',
            'role_display': common.student_display
        },
        status: false,
        tip: '正在加载中...'
    }

    _copyState() {
        return this._state
    }

    _watchers = []

    _update(res, tip = null) {
        //console.log(res)
        if (res.code === 200) {
            this._state.tip = ''
        } else {
            if (tip == null) {
                this._state.tip = res.message
            } else {
                this._state.tip = tip
            }
        }
        this._watchers.forEach((watcher) => {
            watcher(this._copyState())
        })
    }

    addWatcher(watcher) {
        this._watchers.push(watcher)
    }

    async request(url, body = '') {
        let formRequest = new Request(url, {
            method: 'post',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            },
            body: body
        })
        let res = await fetch(formRequest)
        let result = await res.json()
        this._update(result)
        return result
    }

    async searchBookStu(name = '', course = '') {
        return this.request(URL.SearchBookStu, `name=${name}&course=${course}`)
    }

    async orderBookStu(isbn) {
        return this.request(URL.OrderBookStu, `isbn=${isbn}`)
    }

    // Obsoleted
    async searchBook(name = '', course = '') {
        return this.request(URL.SearchBook, `name=${name}&course=${course}`)
    }

    async selectSecondHandPublishByStudentId(studentId) {
        return this.request(URL.SelectSecondHandPublishByStudent, `id=${studentId}`)
    }

    async selectSecondHandFindByStudentId(studentId) {
        return this.request(URL.SelectSecondHandFindByStudent, `person=${studentId}`)
    }

    async selectSecondHandFindExchangeAvailable(otherId, selfId) {
        return this.request(URL.SelectSecondHandFindOtherExchangeList, `otherId=${otherId}&selfId=${selfId}`)
    }

    async postExchangeRequest(otherId, selfId, otherFindId, otherPublishId) {
        return this.request(URL.SecondHandPostExchange, `otherId=${otherId}&selfId=${selfId}&otherFindId=${otherFindId}&otherPublishId=${otherPublishId}`)
    }

    async searchSecondHandPublishBuyList(name = '', publisher = '') {
        return this.request(URL.SelectSecondHandPublishBuyList, `name=${name}&publisher=${publisher}`)
    }

    async searchSecondHandPublishExchangeList(name = '', publisher = '') {
        return this.request(URL.SelectSecondHandPublishExchangeList, `name=${name}&publisher=${publisher}`)
    }

    async secondHandPublishPurchase(orderId) {
        return this.request(URL.SelectSecondHandPublishPurchase, `id=${orderId}`)
    }

    async addCourseOpen(major, course, year, semester, book, teacher) {
        return this.request(
            URL.InsertOpenCourse,
            `major=${major}&course=${course}&year=${year}&semester=${semester}&book=${book}&teacher=${teacher}`
        )
    }

    async secondHandPublishCancel(orderId) {
        return this.request(URL.CancelSecondHandPublish, `id=${orderId}`)
    }

    async secondHandFindCancel(orderId) {
        return this.request(URL.CancelSecondHandFind, `id=${orderId}`)
    }

    async secondHandChangeStatusOk(orderId) {
        return this.request(URL.ChangeStatusOkSecondHandFind, `id=${orderId}`)
    }

    async secondPublishChangeStatusOk(orderId) {
        return this.request(URL.ChangeStatusOkSecondHandPublish, `id=${orderId}`)
    }

    async appState() {
        let res = await this.request(URL.getLoginStatus, '')
        if (res.code === 200) {
            this._state.user = res.data
            this._state.status = true
            this._state.type = common.getUserType(res.data)
        }
        return this._copyState()
    }

	async listCollege() {
		return this.request(URL.ListCollege)
	}

    async getCollege(id) {
        return this.request(URL.GetCollege, `id=${id}`)
    }

    async fetchAllMajor(id) {
        return this.request(URL.FetchAllMajor, `id=${id}`)
    }

    async getMajor(id) {
        return this.request(URL.GetMajor, `id=${id}`)
    }

    async getCollegeByMajor(id) {
        return this.request(URL.GetCollegeByMajor, `id=${id}`)
    }

    async fetchAllClass(id) {
        return this.request(URL.SelectClassByMajor, `id=${id}`)
    }
}

net = new asyncNet()