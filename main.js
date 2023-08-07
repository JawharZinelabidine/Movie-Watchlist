
var Movies=[{name:'Silence', Director:'Martin Scorcese',length:'161 minutes',poster:'../Images/Silence.jpg'}, {name:'Parasite', Director:'Bong Joon-ho',length:'132 minutes',poster:'../Images/Parasite.jpg'},{name:'Snowpiercer', Director:'Bong Joon-ho',length:'126 minutes minutes',poster:'../Images/Snowpiercer.jpg'},{name:'Pulp Fiction', Director:'Quentin Tarantino',length:'154 minutes',poster:'../Images/Pulp Fiction.jpg'},{name:'Goodfellas', Director:'Martin Scorcese',length:'146 minutes',poster:'../Images/Goodfellas.jpg'}]

var i=0
function slideShow() {
	var counter=0
  
   	if ( $('.center').attr('src')!==(Movies[i].poster)){   	 

 $('.center').attr('src',Movies[i].poster)
}      
 
if (i>=Movies.length-1){
	i=0
   }
   i++
}

setInterval(slideShow,2000)

$('.textContainer').hide()


$('#Parasite #display').on('click',function () {

	if ($('#Parasite .textContainer').html().length<=1){

     $('#Parasite .textContainer').show()
     $('#Parasite .textContainer').css('background','lightgoldenrodyellow')

    $('#Parasite .textContainer').html('<ul><li>Title: '+Movies[1].name+'</li><li>Director: '+Movies[1].Director+'</li><li>Length: '+Movies[1].length+'</li></ul>')
   }
    else  $('#Parasite .textContainer').html('')&&$('#Parasite .textContainer').css('background','none')
      
    
})

$('#Silence #display').on('click',function () {

		if ($('#Silence .textContainer').html().length<=1){


	 $('#Silence .textContainer').show()
     $('#Silence .textContainer').css('background','lightgoldenrodyellow')


     $('#Silence .textContainer').html('<ul><li>Title: '+Movies[0].name+'</li><li>Director: '+Movies[0].Director+'</li><li>Length: '+Movies[0].length+'</li></ul>')
    
    }
    else $('#Silence .textContainer').html('')&&$('#Silence .textContainer').css('background','none')
})

$('#Goodfellas #display').on('click',function () {

	if ($('#Goodfellas .textContainer').html().length<=1){

    $('#Goodfellas .textContainer').show()
    $('#Goodfellas .textContainer').css('background','lightgoldenrodyellow')


    $('#Goodfellas .textContainer').html('<ul><li>Title: '+Movies[4].name+'</li><li>Director: '+Movies[4].Director+'</li><li>Length: '+Movies[4].length+'</li></ul>')
    
    }
        else $('#Goodfellas .textContainer').html('')&&$('#Goodfellas .textContainer').css('background','none')

})

$('#Snowpiercer #display').on('click',function () {

    	if ($('#Snowpiercer .textContainer').html().length<=1){

     $('#Snowpiercer .textContainer').show()
     $('#Snowpiercer .textContainer').css('background','lightgoldenrodyellow')


     $('#Snowpiercer .textContainer').html('<ul><li>Title: '+Movies[2].name+'</li><li>Director: '+Movies[2].Director+'</li><li>Length: '+Movies[2].length+'</li></ul>')
    }

    else $('#Snowpiercer .textContainer').html('')&&$('#Snowpiercer .textContainer').css('background','none')

})

$('#PulpFiction #display').on('click',function () {

	   if ($('#PulpFiction .textContainer').html().length<=1){

	 $('#PulpFiction .textContainer').show()
  	
     $('#PulpFiction .textContainer').css('background','lightgoldenrodyellow')


     $('#PulpFiction .textContainer').html('<ul><li>Title: '+Movies[3].name+'</li><li>Director: '+Movies[3].Director+'</li><li>Length: '+Movies[3].length+'</li></ul>')
    

    }

    else $('#PulpFiction .textContainer').html('')&&$('#PulpFiction .textContainer').css('background','none')

})


//$('#add').on('click', function () {


//})

;



   