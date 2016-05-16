function type(options){
      console.log("type");
      console.log(options);
      var lines = options.lines;
      var then = function(){};
      if (options.then != undefined){
         then = options.then;
      }
      var erase = options.erase != undefined ? options.erase : false;
      var typeSpeed = options.typeSpeed != undefined ? options.typeSpeed : 0;
      var backDelay = options.backDelay != undefined ? options.backDelay : 0;

      if (erase){
         $("#content").typed('reset');
         $("#content").typed({
            strings: lines,
            typeSpeed: typeSpeed,
            backDelay: backDelay,
            callback: then
         });
      }
      else {
         oldtext = $("#content").html();
         newlines = oldtext.split('<br>');
         nOldLines = newlines.length;

         for (var i=0;i<lines.length;i++){
            newlines.push(lines[i]);
         }
         console.log('alllines:' + newlines);
         var html = '';
         for (var i = 0 ; i < nOldLines - 1 ; i++){
            html = html + newlines[i] + '<br>';
         }
         html = html + newlines[nOldLines - 1];
         console.log('html: ' + html);
         console.log(nOldLines);

         $("#content").typed('reset');
         $("#content").typed({
            strings: newlines,
            typeSpeed: typeSpeed,
            backDelay: backDelay,
            arrayPos: nOldLines,
            previousLines: oldtext.split('<br>'),
            callback:then
         });
      }
}

function write(options){
   $("#content").text(options.text);
}



function choice(arg){
   var dest = '#canvas';
   if (arg.dest != undefined){
      dest = arg.dest;
   }
   // display choice in the upper div
   if (dest == '#canvas'){

      // building the table
      var html = '<table id="choice" style="opacity:0">';
      var nOpt = Object.keys(arg.options).length;
      var nRows = nOpt / 3;
      var n = 0;
      for (var i=0; i < nRows;i++){
         html = html + '<tr>';
         for (var j=0; j <3;j++){
            if (n == nOpt) {break;}
            k = Object.keys(arg.options)[n];
            html = html + '<td id="' + k + '">' + arg.options[k] + '</td>';
            n++;
         }
         html = html + '</tr>';
      }
      html = html + '</table>';

      var nChildrenCanvas = $("#canvas table").length;
      if (nChildrenCanvas != 0){
         $("#canvas table").animate({opacity:0},
               function(){
                  $("#canvas").html(html);
                  $("#canvas table").animate({opacity:1});
                  animateTable();
                  linkChoice();
               });
      }
      else{
         $("#canvas").html(html);
         $("#canvas table").animate({
            opacity:1});
         animateTable();
         linkChoice();
      }
   }

   // display choice in the lower div
   else if (dest == '#content'){
      var opt = [];
      for (var i=0;i<Object.keys(arg.options).length;i++){
         k = Object.keys(arg.options)[i];
         opt.push('<a id="' + k + '">' + arg.options[k] + '</a>');
      }
      type({lines: opt,
         erase:false,
      then: function(){ linkChoice()}});
   }
}


function animateTable(){
   $('td').animate({backgroundColor: "#F0F0F0"});

   $('td').hover(
         function() {
            $(this).animate({
               color: "white",
               backgroundColor: "#555555"
            });
         },
         function() {
            $(this).animate({
               color:"black",
               backgroundColor: "#F0F0F0"
            });
         });
}

function Choice(opt){
   return function(){
      choice({ options:  opt,
         dest: '#content'
      })
   };
}

function Type(lines, then, returnAs){
   var rAs = 'call';
   if (returnAs != undefined) rAs = returnAs;
   if (rAs == 'call'){
      type({lines : lines,
         erase:true,
         then : then
      });
   }
   else if (rAs == 'function'){
      return function(){
         type({lines : lines,
            erase:true,
            then : then
         });
      }
   }

}

function Fade(id, duration, then, opacity){
      var dur = 2000;
      if (duration != undefined) dur = duration;
      //var id = $("#canvas div").last().attr("id");
      console.log(then);
      $("div "+id).animate({opacity:opacity},
            duration, "swing", then );
}

function FadeIn(id, duration, then, returnAs){
   var rAs = 'call';
   if (returnAs != undefined) rAs = returnAs;
   if (rAs == 'call'){
      Fade(id, duration, then, 1);
   }
   else if (rAs == 'function'){
      return function(){ Fade(id, duration, then, 1);};
   }

}
function FadeOut(id, duration, then, returnAs){
   console.log("fadeout");
   var rAs = 'call';
   if (returnAs != undefined) rAs = returnAs;
   if (rAs == 'call'){
     Fade(id, duration, then, 0);
   }
   else if (rAs == 'function'){
      return function(){
          Fade(id, duration, then, 0);
      };
   }
}

