$(function(){
	//$('#header').load('/header.html');
	var BL = {
		initPage: function(){
			$('#header').html(this.getHeader());
		},

		getHeader: function(){
			var html = this.template(function(){     
				/*        
				<div class="clearfix bg-b cor-w header">
					<h1 class="f-l fs-14 fw-b ml-20 pt-5"><img src="../images/logo.png" /></h1>
					<ul class="f-r fs-14 pt-20 pb-20">
						<li class="f-l"><a class="cor-w mr-20">html</a></li>
						<li class="f-l"><a class="cor-w mr-20">css</a></li>
						<li class="f-l"><a class="cor-w  mr-20">javascript</a></li>
						<li class="f-l"><a class="cor-w mr-20">project</a></li>
					</ul>
				</div>    
				*/
			});
			return html;
		},

		template: function(tmpl){
			var regEx = new RegExp("/\\*([\\S\\s]*)\\*/", "mg");		
			tmpl = tmpl + "";		
			var matches = tmpl.match(regEx) || [];		
			var result = [];		
			for (var i = 0; i < matches.length; i++) {			
				result.push(matches[i].replace(regEx, "$1"));		
			}		
			return result.join("");
			}
	};

	BL.initPage();
	
});
