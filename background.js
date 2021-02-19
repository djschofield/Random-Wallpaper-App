chrome.app.runtime.onLaunched.addListener(function() {
  var imgurl;
  function fetchJSONFile(path, callback) {
	  var httpRequest = new XMLHttpRequest();
	  httpRequest.onreadystatechange = function() {
		  if (httpRequest.readyState === 4) {
			  if (httpRequest.status === 200) {
				  var data = JSON.parse(httpRequest.responseText);
				  if (callback) callback(data);
			  }
		  }
	  };
	  httpRequest.open('GET', path);
	  httpRequest.send(); 
  }
  

  fetchJSONFile('https://api.unsplash.com/photos/random?client_id=InsertUnsplashAPIKeyHere', function(data){
	  imgurl = data.urls.full;
	  
	  chrome.wallpaper.setWallpaper(
	  {
		'url': imgurl,
		'layout': 'CENTER_CROPPED',
		'filename': 'randomwallpaper'
	  }, function() {});
  });
  
});