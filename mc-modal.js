


<script>							

			

			$('#mc_embed_signup').hide();  //hides modal
			$('.mc-dimmer').hide();

			$('.close-btn').on('click', function(){   //close for x
				closePopUp();
				return false;
			});

			$('.mc-dimmer').on('click', function(){  // close for outside click
				closePopUp();
				return false;
			});

			$('.mc-exit-secondary').on('click', function(){  //close for No Thanks text
				closePopUp();
				return false;
			});
			


			
			var cookieName = getCookie('mcPopup');

			
			window.onload = function() {  //modal on page load
			    
			    console.log('window.onload just ran');
			    console.log('cookie name ='+cookieName);
			    console.log(typeof(cookieName));
			    if(cookieName != 'true'){
					$('.mc-dimmer').delay(500).fadeIn('slow');
					$('#mc_embed_signup').delay(700).fadeIn('slow');
					console.log(cookieName);

					// set session cookie to make sure users dont get popup every page just once per browser visit
					setCookie('Session',true);



			    }

			
				$('.mc-form').ajaxChimp({
    				url: "//athletesinaction.us12.list-manage.com/subscribe/post?u=da1b6f293ed79a8295444b9e1&amp;id=95ca618ce2",
    				callback: callbackFunction
					
				});

			}



			function callbackFunction (resp) {
				// console.log(resp);                   TODO: make sure this is set to ===
			    if (resp.result === 'success') {
			        closePopUp('fast');
			        setCookie('mcPopup',true,2000);
			        console.log('cookie just set');
			    }
			}


			function closePopUp(speed){
				if(speed == "fast"){
					$('#mc_embed_signup').fadeOut('fast');
					$('.mc-dimmer').fadeOut('fast');
				}else{
					$('#mc_embed_signup').fadeOut('slow');
					$('.mc-dimmer').fadeOut('slow');
				}


			}


		
			function setCookie(cname, cvalue, exdays) {
			    var d = new Date();
			    d.setTime(d.getTime() + (exdays*24*60*60*1000));
			    var expires = "expires="+ d.toUTCString();
			    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";

			}


			function getCookie(cname) {
			    var name = cname + "=";
			    var decodedCookie = decodeURIComponent(document.cookie);
			    var ca = decodedCookie.split(';');
			    for(var i = 0; i <ca.length; i++) {
			        var c = ca[i];
			        while (c.charAt(0) == ' ') {
			            c = c.substring(1);
			        }
			        if (c.indexOf(name) == 0) {
			            return c.substring(name.length, c.length);
			        }
			    }
			    return "";
			}
			
			

			


			

		</script>