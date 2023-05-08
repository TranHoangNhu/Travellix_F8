// hiệu ứng navbar dính lên thanh trình duyệt và nút backtotop
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
//kết thúc hiệu ứng navbar dính lên thanh trình duyệt và nút backtotop

//ngăn chặn việc gửi request form lên server
document.querySelector("button[type=submit]").addEventListener("click", (e) => {
  e.preventDefault();
});
//kết thúc ngăn chặn việc gửi request form lên server

// phần code hiệu ứng cho navbar navigator (lên xuống)
var childNavbar = document.querySelectorAll(".navbar_navigator ul li");
childNavbar.forEach(function (item) {
  item.addEventListener("mouseenter", function () {
    item.animate(
      [{ transform: "translateY(0)" }, { transform: "translateY(-5px)" }],
      {
        duration: 500,
        easing: "ease-in-out",
        fill: "forwards",
      }
    );
  });

  item.addEventListener("mouseleave", function () {
    item.animate(
      [{ transform: "translateY(-5px)" }, { transform: "translateY(0)" }],
      {
        duration: 500,
        easing: "ease-in-out",
        fill: "forwards",
      }
    );
  });
});

//kết thúc phần code hiệu ứng cho navbar navigator (lên xuống)
