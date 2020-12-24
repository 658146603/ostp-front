/**
 * 引入异步编程方式，解决js的回调地域问题
 */
class asyncNet {
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
		return await res.json();
	}

	async searchBook(name = '', course = '') {
		return await this.request(URL.SearchBook, `name=${name}&course=${course}`);
	}

	async appState() {
		let res = await this.request(URL.getLoginStatus, '')
		if (res.code === 200) {
			return {
				user: res.data,
				type: common.getUserType(res.data),
				status: true,
				tip: ''
			}
		} else {
			return common.defaultAppState(res.message)
		}
	}
}

net = new asyncNet()