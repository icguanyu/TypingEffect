function typeing(element,speed){
  var text = $(element).text();
	$(element).text(''); //清空文字
	var i = 0;
	var timer = setInterval(function() {
    if (i < text.length) {
		  $(element).append(text.charAt(i)); //關鍵！charAt把文字從第0個開始丟回去
      i++;
		}else{
      clearInterval(timer);
    }
  }, speed);
}

var speed = 75
var delay = $('h1').text().length * 150 +speed
typeing($('h1'), 150);

setTimeout(function(){
  typeing($('p'),75)
  $('p').css({'display': 'block'})
},delay);