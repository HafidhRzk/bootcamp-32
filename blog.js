let blogs = []

function addBlog() {

    let title = document.getElementById('input-blog-title').value;
    let content = document.getElementById('input-blog-content').value;
    let image = document.getElementById('input-blog-image').files[0]
    let techno = document.getElementsByName('techno');
    let x=0;
    let tech= Array();

    let printTech='';

    for(let centang of techno){
      if(centang.checked == true){
        tech[x]=centang.value; x++
        printTech += '<i class="'+centang.value+'"></i>';
      }
    }

    image = URL.createObjectURL(image)

    let blog = {
        title: title,
        content: content,
        image: image,
        tech: printTech,
        postedAt: new Date(),
    }

    blogs.push(blog)

    renderBlog()
}

function renderBlog() {

    let blogContainer = document.getElementById('contents')
    console.log(blogs)

    blogContainer.innerHTML = 
    `<div class="blog-list-item">
      <div class="blog-image">
          <img src="assets/blog-img.jpg" alt="" />
      </div>
      <div class="item-content">
          <h3>
            <a style="text-decoration:none; color:black" 
            href="blog-detail.html" target="_blank">Dumbways Mobile App 2021</a>
          </h3>
          <p style="color: grey">Post Date : 12 January 2022 14:30 WIB</p>
          <p style="color: grey">Durasi : 3 Month</p>
          <div style="text-align: right; color: grey;">3 Month Ago</div>
          <p>App that used for Dumbways student, it was deployed and can downloaded on play store. 
            happy download</p>
      </div>
      <div class="item-logo">
          <i class="fa-brands fa-google-play"></i>
          <i class="fa-brands fa-android"></i>
          <i class="fa-brands fa-java"></i>
      </div>
      <div class="item-button">
          <a href="#" class="btn-edit">Edit</a>
          <a href="#" class="btn-post">Delete</a>
      </div>
    </div>
    <div class="blog-list-item">
      <div class="blog-image">
          <img src="assets/blog-img.jpg" alt="" />
      </div>
      <div class="item-content">
          <h3>
            <a style="text-decoration:none; color:black" 
            href="blog-detail.html" target="_blank">Dumbways Mobile App 2021</a>
          </h3>
          <p style="color: grey">Post Date : 12 January 2022 14:30 WIB</p>
          <p style="color: grey">Durasi : 3 Month</p>
          <div style="text-align: right; color: grey;">3 Month Ago</div>
          <p>App that used for Dumbways student, it was deployed and can downloaded on play store. 
            happy download</p>
      </div>
      <div class="item-logo">
          <i class="fa-brands fa-google-play"></i>
          <i class="fa-brands fa-android"></i>
          <i class="fa-brands fa-java"></i>
      </div>
      <div class="item-button">
          <a href="#" class="btn-edit">Edit</a>
          <a href="#" class="btn-post">Delete</a>
      </div>
    </div>
    <div class="blog-list-item">
      <div class="blog-image">
          <img src="assets/blog-img.jpg" alt="" />
      </div>
      <div class="item-content">
          <h3>
            <a style="text-decoration:none; color:black" 
            href="blog-detail.html" target="_blank">Dumbways Mobile App 2021</a>
          </h3>
          <p style="color: grey">Post Date : 12 January 2022 14:30 WIB</p>
          <p style="color: grey">Durasi : 3 Month</p>
          <div style="text-align: right; color: grey;">3 Month Ago</div>
          <p>App that used for Dumbways student, it was deployed and can downloaded on play store. 
            happy download</p>
      </div>
      <div class="item-logo">
          <i class="fa-brands fa-google-play"></i>
          <i class="fa-brands fa-android"></i>
          <i class="fa-brands fa-java"></i>
      </div>
      <div class="item-button">
          <a href="#" class="btn-edit">Edit</a>
          <a href="#" class="btn-post">Delete</a>
      </div>
    </div>
    <div class="blog-list-item">
      <div class="blog-image">
          <img src="assets/blog-img.jpg" alt="" />
      </div>
      <div class="item-content">
          <h3>
            <a style="text-decoration:none; color:black" 
            href="blog-detail.html" target="_blank">Dumbways Mobile App 2021</a>
          </h3>
          <p style="color: grey">Post Date : 12 January 2022 14:30 WIB</p>
          <p style="color: grey">Durasi : 3 Month</p>
          <div style="text-align: right; color: grey;">3 Month Ago</div>
          <p>App that used for Dumbways student, it was deployed and can downloaded on play store. 
            happy download</p>
      </div>
      <div class="item-logo">
          <i class="fa-brands fa-google-play"></i>
          <i class="fa-brands fa-android"></i>
          <i class="fa-brands fa-java"></i>
      </div>
      <div class="item-button">
          <a href="#" class="btn-edit">Edit</a>
          <a href="#" class="btn-post">Delete</a>
      </div>
    </div>
    <div class="blog-list-item">
      <div class="blog-image">
          <img src="assets/blog-img.jpg" alt="" />
      </div>
      <div class="item-content">
          <h3>
            <a style="text-decoration:none; color:black" 
            href="blog-detail.html" target="_blank">Dumbways Mobile App 2021</a>
          </h3>
          <p style="color: grey">Post Date : 12 January 2022 14:30 WIB</p>
          <p style="color: grey">Durasi : 3 Month</p>
          <div style="text-align: right; color: grey;">3 Month Ago</div>
          <p>App that used for Dumbways student, it was deployed and can downloaded on play store. 
            happy download</p>
      </div>
      <div class="item-logo">
          <i class="fa-brands fa-google-play"></i>
          <i class="fa-brands fa-android"></i>
          <i class="fa-brands fa-java"></i>
      </div>
      <div class="item-button">
          <a href="#" class="btn-edit">Edit</a>
          <a href="#" class="btn-post">Delete</a>
      </div>
    </div>`

    for(let i = 0; i < blogs.length; i++) {
        blogContainer.innerHTML += 
        `<div class="blog-list-item">
          <div class="blog-image">
              <img src="${blogs[i].image}" alt="" />
          </div>
          <div class="item-content">
              <h3>
                <a style="text-decoration:none; color:black" 
                href="blog-detail.html" target="_blank">${blogs[i].title}</a>
              </h3>
              <p style="color: grey">Post Date : ${getFullTime(blogs[i].postedAt)}</p>
              <p style="color: grey">Durasi : ${getDurationTime(blogs[i].duration)}</p>
              <div style="text-align: right; color: grey;">${getDistanceTime(blogs[i].postedAt)}</div>
              <p>${blogs[i].content}</p>
          </div>
          <div class="item-logo">
          ${blogs[i].tech}
          </div>
          <div class="item-button">
              <a href="#" class="btn-edit">Edit</a>
              <a href="#" class="btn-post">Delete</a>
          </div>
        </div>`
    }
}

