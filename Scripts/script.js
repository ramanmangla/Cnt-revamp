// Responsive navigation
$("#navIcon").on("click", function () {
  $(".header-sidebar").addClass("header-sidebar--open");

  $(".header-nav-link").on("click", function () {
    $(".header-sidebar").removeClass("header-sidebar--open");
  });

  $(window).resize(function () {
    $(".header-sidebar").removeClass("header-sidebar--open");
  });

  $(document).mouseup(function (e) {
    var menu = $(".header-sidebar");
    if (!menu.is(e.target) && menu.has(e.target).length === 0) {
      menu.removeClass("header-sidebar--open");
    }
  });
});

$("#closeNavIcon").on("click", function () {
  $(".header-sidebar").removeClass("header-sidebar--open");
});
