/**
 * this contains components which are frequently used.
 */

/**
 * book component
 */
Vue.component('book', {
    props: ['book'],
    methods: {
        order: async function () {
            if (this.book.state === 1 || this.book.state === 2){
                let res = await net.orderBookStu(this.book.book.isbn)
                if (res.code === 200) {
                    if (this.book.state === 1) {
                        this.book.state = 2
                    } else {
                        this.book.state = 1
                    }
                }
            }
            this.$forceUpdate()
        }
    },
    template: `
      <div class="container-fluid">
      <!-- Project -->
      <div class="project">
        <div class="row bg-white has-shadow">
          <div class="left-col col-lg-8 d-flex align-items-center justify-content-between">
            <div class="project-title d-flex align-items-center">
              <div class="image has-shadow">
                <img v-bind:src="book.book.cover" alt="..."
                     class="img-fluid">
              </div>
              <div class="text">
                <h3 class="h4">{{ book.book.name }}</h3>
                <small>{{ book.book.isbn }}[<span v-if="book.courses !== null" v-for="v in book.courses">&nbsp;{{ v }}</span>]</small>
              </div>
            </div>
          </div>
          <div class="left-col col-lg-2 d-flex align-items-center justify-content-center">
            <div class="text">
              <h3 class="h4">\${{ book.book.price }}</h3>
            </div>
          </div>
          <div class="right-col col-lg-2 d-flex align-items-center justify-content-center">
              <!--无需订阅的情况-->
              <button v-if="book.state === 0" disabled class="btn btn-default btn-block" >
                  无法订阅
              </button>
              <button v-else-if="book.state === 1" class="btn btn-primary btn-block" v-on:click="order">
                  订阅
              </button>
              <button v-else-if="book.state === 2" class="btn btn-outline-primary btn-block" v-on:click="order">
                  取消订阅
              </button>
              <button v-else class="btn btn-outline-primary btn-block" disabled>
                  已送达
              </button>
          </div>
        </div>
      </div>
    </div>`
})

Vue.component('college', {
    props: ['college', 'state'],
    template: `
<div class="container-fluid">
<!-- Project -->
<div class="project">
    <div class="row bg-white has-shadow">
        <div class="col-lg-10 col-12 d-flex align-items-center justify-content-between">
            <div class="project-title d-flex align-items-center">
                <div class="text">
                    <h3 class="h4"><a :href="'adminMajor.html#id=' + college.id">{{ college.name }}</a></h3>
                    <small>{{ college.major_count }}个专业 {{ college.teacher_count }}个教师 {{ college.student_count }}个学生</small>
                </div>
            </div>
        </div>
        <div v-if="state.type.role === 'su'" class="right-col col-lg-2 col-6 d-flex align-items-center justify-content-center">
            <div class="btn btn-danger btn-block">
                删除
            </div>
        </div>
    </div>
</div>
</div>`
})

Vue.component('major', {
    props: ['major', 'state'],
    template: `
<div class="container-fluid">
<!-- Project -->
<div class="project">
    <div class="row bg-white has-shadow">
        <div class="col-lg-10 col-12 d-flex align-items-center justify-content-between">
            <div class="project-title d-flex align-items-center">
                <div class="text">
                    <h3 class="h4"><a :href="'adminClass.html#id=' + major.id">{{ major.name }}({{ major.year }})</a></h3>
                    <small>{{ major.class_count }}个班级 {{ major.student_count }}个学生</small>
                </div>
            </div>
        </div>
        <div v-if="state.type.role === 'su'" class="right-col col-lg-2 col-6 d-flex align-items-center justify-content-center">
            <div class="btn btn-danger btn-block">
                删除
            </div>
        </div>
    </div>
</div>
</div>`
})


Vue.component('clazz', {
    props: ['clazz', 'state'],
    template: `
<div class="container-fluid">
<!-- Project -->
<div class="project">
    <div class="row bg-white has-shadow">
        <div class="col-lg-10 col-12 d-flex align-items-center justify-content-between">
            <div class="project-title d-flex align-items-center">
                <div class="text">
                    <h3 class="h4">{{ clazz.name }}</h3>
                    <small>{{ clazz.student_count }}个学生</small>
                </div>
            </div>
        </div>
        <div v-if="state.type.role === 'su'" class="right-col col-lg-2 col-6 d-flex align-items-center justify-content-center">
            <div class="btn btn-danger btn-block">
                删除
            </div>
        </div>
    </div>
</div>
</div>`
})

