var getPersonData = function(personObj) {
	
	var profile = ''
	
	profile += "<div class='person'><h2 class='name'>" + personObj.first_name + " " + personObj.last_name + "</h2>"
	
	profile += "<h3 class='title'>" + personObj.title + " -- " + personObj.party + "-" + personObj.state_name + "</h3><ul>"

	if (personObj.phone) {
		profile += "<li class='phone'>phone number: " + personObj.phone + "</li>"
	}
	
	if (personObj.website) {
		profile += "<li class='website'>website: <a href='" + personObj.website + "'>" + personObj.website + "</a></li>"
	}
	
	if (personObj.facebook_id) {
		profile += "<li class='facebook'>facebook: <a href='http://facebook.com/" + personObj.facebook_id + "'>http://facebook.com/" + personObj.facebook_id + "</a></li>"
	}
	
	if (personObj.twitter_id) {
		profile += "<li class='twitter'>twitter: <a href='http://twitter.com/" + personObj.twitter_id + "'>http://twitter.com/" + personObj.twitter_id + "</a></li>"
	}
	
	profile += "</ul></div>"
	
	return profile
}

var createHtmlString = function(objList) {
	
	var stringHTML = ''

	var containerNode = document.querySelector('.container')
	
	for(var i = 0; i < objList.results.length; i++) {
		stringHTML += getPersonData(objList.results[i])
	}
	
	containerNode.innerHTML = stringHTML

	console.log(stringHTML)
}

var promise = $.getJSON('https://congress.api.sunlightfoundation.com/legislators')

promise.then(createHtmlString)