$('body').on('click','.tile',function() {
  //$(this).css('width',$(this).css('width').slice(0,3) * 2);
  //$(this).css('height',$(this).css('height').slice(0,3) * 2);
  //$(this).parent().find('.tile').removeClass('big');
  //$(this).addClass('big');

});
$('#charities').isotope({
  itemSelector: '.tile',
  masonry:{
    columnWidth: 100
  }
});
