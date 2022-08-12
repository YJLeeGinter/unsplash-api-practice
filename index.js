var imgContainer = document.querySelector('.image-container');
var searchForm = document.querySelector('.form');
var mainImgContainer = document.querySelector('.main-image-container');
var resultDiv = document.querySelector('.result');

function getRandomPhoto(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var unsplashObj = JSON.parse(this.responseText);    
    
      var imgDiv = document.createElement('div');
          imgDiv.classList.add('each-img-div');
          imgDiv.innerHTML = `<img class="each-img" src="${unsplashObj.urls.regular}">`
          imgContainer.appendChild(imgDiv);
    }
  };
  xhttp.open("GET", `https://api.unsplash.com/photos/random/?client_id=AIXtI3ZhfWQjdM8yvoi_R_wVwPukbMRSW6imihF8P3Y`, true);
  xhttp.send();
}

var i = 0;
while(i < 3){
  getRandomPhoto();
  i++;
}

searchForm.addEventListener('submit', function(e){
  e.preventDefault();
  var searchInput = document.querySelector('input').value;

  mainImgContainer.style.display = 'none';
  resultDiv.innerHTML = '';
  var inputValueText = document.createElement('h1');
  inputValueText.classList.add('input-value');
  inputValueText.textContent = searchInput;
  
  var xhttp2 = new XMLHttpRequest();
  xhttp2.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
  
      var unsplashObj2 = JSON.parse(this.responseText);
      imgContainer.innerHTML = '';
      var randomTitle = document.querySelector('.random-photo-title');
      randomTitle.style.display = 'none';
      resultDiv.appendChild(inputValueText);
    
        for(var eachObj of unsplashObj2.results){
          console.log(eachObj);
          var imgDiv = document.createElement('div');
              imgDiv.innerHTML = `<img class="each-img" src="${eachObj.urls.regular}">`
              imgContainer.appendChild(imgDiv);
        }
      
    }
  };
  xhttp2.open("GET", `https://api.unsplash.com/search/photos?page=1&query=${searchInput}&client_id=AIXtI3ZhfWQjdM8yvoi_R_wVwPukbMRSW6imihF8P3Y`, true);
  xhttp2.send();
  
})
  

  
