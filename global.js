window.addEventListener("load", function(){
	var like_btn = document.getElementsByClassName("like");
	var like_count = document.getElementsByClassName("likeCount");
	debugger;

	for(i=0; i < like_btn.length; i++){
		like_btn[i].addEventListener("click", function(e){
			debugger;
			var index = parseInt(this.getAttribute("id"));
			var count = parseInt(like_count[index].innerHTML);
			debugger;
			if(this.innerHTML == "Like"){
				this.innerHTML = "Unlike";
				like_count[index].innerHTML = count + 1;
				
			} else{
				this.innerHTML = "Like";
				like_count[index].innerHTML = count - 1;
			}
		});
	};
});