var forismaticAPI = 'http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?';
$(document).ready(function() {
  var quote;
  var author;
    $('#getQuote').on("click", function() {
        $(".resultPage").removeClass('hidden');
        $.getJSON(forismaticAPI, function(data) {
            $('#quoteArea').empty();
            $('#quoteArea').
            append('<blockquote>' +
              data.quoteText + 
                '</blockquote>' + 
                  '<p id="author"> —  ' +
                     data.quoteAuthor +
                  '</p>');

            $('#quoteArea').show();
            quote = data.quoteText;
            author = data.quoteAuthor;
        });
    });

    $(".btnTweet").click(function () {
    var width  = 575,
        height = 400,
        left   = ($(window).width()  - width)  / 2,
        top    = ($(window).height() - height) / 2,
        url    = 'http://twitter.com/share?text=' + quote + " - " + author,
        opts   = 'status=1' +
                 ',width='  + width  +
                 ',height=' + height +
                 ',top='    + top    +
                 ',left='   + left;
    
      window.open(url, 'twitter', opts);
  });

});