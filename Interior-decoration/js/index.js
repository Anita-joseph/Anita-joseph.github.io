var nav = document.querySelector("#nav"),
navToggle = document.querySelector(".menu-icon");

			navToggle.addEventListener("click", function(e) 
			{
				{
					nav.className = "open";
				}
				e.preventDefault();
			},false);
			nav.addEventListener("click", function(e){
				{
					nav.className="close";
				}
				e.preventDefault();
			}, false);