/**
 * 整个app框架
 */
Vue.component('app', {
    props: ['info', 'state'],
    methods: {
        logout: function() {
            request_su(URL.Logout, "", (status, result) => {
                if (status === 200) {
                    window.location.assign("login.html")
                }
            })
        }
    },
    template: `
        <div class="page">
        <!-- Main Navbar-->
        <header class="header">
            <nav class="navbar">
                <!-- Search Box-->
                <div class="search-box">
                    <button class="dismiss"><i class="icon-close"></i></button>
                    <form id="searchForm" action="#" role="search">
                        <input type="search" placeholder="What are you looking for..." class="form-control">
                    </form>
                </div>
                <div class="container-fluid">
                    <div class="navbar-holder d-flex align-items-center justify-content-between">
                        <!-- Navbar Header-->
                        <div class="navbar-header">
                            <!-- Navbar Brand --><a href="index.html" class="navbar-brand d-none d-sm-inline-block">
                            <div class="brand-text d-none d-lg-inline-block">
                                <span>Bootstrap </span><strong>Dashboard</strong></div>
                            <div class="brand-text d-none d-sm-inline-block d-lg-none"><strong>BD</strong></div>
                        </a>
                            <!-- Toggle Button--><a id="toggle-btn" href="#"
                                                    class="menu-btn active"><span></span><span></span><span></span></a>
                        </div>
                        <!-- Navbar Menu -->
                        <ul class="nav-menu list-unstyled d-flex flex-md-row align-items-md-center">
                            <!-- Search-->
                            <li class="nav-item d-flex align-items-center"><a id="search" href="#"><i
                                class="icon-search"></i></a></li>
                            <!-- Notifications-->
                            <li class="nav-item dropdown"><a id="notifications" rel="nofollow" data-target="#" href="#"
                                                             data-toggle="dropdown" aria-haspopup="true"
                                                             aria-expanded="false" class="nav-link"><i
                                class="fa fa-bell-o"></i><span class="badge bg-red badge-corner">12</span></a>
                                <ul aria-labelledby="notifications" class="dropdown-menu">
                                    <li><a rel="nofollow" href="#" class="dropdown-item">
                                        <div class="notification">
                                            <div class="notification-content"><i class="fa fa-envelope bg-green"></i>You
                                                have 6 new messages
                                            </div>
                                            <div class="notification-time"><small>4 minutes ago</small></div>
                                        </div>
                                    </a></li>
                                    <li><a rel="nofollow" href="#" class="dropdown-item">
                                        <div class="notification">
                                            <div class="notification-content"><i class="fa fa-twitter bg-blue"></i>You
                                                have
                                                2 followers
                                            </div>
                                            <div class="notification-time"><small>4 minutes ago</small></div>
                                        </div>
                                    </a></li>
                                    <li><a rel="nofollow" href="#" class="dropdown-item">
                                        <div class="notification">
                                            <div class="notification-content"><i class="fa fa-upload bg-orange"></i>Server
                                                Rebooted
                                            </div>
                                            <div class="notification-time"><small>4 minutes ago</small></div>
                                        </div>
                                    </a></li>
                                    <li><a rel="nofollow" href="#" class="dropdown-item">
                                        <div class="notification">
                                            <div class="notification-content"><i class="fa fa-twitter bg-blue"></i>You
                                                have
                                                2 followers
                                            </div>
                                            <div class="notification-time"><small>10 minutes ago</small></div>
                                        </div>
                                    </a></li>
                                    <li><a rel="nofollow" href="#" class="dropdown-item all-notifications text-center">
                                        <strong>view all notifications </strong></a></li>
                                </ul>
                            </li>
                            <!-- Messages                        -->
                            <li class="nav-item dropdown"><a id="messages" rel="nofollow" data-target="#" href="#"
                                                             data-toggle="dropdown" aria-haspopup="true"
                                                             aria-expanded="false" class="nav-link"><i
                                class="fa fa-envelope-o"></i><span class="badge bg-orange badge-corner">10</span></a>
                                <ul aria-labelledby="notifications" class="dropdown-menu">
                                    <li><a rel="nofollow" href="#" class="dropdown-item d-flex">
                                        <div class="msg-profile"><img src="template/img/avatar-1.jpg" alt="..."
                                                                      class="img-fluid rounded-circle"></div>
                                        <div class="msg-body">
                                            <h3 class="h5">Jason Doe</h3><span>Sent You Message</span>
                                        </div>
                                    </a></li>
                                    <li><a rel="nofollow" href="#" class="dropdown-item d-flex">
                                        <div class="msg-profile"><img src="template/img/avatar-2.jpg" alt="..."
                                                                      class="img-fluid rounded-circle"></div>
                                        <div class="msg-body">
                                            <h3 class="h5">Frank Williams</h3><span>Sent You Message</span>
                                        </div>
                                    </a></li>
                                    <li><a rel="nofollow" href="#" class="dropdown-item d-flex">
                                        <div class="msg-profile"><img src="template/img/avatar-3.jpg" alt="..."
                                                                      class="img-fluid rounded-circle"></div>
                                        <div class="msg-body">
                                            <h3 class="h5">Ashley Wood</h3><span>Sent You Message</span>
                                        </div>
                                    </a></li>
                                    <li><a rel="nofollow" href="#" class="dropdown-item all-notifications text-center">
                                        <strong>Read all messages </strong></a></li>
                                </ul>
                            </li>
                            <!-- Languages dropdown    -->
                            <li class="nav-item dropdown"><a id="languages" rel="nofollow" data-target="#" href="#"
                                                             data-toggle="dropdown" aria-haspopup="true"
                                                             aria-expanded="false"
                                                             class="nav-link language dropdown-toggle"><img
                                src="template/img/flags/16/GB.png" alt="English"><span
                                class="d-none d-sm-inline-block">English</span></a>
                                <ul aria-labelledby="languages" class="dropdown-menu">
                                    <li><a rel="nofollow" href="#" class="dropdown-item"> <img
                                        src="template/img/flags/16/DE.png"
                                        alt="English" class="mr-2">German</a>
                                    </li>
                                    <li><a rel="nofollow" href="#" class="dropdown-item"> <img
                                        src="template/img/flags/16/FR.png"
                                        alt="English" class="mr-2">French
                                    </a></li>
                                </ul>
                            </li>
                            <!-- Logout    -->
                            <li class="nav-item"><a v-on:click="logout" class="nav-link logout"> <span
                                class="d-none d-sm-inline">Logout</span><i class="fa fa-sign-out"></i></a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        <div class="page-content d-flex align-items-stretch">
            <!-- Side Navbar -->
            <nav class="side-navbar">
                <!-- Sidebar Header-->
                <div class="sidebar-header d-flex align-items-center">
                    <!--                <div class="avatar"><img src="template/img/avatar-1.jpg" alt="..." class="img-fluid rounded-circle">-->
                    <!--                </div>-->
                    <!--如果-->
                    <div v-if="state.status" class="title">
                        <h1 class="h4">{{ state.type.display }}</h1>
                        <p>{{ state.type.role_display }}</p>
                    </div>
                    <div v-else class="title">
                        <h1 class="h4">未登录</h1>
                    </div>
                </div>
                <!-- Sidebar Navidation Menus-->
                <span class="heading">Main</span>
                <ul class="list-unstyled">
                    <li :class="info.menu === 'index' ? 'active': ''"><a href="index.html"> <i class="icon-home"></i>主页</a>
                    </li>
                    <!-- 与书籍有关的三个相关界面，查找功能类似，在订阅功能上略有区别 -->
                    <li v-if="state.type.role === 'student'" :class="info.menu === 'book_list' ? 'active' : ''">
                        <a href="orderBook.html"><i class="icon-flask"></i>订阅书籍</a>
                    </li>
                    <li v-else-if="state.type.role === 'teacher'" :class="info.menu === 'book_list' ? 'active' : ''">
                        <a href="getBook.html"><i class="icon-flask"></i>领取书籍</a>
                    </li>
                    <li v-else :class="info.menu === 'book_list' ? 'active' : ''">
                        <a href="searchBook.html"><i class="icon-flask"></i>查找书籍</a>
                    </li>
                    <li><a href="#dropDown1" aria-expanded="false" data-toggle="collapse">
                        <i class="icon-interface-windows"></i>买东西</a>
                        <ul id="dropDown1" class="collapse list-unstyled show">
                            <li :class="info.menu === 'book_market' ? 'active': ''"><a href="bookMarket.html">二手市场</a>
                            </li>
                            <li :class="info.menu === 'publish_book' ? 'active': ''"><a href="publishBook2.html">发布二手书</a>
                            </li>
                            <li :class="info.menu === 'publish_request' ? 'active' : ''"><a href="publishRequest2.html">想要二手书</a>
                            </li>
                        </ul>
                    </li>
                    <li :class="info.menu === 'admin_college' ? 'active': ''"><a href="adminCollege.html"><i class="icon-website"></i>学院信息</a>
                    </li>
                    <!-- 管理员的相关界面 -->
                    <li v-if="state.type.role === 'admin'"><a href="#dropDown2" aria-expanded="false" data-toggle="collapse">
                        <i class="icon-interface-windows"></i>学院管理</a>
                        <ul id="dropDown2" class="collapse list-unstyled">
                            <li :class="info.menu === 'add_book' ? 'active': ''"><a href="adminAddBook.html">添加书籍</a>
                            </li>
                            <li :class="info.menu === 'add_course' ? 'active': ''"><a href="addCourse.html">添加课程</a>
                            </li>
                            <li :class="info.menu === 'open_course' ? 'active' : ''"><a href="openCourse.html">开设课程</a>
                            </li>
                        </ul>
                    </li>
                    <li v-if="state.type.role === 'su'"><a href="#dropDown3" aria-expanded="false" data-toggle="collapse">
                        <i class="icon-interface-windows"></i>超级管理</a>
                        <ul id="dropDown3" class="collapse list-unstyled">
                            <!-- 管理专业和班级由管理学院进入 -->
                            <li :class="info.menu === 'admin_teacher' ? 'active': ''"><a href="admin_add_teacher.html">管理教师</a>
                            </li>
                            <li :class="info.menu === 'admin_student' ? 'active' : ''"><a href="adminStudent.html">管理学生</a>
                            </li>
                            <li :class="info.menu === 'add_book' ? 'active': ''"><a href="adminAddBook.html">添加书籍</a>
                            </li>
                            <li :class="info.menu === 'add_course' ? 'active': ''"><a href="addCourse.html">添加课程</a>
                            </li>
                            <li :class="info.menu === 'open_course' ? 'active' : ''"><a href="openCourse.html">开设课程</a>
                            </li>
                        </ul>
                    </li>
                    
                    <li><a href="login.html"> <i class="icon-interface-windows"></i>登录</a></li>
                    <li :class="info.menu === 'user' ? 'active': ''"><a href="user.html"><i class="icon-user"></i>个人信息</a></li>
                </ul>
                <span class="heading">Extras</span>
                <ul class="list-unstyled">
                    <li :class="info.menu === 'template' ? 'active' : ''"><a href="template.html"><i
                        class="icon-screen"></i>模板代码</a></li>
                    <li><a href="tables.html"> <i class="icon-grid"></i>Tables </a></li>
                    <li><a href="charts.html"> <i class="fa fa-bar-chart"></i>Charts </a></li>
                    <li><a href="forms.html"> <i class="icon-padnote"></i>Forms </a></li>
                </ul>
            </nav>
            <div class="content-inner" id="main-content">
                <header class="page-header">
                    <div class="container-fluid">
                        <h2 class="no-margin-bottom">
                            {{ (state.tip === '') ? info.title : info.title + " - " + state.tip }}</h2>
                    </div>
                </header>
                <slot></slot>
                <!-- Page Footer-->
                <footer class="main-footer">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-sm-6">
                                <p>Copyright &copy; 2019.Company name All rights reserved.<a target="_blank"
                                                                                             href="http://sc.chinaz.com/moban/">&#x7F51;&#x9875;&#x6A21;&#x677F;</a>
                                </p>
                            </div>
                            <div class="col-sm-6 text-right">
                                <p></p>
                                <!-- Please do not remove the backlink to us unless you support further theme's development at https://bootstrapious.com/donate. It is part of the license conditions. Thank you for understanding :)-->
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
        </div>`
})

/**
 * Form表单，有属性title
 */
Vue.component('form-card', {
    props: ['title'],
    template: `
<div class="card">
    <div class="card-header d-flex align-items-center">
        <h3 class="h4">{{ title }}</h3>
    </div>
    <div class="card-body">
        <div class="form-horizontal">
            <slot></slot>
        </div>
    </div>
</div>`
});

/**
 * Form表单空间组，有属性label
 */
Vue.component('form-group', {
    props: ['label'],
    template: `
<div class="form-group row">
<label class="col-sm-3 form-control-label">{{ label }}</label>
<div class="col-sm-9">
    <slot></slot>
</div>
</div>`
})
