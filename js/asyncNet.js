

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
			if (tip == null){
				this._state.tip = res.message
			} else {
				this._state.tip = tip
			}
		}
		this._watchers.forEach((watcher) => {
			watcher(this._copyState())
		})
	}

	async addWatcher(watcher) {
		await this.appState()
		this._watchers.push(watcher)
	}

	async request(url, body)  {
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

	async searchBook(name = '', course = '') {
		return this.request(URL.SearchBook, `name=${name}&course=${course}`)
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
}

net = new asyncNet()