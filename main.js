$(window).scroll(function () {
  // event fixed navbar when scroll
  var breakpointFixed = 195; // giá trị khi sự kiện fixed navbar bắt đầu
  var currentScrollTop = $(this).scrollTop(); //vị trí (giá trị) hiện tại của scroll(trục Oy)
  if (currentScrollTop > breakpointFixed) {
    $("nav.navbar").addClass("navbarFixed"); // thêm classList navbarFixed vào navbar
    $(".back-to-top-button").removeClass("d-none"); // xóa classList d-none vào button back-to-top
  } else {
    $("nav.navbar").removeClass("navbarFixed"); // xóa classList navbarFixed vào navbar
    $(".back-to-top-button").addClass("d-none"); // xóa classList d-none vào button back-to-top
  }
});
// event back-to-top button click
$(".back-to-top-button").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 200);
});
