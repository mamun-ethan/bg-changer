//Element selected 
var button = document.querySelector('button')
var body = document.querySelector('body')


//Defauld background color added
body.style.backgroundColor = '#222'
//colors array
 var colors = ['yellow','green','orange','teal','prink','skyblue','gold']


  
 button.addEventListener('click',function(){
     //random number genarator like 1,2,100,105 etc
      var colorIndex = parseInt(Math.random() * colors.length)

 
   
     body.style.backgroundColor = colors[colorIndex]
     button.style.outline = colors[colorIndex]

      })