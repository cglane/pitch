(function () {
  $('#admin').on('click',function(e){
    $('.wrapper').addClass('display-none');
    $('.admin').removeClass('display-none');
    $('.admin').addClass('display-block');
  });
  $('#schedule').on('click',function(){
    $('.wrapper').addClass('display-none');
    $('.schedule').removeClass('display-none');
    $('.schedule').addClass('display-block');
  });
  $('#locations').on('click',function(){
    $('.wrapper').addClass('display-none');
    $('.locations').removeClass('display-none');
    $('.locations').addClass('display-block');
  });
  $('#message-board').on('click',function(){
    $('.wrapper').addClass('display-none');
    $('.message-board').removeClass('display-none');
    $('.message-board').addClass('display-block');
  });

})();
