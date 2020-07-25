// Responsive navigation
const sidebar = $(".sidebar");

$("#navIcon").on("click", function () {
  sidebar.addClass("sidebar--open");

  $(".header-nav-link").on("click", function () {
    sidebar.removeClass("sidebar--open");
  });

  $(window).resize(function () {
    sidebar.removeClass("sidebar--open");
  });

  $(document).mouseup(function (e) {
    if (!sidebar.is(e.target) && sidebar.has(e.target).length === 0) {
      sidebar.removeClass("sidebar--open");
    }
  });
});

$("#closeNavIcon").on("click", function () {
  sidebar.removeClass("sidebar--open");
});
