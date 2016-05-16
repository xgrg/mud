
function loadImage(){
   $('#myslideshow1').smoothSlides({
      captions: 'false',
      navigation: 'false',
      pagination: 'false',
      effect:'panUp',
      effectModifier: 1.9,
      effectDuration: 10000,
      autoPlay:'true'


   });
}
function linkChoice(option){
   $("#choice1").click(function(){
      Type(['You clicked Great !'],
            Choice({'choice4': 'You clicke !'})
          );
   });

   $("#choice2").click(function(){
      Type(['Ok bye then !']);
      html= '<div class="smoothslides" id="myslideshow1">'+
         '<img src="http://xgrg.github.io/theme/images/go.jpg" onload="loadImage()"/>'+
         '</div>';
      $("#canvas").html($("#canvas").html() + html);

   });

   $("#choice3").click(function(){
      Choice({});
      gameStart();
   });

   $("#choice4").click(function(){

      html = '<div id="title" style="opacity:0; position:relative; text-align:center; ' +
         'vertical-align:middle; top:30%; color:#F0F0F0; font-size:14pt; font-family:\'Source Sans Pro\';">' +
         '<span>Greg Productions present</span><br>' +
         '<img style="width:40%" src="http://xgrg.github.io/theme/images/go.jpg"/></div>';

      $("#canvas").html($("#canvas").html() + html);
      FadeIn("#title", 2000, FadeOut("#title", 2000, undefined, 'function'));
      Type(['Bogoss !!']);
   });
}

function gameStart(){
   Type(['Hello.', 'Welcome to this game.', 'Please select an option'],
         Choice({ 'choice1':'Great',
            'choice2':'No Thanks',
            'choice3':'Reset' })
       );
}
