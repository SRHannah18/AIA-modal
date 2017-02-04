




$('#mc_embed_signup').hide();
			$('.mc-dimmer').hide();

			$('.close-btn').on('click', function(){
				$('#mc_embed_signup').fadeOut('slow');
				$('.mc-dimmer').fadeOut('normal');
				return false;
			});

			$('.mc-dimmer').on('click', function(){
				$('#mc_embed_signup').fadeOut('normal');
				$('.mc-dimmer').fadeOut('normal');
				return false;
			});

			$('.mc-exit-secondary').on('click', function(){
				$('#mc_embed_signup').fadeOut('normal');
				$('.mc-dimmer').fadeOut('normal');
				return false;
			});


			window.onload = function() {
			   
			  $('.mc-dimmer').delay(500).fadeIn('slow');
			  $('#mc_embed_signup').delay(700).fadeIn('slow');
			  
			}
		
	

		

			$(function() {
  				$('.mc-form').ajaxChimp({
    			callback: function(response) {
      			$('.mc-form.result').text(response.msg);
    				}
  				});
			})

			

	