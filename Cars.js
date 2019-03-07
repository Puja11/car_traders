
		
        var list=[ 
              {"year":"2014","image":"cars\\images1.jpg","Manufacture":"HONDA","price":"2 Lakhs"},
              {"year":"2012","image":"cars\\images2.jpg","Manufacture":"MARUTI","price":"2 Lakhs"},
              {"year":"2012","image":"cars\\images3.jpg","Manufacture":"SUZUKI","price":"4 Lakhs"},
              {"year":"2016","image":"cars\\images4.jpg","Manufacture":"BMW","price":"5 Lakhs"},
              {"year":"2013","image":"cars\\images5.jpg","Manufacture":"AUDI","price":"6 Lakhs"}];


        $(document).ready(function(){
	        $("#year").change(function(){
	        	filterBySelection();
	        });

	        $("#price").change(function(){
	        	filterBySelection();
	        });

	        $("#manufacture").change(function(){
	        	filterBySelection();
	        });

	        display(list);
	      });


        function filterBySelection(){
        	 var price=$("#price").val();
        	 var year=$("#year").val();
        	 var manufacture=$("#manufacture").val();
        	 var modifiedText=$.grep(list,function(obj,index){
        	 	 	return ((price!=null && price!="" && obj.price==price )||(price==null||price==""))?((year!=null && year!="" && obj.year==year)||(year==null||year==""))?((manufacture!=null && manufacture!="" && obj.Manufacture==manufacture)||(manufacture==null||manufacture==""))?true:false:false:false;
        	 	
        	 });
        	display(modifiedText);
        }

        function display(text2){
              document.getElementById("holder").innerHTML="";
              $.each(text2, function(i, object){
                    var content = '<div class="col-md-4 col-sm-6 col-xs-12 card" >'
                          + '<div class="w3-card-4"><header class="w3-container w3-blue" >'
                          + '<h3>'+object.Manufacture+'</h3></header>'
                          + '<div class="w3-container"><p><img src="'
                          + object.image+'"style="width:100%;"></img></p></div>'
                          + '<footer class="w3-container w3-blue footer"  ><span id = "card_price" ></h4>Price :'+object.price+'</h4></span>'
                          + '<span id = "card_year" ></h4>Year :'+object.year+'</h4><span></footer></div>'
                    $("#holder").append(content);
              });
        }
		
