var menuBtn=document.getElementById("menuBtn")
			var sideNav=document.getElementById("sideNav")
            var menu=document.getElementById("menu")
            
            sideNav.style.right="-250px";
            menuBtn.onClick=function()
            {
            	if(sideNav.style.right=="-250px")
            	{
            		sideNav.style.right="0";
            		menu.src="Images/close.png";
            	}
            	else
            	{
            		sideNav.style.right="-250px";
            		menu.src="Images/menu.png";

            	}
            }

            // All animations will take exactly 500ms
			var scroll = new SmoothScroll('a[href*="#"]', {
							speed: 1000,
							speedAsDuration: true
			});