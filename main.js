
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

// Used setInterval here to toggle between the different posters every 2 seconds

var j=0
function addMovie () { 

  
  $('#films').append('<div id='+j+'> <img src='+Movies[j].poster+' class=poster > <div class= textContainer> </div> <button class=display >Learn more</button> <button class=remove> remove </button></div> ') 


if (j>Movies.length){
    j=0
   }
   j++
   
}



$('.add').on('click', addMovie)

//the function above will allow us to add the movies from our array of movies to the watchlist.


function displayMovie (){


  var ID= $(this).parent().attr("id")

 if ($('#'+ID+' .textContainer').html().length<=1){

     
     $('#'+ID+' .textContainer').css('background','#e3dbdb')

    $('#'+ID+' .textContainer').html('<ul><li>Title: '+Movies[ID].title+'</li><li>Director: '+Movies[ID].director+'</li><li>Length: '+Movies[ID].length+'</li></ul>')
   }
    else  $('#'+ID+' .textContainer').html('')&&$('#'+ID+' .textContainer').css('background','none')
      
    
}

 
$('#films').on('click', '.display', displayMovie)

// The function above will allow us to toggle view the description of the movies in our watchlist. It took me a while to figure out how to get the parent div's ID through clicking it's child button. Learned that I could use $('this') to solve it.

function removeMovie (){


  var ID= $(this).parent().attr("id")
  
 Movies.splice(Number(ID),1)
 $('#'+ID).hide()
      
    
}



$('#films').on('click', '.remove', removeMovie)


//The function above allows us to remove movies from our movies array as well as permanently hide them from our watchlist.

 function makeMovie (){

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

    if (movie.title.length>0&&movie.director.length>0&&movie['length'].length>0&&movie.poster.length>0)

   Movies.push(movie)
    return movie
      
}

// The factory function above allows us to add new movies to our array.

$('#addMovie').on('click', makeMovie)


function  searchMovie (){
    var search= $('#search').val()
    var id =0
        for (var t=0; t<Movies.length;t++){


     for (var key in Movies[t]){

         if(Movies[t][key].toLowerCase()===search.toLowerCase()){
             $('#films').append('<div id='+t+'> <img src='+Movies[t].poster+' class=poster > <div class= textContainer> </div> <button class=display >Learn more</button> <button class=remove> remove </button></div> ') 
             

         }               
             }    
       }   

}


$('#srch').on('click', searchMovie)
   

   // The function above iterates through our movies array to find a match for the value of what we typed in our search box. If a match is found, it will be displayed on our watchlist!


;



   