class URL {

    static protocol = document.location.protocol + "//"
    static host = (document.location.host + ":").split(":")[0] //防止本身有端口时出现两次端口号
    static port = "8082"
    static path = ""
    static header = this.protocol + this.host + ":" + this.port + this.path


    static InsertBook = this.header + "/book/insert"
    static SelectBook = this.header + "/book/select"
    static DeleteBook = this.header + "/book/delete"
    static UpdateBook = this.header + "/book/update"
    static ListBook = this.header + "/book/list"
    static FuzzyBook = this.header + "/book/fuzzy"
    static InsertCollege = this.header + "/college/insert"
    static GetCollege = this.header + "/college/get"
    static SelectCollege = this.header + "/college/select"
    static DeleteCollege = this.header + "/college/delete"
    static ListCollege = this.header + "/college/list"
    static ListCourse = this.header + "/course/list"
    static AllCourse = this.header + "/course/all"
    static ListCourseByMajor = this.header + "/course/list/by/major"
    static SelectStudent = this.header + "/student/select"
    static InsertOpenCourse = this.header + "/course_open/insert"
    static ListOpenCourse = this.header + "/course_open/list"
    static PutImage = this.header + "/image/put"
    static GetImage = this.header + "/image/get"
    static InsertMajor = this.header + "/major/insert"
    static ListMajor = this.header + "/major/list"
    static AllMajor = this.header + "/major/all"
    static SelectMajorByYear = this.header + "/major/by/year"
    static UpdateMajor = this.header + "/major/update"
    static DeleteMajor = this.header + "/major/delete"
    static ListSecondHandFind = this.header + "/second/find/select/all"
    static SelectSecondHandFindByIsbn = this.header + "/second/find/select"
    static SelectSecondHandFindByStudent = this.header + "/second/find/selectPerson"
    static InsertSecondHandPublish = this.header + "/second/publish/insert"
    static InsertSecondHandFind = this.header+"/second/find/insert"
    static DeleteSecondHandPublish = this.header + "/second/publish/delete"
    static UpdateSecondHandPublish = this.header + "/second/publish/update"
    static ListSecondHandPublish = this.header + "/second/publish/select/all"
    static SelectSecondHandPublishByIsbn = this.header + "/second/publish/selectByISBN"
    static SelectSecondHandPublishByStudent = this.header + "/second/publish/selectByStudent"
    static InsertStudent = this.header + "/student/insert"
    static DeleteStudent = this.header + "/student/delete"
    static SelectStudentById = this.header + "/student/select"
    static UpdateStudent = this.header + "/student/update"
    static ChargeForStudent = this.header + "/student/{id}/charge"
    static ConsumeForStudent = this.header + "/student/{id}/charge"
    static InsertTeacher = this.header + "/teacher/insert"
    static SelectTeacherById = this.header + "/teacher/selectById"
    static SelectTeacherByName = this.header + "/teacher/selectByName"
    static ListTeacher = this.header + "/teacher/list"
    static SelectAllTeacher = this.header + "/teacher/selectAll"
    static DeleteTeacher = this.header + "/teacher/deleteById"
    static Login = this.header + "/login"
    static getLoginStatus = this.header + "/account/status"
    static getLoginUsername = this.header + "/account/username"
    static Logout = this.header + "/logout"
    static Status = this.header + "/account/status"
    static FuzzyTeacher = this.header+"/teacher/fuzzy"
    static FuzzyCourse = this.header+'/course/fuzzy'
    static FuzzyCollege = this.header + "/college/fuzzy"
    static IdDuplicate = this.header + "/account/duplicate"

    static getImage(url) {
        return URL.GetImage + "/" + url
    }
}


function request(url, body, callback) {
    let formRequest = new Request(url, {
        method: 'post',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
        },
        body: body
    })
    fetch(formRequest).then(response => {
        let result = response.json()
        result.then(res => {
            callback(res)
        })
    })
}


let default_headers = {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
}

let json_headers = {
    'Content-Type': 'application/json;charset=utf-8;'
}


function request_su(url, body, callback, headers = default_headers) {
    let form = new Request(url, {
        method: 'post',
        credentials: 'include',
        headers: headers,
        body: body
    })
    fetch(form).then(response => {
        response.json().then(result => {
            let status = response.status
            callback(status, result)
        })
    })
}