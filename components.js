/**
 * this contains components which are frequently used.
 */

/**
 * book component
 */
Vue.component('book', {
    props: ['book'],
    template: `
      <div class="container-fluid">
      <!-- Project -->
      <div class="project">
        <div class="row bg-white has-shadow">
          <div class="left-col col-lg-8 d-flex align-items-center justify-content-between">
            <div class="project-title d-flex align-items-center">
              <div class="image has-shadow">
                <img v-bind:src="book.cover" alt="..."
                     class="img-fluid">
              </div>
              <div class="text">
                <h3 class="h4">{{ book.name }}</h3>
                <small>{{ book.isbn }}</small>
              </div>
            </div>
          </div>
          <div class="left-col col-lg-2 d-flex align-items-center justify-content-center">
            <div class="text">
              <h3 class="h4">\${{ book.price }}</h3>
            </div>
          </div>
          <div class="right-col col-lg-2 d-flex align-items-center justify-content-center">
            <div class="btn btn-primary btn-block">
              订阅
            </div>
          </div>
        </div>
      </div>
      </div>`
})

Vue.component('app', {
    props: ['info', 'state'],
    template: `<div class="page">
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
                                        <div class="notification-content"><i class="fa fa-twitter bg-blue"></i>You have
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
                                        <div class="notification-content"><i class="fa fa-twitter bg-blue"></i>You have
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
                        <li class="nav-item"><a onclick="logout()" class="nav-link logout"> <span
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
                    <h1 class="h4">{{ state.user.name }}</h1>
                    <p>{{ state.user.clazz == null ? "老师": "学生" }}</p>
                </div>
                <div v-else class="title">
                    <h1 class="h4">未登录</h1>
                </div>
            </div>
            <!-- Sidebar Navidation Menus--><span class="heading">Main</span>
            <ul class="list-unstyled">
                <li :class="info.menu === 'index' ? 'active': ''"><a href="index.html"> <i class="icon-home"></i>主页</a></li>
                <li :class="info.menu === 'book_list' ? 'active' : ''"><a href="bookList.html"><i class="icon-flask"></i>订阅列表</a> </li>
                <li><a href="#exampledropdownDropdown" aria-expanded="false" data-toggle="collapse"> <i
                    class="icon-interface-windows"></i>买东西 </a>
                    <ul id="exampledropdownDropdown" class="collapse list-unstyled ">
                        <li :class="info.menu === 'publish_book'? 'active': ''"><a href="publishBook.html">发布二手书</a></li>
                        <li :class="info.menu === 'publish_request' ? 'active' : ''"><a href="publishRequest.html">查询二手书</a></li>
                        <!--                        <li><a href="#">Page</a></li>-->
                    </ul>
                </li>
                <li><a href="login.html"> <i class="icon-interface-windows"></i>Login page </a></li>
                <li><a href="tables.html"> <i class="icon-grid"></i>Tables </a></li>
                <li><a href="charts.html"> <i class="fa fa-bar-chart"></i>Charts </a></li>
                <li><a href="forms.html"> <i class="icon-padnote"></i>Forms </a></li>
                
            </ul>
            <span class="heading">Extras</span>
            <ul class="list-unstyled">
                <li><a href="#"> <i class="icon-flask"></i>Demo </a></li>
                <li><a href="#"> <i class="icon-screen"></i>Demo </a></li>
                <li><a href="#"> <i class="icon-mail"></i>Demo </a></li>
                <li><a href="#"> <i class="icon-picture"></i>Demo </a></li>
            </ul>
        </nav>
        <div class="content-inner" id="main-content">
            <header class="page-header">
                <div class="container-fluid">
                    <h2 class="no-margin-bottom">{{ state.tip === '' ? info.title : info.title + state.tip }}</h2>
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
