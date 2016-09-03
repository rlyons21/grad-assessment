window.addEventListener("load", function(){
	var like_btn = document.getElementsByClassName("like");

	for(i=0; i < like_btn.length; i++){
		like_btn[i].addEventListener("click", function(){
			if(this.innerHTML == "Like"){
				this.innerHTML = "Unlike";
			} else{
				this.innerHTML = "Like";
			}
		});
	};
});