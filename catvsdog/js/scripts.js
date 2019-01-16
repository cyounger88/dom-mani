$(document).ready(function() {
    $("button#cat").click(function() {
        $("ul#user").prepend('<li><img src="img/cat.jpg" width="250px" /></li>');
        $("ul#webpage").prepend('<li><img src="img/dog.jpg" width="250px" /></li>');
        $('li').click(function() {
            $("ul#user").children("li").first().click(function() {
                $(this).remove();
              });
              $("ul#webpage").children("li").first().click(function() {
                $(this).remove();
              });              
        });
        
    });
  
    $("button#dog").click(function() {
      $("ul#user").prepend('<li><img src="img/dog.jpg" width="250px" /></li>');
      $("ul#webpage").prepend('<li><img src="img/cat.jpg" width="250px" /></li>');
     
    });
  });