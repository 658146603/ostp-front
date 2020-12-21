/**
 * this contains components which are frequently used.
 */

/**
 * book component
 */
Vue.component('book',
    {
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
    }
)

