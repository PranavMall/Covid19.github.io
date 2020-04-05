// Global stats
var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
      var myObj = JSON.parse(this.responseText);
        document.getElementById("world_cases").innerHTML += myObj.total_cases;
        document.getElementById("total_recovered").innerHTML += myObj.total_recovered;
        document.getElementById("total_deaths").innerHTML += myObj.total_deaths;
        document.getElementById("new_cases").innerHTML += myObj.new_cases;
        document.getElementById("statistic_taken_at").innerHTML += myObj.statistic_taken_at;
        document.getElementById("country_cases").innerHTML = myObj.total_cases;
        document.getElementById("country_recovered").innerHTML = myObj.total_recovered;
        document.getElementById("country_deaths").innerHTML = myObj.total_deaths;
        document.getElementById("active_cases").innerHTML = myObj.new_cases;
	}
});

xhr.open("GET", "https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php");
xhr.setRequestHeader("x-rapidapi-host", "coronavirus-monitor.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "9043074082msh6ce7673c953987cp1e13c6jsnf9fd0b2b3ea4");

xhr.send(data);



//  on page load to show default news
function my_Function() {

    xhttp = new XMLHttpRequest();
    
      xhttp.onreadystatechange = function() {
    
        if (this.readyState == 4 && this.status == 200) {
    
            var myNews = JSON.parse(this.responseText);
            var keyCount = Object.keys(myNews.articles[0]).length-1;
            document.getElementById("title1").innerHTML = myNews.articles[keyCount].title;
            document.getElementById("time1").innerHTML = myNews.articles[keyCount].publishedAt;
            document.getElementById("myImg1").src = myNews.articles[keyCount].urlToImage;
            document.getElementById("link1").href = myNews.articles[keyCount].url;
            document.getElementById("title2").innerHTML = myNews.articles[keyCount-1].title;
            document.getElementById("time2").innerHTML = myNews.articles[keyCount-1].publishedAt;
            document.getElementById("myImg2").src = myNews.articles[keyCount-1].urlToImage;
            document.getElementById("link2").href = myNews.articles[keyCount-1].url;
            document.getElementById("title3").innerHTML = myNews.articles[keyCount-2].title;
            document.getElementById("time3").innerHTML = myNews.articles[keyCount-2].publishedAt;
            document.getElementById("myImg3").src = myNews.articles[keyCount-2].urlToImage;
            document.getElementById("link3").href = myNews.articles[keyCount-2].url;
            document.getElementById("title4").innerHTML = myNews.articles[keyCount-3].title;
            document.getElementById("time4").innerHTML = myNews.articles[keyCount-3].publishedAt;
            document.getElementById("myImg4").src = myNews.articles[keyCount-3].urlToImage;
            document.getElementById("link4").href = myNews.articles[keyCount-3].url;
            document.getElementById("cc-title1").innerHTML = myNews.articles[keyCount-4].title;
            document.getElementById("cc-link1").href = myNews.articles[keyCount-4].url;
            document.getElementById("cc-title2").innerHTML = myNews.articles[keyCount-5].title;
            document.getElementById("cc-link2").href = myNews.articles[keyCount-5].url;
            document.getElementById("cc-description1").innerHTML = myNews.articles[keyCount-4].description;
            document.getElementById("cc-description2").innerHTML = myNews.articles[keyCount-5].description;
            document.getElementById("cc-img1").src = myNews.articles[keyCount-4].urlToImage;
            document.getElementById("cc-img2").src = myNews.articles[keyCount-5].urlToImage;
    
        }
    
      };
    
      xhttp.open("GET", "https://newsapi.org/v2/top-headlines?language=en&q=covid&apiKey=fcaa0a45549542638af19ca4fe9631f1", true);
    
      xhttp.send();
    
      }


      // Country Stats 

      function showCustomer(str) {

        var data = null;
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
   
          xhr.onreadystatechange = function() {
        
            if (this.readyState == 4 && this.status == 200) {
        
              var myObj = JSON.parse(this.responseText);
              document.getElementById("country_cases").innerHTML = myObj.latest_stat_by_country[0].total_cases;
              document.getElementById("country_recovered").innerHTML = myObj.latest_stat_by_country[0].total_recovered;
              document.getElementById("country_deaths").innerHTML = myObj.latest_stat_by_country[0].total_deaths;
              document.getElementById("active_cases").innerHTML = myObj.latest_stat_by_country[0].active_cases;
            }
        
          };
        
          xhr.open("GET", "https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country="+str, true);
          xhr.setRequestHeader("x-rapidapi-host", "coronavirus-monitor.p.rapidapi.com");
          xhr.setRequestHeader("x-rapidapi-key", "9043074082msh6ce7673c953987cp1e13c6jsnf9fd0b2b3ea4");
          xhr.send(data); 
        }

      // Country News 
        function showNews(str) {

          var xhttp; 
        
          xhttp = new XMLHttpRequest();
        
          xhttp.onreadystatechange = function() {
        
            if (this.readyState == 4 && this.status == 200) {
        
              var myObj = JSON.parse(this.responseText);
              document.getElementById("cc-title1").innerHTML = myObj.articles[0].title;
              document.getElementById("cc-description1").innerHTML = myObj.articles[0].description;   
              document.getElementById("cc-img1").src = myObj.articles[0].urlToImage;
              document.getElementById("cc-link1").href = myObj.articles[0].url;      
              document.getElementById("cc-title2").innerHTML = myObj.articles[1].title;
              document.getElementById("cc-description2").innerHTML = myObj.articles[1].description;   
              document.getElementById("cc-img2").src = myObj.articles[1].urlToImage;    
              document.getElementById("cc-link2").href = myObj.articles[1].url; 
            }
        
          };
        
          xhttp.open("GET", "https://newsapi.org/v2/top-headlines?language=en&country="+str+"&apiKey=fcaa0a45549542638af19ca4fe9631f1", true);
        
          xhttp.send();
        
        }