let month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]


function getFullTime(time) {
  let date = time.getDate()
  let monthIndex = time.getMonth()
  let year = time.getFullYear()
  let hour = time.getHours()
  let minute = time.getMinutes()

  let fullTime = `${date} ${month[monthIndex]} ${year} ${hour}:${minute} WIB`

  return fullTime
}

function getDistanceTime(time) {
  let timeNow = new Date()
  let timeBlog = new Date(time)

  let distance = timeNow - timeBlog

  let dayDistance = Math.floor(distance / (24 * 60 * 60 * 1000))

  if(dayDistance != 0){
    return dayDistance + ' day ago'
  }else {
    let hourDistance = Math.floor(distance / (60 * 60 * 1000))
    
    if(hourDistance != 0) {
      return hourDistance + ' hours ago'
    }else {
      let minuteDistance = Math.floor(distance / (60 * 1000))

      if(minuteDistance != 0){
        return minuteDistance + ' minutes ago'
      } else {
        let secondsDistance = Math.floor(distance / 1000)

        return secondsDistance + ' second ago'
      }
    }
  }
}

function getDurationTime() {

  let startDate = document.getElementById('start-date').value;
  let endDate = document.getElementById('end-date').value;

  let timeStart = new Date(startDate);
  let timeEnd = new Date(endDate);

  let duration = timeEnd - timeStart
  
  let yearDuration = Math.floor(duration / (12 * 30 * 24 * 60 * 60 * 1000))

    if(yearDuration != 0){
      return yearDuration + ' Year'
    }else {
      let monthDuration = Math.floor(duration / (30 * 24 * 60 * 60 * 1000))
      
      if(monthDuration != 0) {
        return monthDuration + ' Months'
      }else {
        let dayDuration = Math.floor(duration / (24 * 60 * 60 * 1000))

        if(dayDuration != 0){
          return dayDuration + ' Days'
        }
      }
    }
}

setInterval(function(){
  renderBlog()
}, 1000)