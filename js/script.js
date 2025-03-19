const grid=$(".contents").isotope();

$(".btns>li").click(function(){
  $(this).addClass("active");
  $(this).siblings().removeClass("active");

  /*필터기능*/
  let a=$(this).attr('data-filter') //attr: 속성을 넣거나 불러줌
  $(".contents").isotope({filter:a})
})

$(".fancybox").fancybox();