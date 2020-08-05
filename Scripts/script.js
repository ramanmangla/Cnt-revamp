// Toggle Nav on scroll
var lastScroll = 0;

$(window).scroll(function () {
  if ($(window).scrollTop() > 90) {
    $("header").addClass("header--shadow");

    if ($(window).scrollTop() < lastScroll) {
      $("header").removeClass("header--hide");
    } else {
      $("header").addClass("header--hide");
    }
  } else {
    $("header").removeClass("header--shadow");
    $("header").removeClass("header--hide");
  }

  lastScroll = $(window).scrollTop();
});

// Screen Responsive Nav and Sidebar
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

// Smooth Scroll
$(".sidebar-link").on("click", function (e) {
  var targetHref = $(this).attr("href");
  // var offset = 0;
  // offset = targetHref == '#Projects' ? -40 : 0;

  $("html, body").animate(
    {
      scrollTop: $(targetHref).offset().top - 20,
    },
    1000
  );

  e.preventDefault();
});

$(".header-nav-link").on("click", function (e) {
  var targetHref = $(this).attr("href");
  // var offset = 0;
  // offset = targetHref == '#Projects' ? -40 : 0;

  $("html, body").animate(
    {
      scrollTop: $(targetHref).offset().top - 0,
    },
    1000
  );

  e.preventDefault();
});

display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
//   justify-items: center;
//   align-items: center;
//   grid-gap: 30px;
//   row-gap: 35px;
