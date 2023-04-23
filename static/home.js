let enter_btn=document.getElementsByClassName("enter_btn")[0];
enter_btn.addEventListener("click",(event)=>{
fetch("http://localhost/home")
.then(function (response) {
	// The API call was successful!
	return response.text();
}).then(function (html) {
	document.getElementsByTagName('body')[0].innerHTML=html;
	console.log(html);
}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});
}
)
