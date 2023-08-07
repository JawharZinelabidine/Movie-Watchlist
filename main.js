
var Movies=[{title:'Silence', director:'Martin Scorcese',length:'161 minutes',poster:'../Images/Silence.jpg'}, {title:'Parasite', director:'Bong Joon-ho',length:'132 minutes',poster:'../Images/Parasite.jpg'},{title:'Snowpiercer', director:'Bong Joon-ho',length:'126 minutes minutes',poster:'../Images/Snowpiercer.jpg'},{title:'Pulp Fiction', director:'Quentin Tarantino',length:'154 minutes',poster:'../Images/Pulp-Fiction.jpg'},{title:'Goodfellas', director:'Martin Scorcese',length:'146 minutes',poster:'../Images/Goodfellas.jpg'}]

var i=0
function slideShow() {
  
   	if ( $('.center').attr('src')!==(Movies[i].poster)){   	 

 $('.center').attr('src',Movies[i].poster)
}      
 
if (i>=Movies.length-1){
	i=0
   }
   i++
}

setInterval(slideShow,2000)



var j=0
function addMovie () {

   

  
  $('#films').append('<div id='+j+'> <img src='+Movies[j].poster+' class=poster > <div class= textContainer> </div> <button class=display >Learn more</button> <button class=remove> remove </button></div> ') 


if (j>Movies.length){
    j=0
   }
   j++
   
}



$('.add').on('click', addMovie)




 
$('#films').on('click', '.display', function (){


  var ID= $(this).parent().attr("id")

 if ($('#'+ID+' .textContainer').html().length<=1){

     
     $('#'+ID+' .textContainer').css('background','lightgoldenrodyellow')

    $('#'+ID+' .textContainer').html('<ul><li>Title: '+Movies[ID].title+'</li><li>Director: '+Movies[ID].director+'</li><li>Length: '+Movies[ID].length+'</li></ul>')
   }
    else  $('#'+ID+' .textContainer').html('')&&$('#'+ID+' .textContainer').css('background','none')
      
    
})


$('#films').on('click', '.remove', function (){


  var ID= $(this).parent().attr("id")
  
 Movies.splice(Number(ID),1)
 $('#'+ID).hide()
      
    
})



$('#addMovie').on('click', function(){

    var ttl= $('#title').val()
    var dir= $('#director').val()
    var len= $('#length').val()
    var pstr= $('#poster').val()
    
    var movie= {
     
      title: ttl,
      director:dir,
      length:len,
      poster:pstr

    }

   Movies.push(movie)
    return movie


      
})


;



   