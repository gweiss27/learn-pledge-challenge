$.ajax({
  url: 'https://api-sandbox.justgiving.com/0f938d22/v1/charity/search?categoryId=202',
  method: 'GET',
  headers: {
     Accept : "application/json"
  },
  success: function(res){
    console.log('API RES',res);
    $.each(res.charitySearchResults, function (index, el) {
      $('#charities').append('<img id="'+ el.charityId +'" class="tile" src="'+ el.logoUrl +'"/>');
    });
  }
});

$('body').on('click','.tile',function() {
  //$(this).css('width',$(this).css('width').slice(0,3) * 2);
  //$(this).css('height',$(this).css('height').slice(0,3) * 2);
  //$(this).parent().find('.tile').removeClass('big');
  //$(this).addClass('big');

});
$('#charities').isotope({
  itemSelector: '.tile',
  layoutMode: 'fitRows'
});
