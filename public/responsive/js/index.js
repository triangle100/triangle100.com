function accessCookie(cookieName) {
    var name = cookieName + "=";
    var allCookieArray = document.cookie.split(';');
    for(var i=0; i<allCookieArray.length; i++) {
		var temp = allCookieArray[i].trim();
		if (temp.indexOf(name)==0)
		return temp.substring(name.length,temp.length);
    }
return "";
}

function onSignIn(googleUser) {
	document.getElementById("modalContainer").style.display = "none";
	var profile = googleUser.getBasicProfile();
	console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
	console.log('Name: ' + profile.getName());
	console.log('Image URL: ' + profile.getImageUrl());
	console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
	
	document.cookie = "signedIn=true";
	document.cookie = "_username=" + profile.getName();
	document.cookie = "_pfpURL=" + profile.getImageUrl();
	
	document.getElementById("navProfileContainer").style.display = "block";
	document.getElementById("usernameText").innerHTML = profile.getName();
	document.getElementById("pfpImg").src = profile.getImageUrl();
	document.getElementById("modalBtn").style.display = "none";
	
	document.getElementById("modalContainer").style.display = "none";
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
		console.log('User signed out.');
		document.cookie = "signedIn = ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
		document.cookie = "_pfpURL = ; expires = Thu, 01 Jan 1970 00:00:00 GMT" 
		document.cookie = "_username = ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
    });
}

function renderButton() {
	gapi.signin2.render('my-signin2', {
		'scope': 'profile email',
		'width': 220,
        'height': 45,
        'longtitle': true,
        'theme': 'light',
		'onsuccess': onSignIn,
    });
}

function cookieallow() {
	document.cookie = "cookieallow = true"
	document.getElementById("cookienotice").style.display = "none";
}
	
function main() {
	var signedIn = accessCookie("signedIn");
	if(signedIn == "") {
		document.getElementById("modalBtn").style.display = "block";
	}
	var cookieallow = accessCookie("cookieallow");
	if(cookieallow == "") {
		document.getElementById("cookienotice").style.display = "block";
	}
	var pfpURL = accessCookie("_pfpURL");
	document.getElementById("pfpImg").src = pfpURL;
	
	console.log("loaded");
}