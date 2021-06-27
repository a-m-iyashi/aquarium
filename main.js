$(function(){
  // #で始まる出発地点をクリックした場合に処理を実行
  $('a[href^="#"]').click(function() {
    var href= $(this).attr("href");  // 出発地点の値を取得
    var target = $(href == "#" || href == "" ? 'html' : href);  // 到着地点を取得
    var position = target.offset().top;  // 到着地点を数値で取得
    $("html, body").animate({scrollTop:position}, 600, "swing");  // スムーススクロール
    return false;
  });
  $('.toggle-btn').click(function() {
    $('.bar').toggleClass('open');
    $('.menu').toggleClass('open');
    $('.v-title').removeClass('open');
    $('.v-text').removeClass('open');
  });
  $('.v-title').click(function() {
    $('.v-title').toggleClass('open');
    $('.v-text').toggleClass('open');
  });
  $('.menu').click(function() {
    $('.bar').removeClass('open');
    $('.menu').removeClass('open');
  });
  $('.menu-btn').click(function() {
    $('.bar').removeClass('open');
    $('.menu').removeClass('open');
  });
  $(window).scroll(function() {  //スクロール時のイベント
    $('.v-title').each(function() {
      let scroll = $(window).scrollTop();
      let target = $(other).offset().top;
      let windowHeight = $(window).height();
      if (scroll > target - windowHeight) {
        $('.v-title').css('opacity','1');
        $('.v-title').css('transform','translateY(0)');
      }
      if (scroll < target - windowHeight){
        $('.v-title').css('opacity','0');
        $('.v-title').css('transform','translateY(30)');
      }
    });
  });
  $(window).scroll(function() {  //スクロール時のイベント
    $('.v-title').each(function() {
      let scroll = $(window).scrollTop();
      let overview = $(map).offset().top;
      let windowHeight = $(window).height();
      if (scroll > overview - windowHeight) {
        $('.v-title').css('opacity','0');
        $('.v-title').css('transform','translateY(30)');
      }
      if (scroll < overview - windowHeight) {
        $('.v-title').css('opacity','1');
        $('.v-title').css('transform','translateY(0)');
      }
      
    });
  });
});
