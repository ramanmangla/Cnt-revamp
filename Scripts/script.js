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

// Smooth Scroll on nav click
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

$(".scroll-link").on("click", function (e) {
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


// Current active industry on customers page
var indTargetID = $("#firstItem");

// Industry Menu navigation
$(".customergrid-menu nav a").on("click", function (e) {
  e.preventDefault();

  $(indTargetID).removeClass("activeIndustry");

  indTargetID = $(this);

  $(indTargetID).addClass("activeIndustry");

  // Ensure job link is within nav and not on edge
  $(".customergrid-menu nav").animate(
    {
      scrollLeft:
        $(".customergrid-menu nav").scrollLeft() + indTargetID.position().left,
    },
    600
  );

  $(".customergrid").animate(
    {
      scrollLeft:
        $(".customergrid").scrollLeft() +
        $(indTargetID.attr("href")).position().left,
    },
    600
  );
});

// Ensure the same experience/nav link is in view on resize
$(window).resize(function () {
  var container = $(".customergrid");

  container.scrollLeft(
    container.scrollLeft() + $(indTargetID.attr("href")).position().left
  );

  var industryNav = $(".customergrid-menu nav");
  
  industryNav.scrollLeft(industryNav.scrollLeft() + indTargetID.position().left);
});


// Scroll Buttons for Experiences Nav
$("#menuLeftButton").on("click", function (e) {
  var expNav = $(".customergrid-menu nav");

  expNav.animate(
    {
      scrollLeft: expNav.scrollLeft() - (3 * expNav.width()) / 5,
    },
    450
  );
});

$("#menuRightButton").on("click", function (e) {
  var expNav = $(".customergrid-menu nav");

  expNav.animate(
    {
      scrollLeft: expNav.scrollLeft() + (3 * expNav.width()) / 5,
    },
    450
  );
});

// Dynamic active nav and sidebar link based on scroll position
$(window).scroll(function() {
  var windowScrollPos = $(window).scrollTop();
  var sectionList = $("section");

  sectionList.each(function() {
    var targetID = $(this).attr("id");
    var sectionTop =  $(this).offset().top - 25;

    if (sectionTop < windowScrollPos && sectionTop + $(this).height() > windowScrollPos) {
      $(".header-nav a[href='#" + targetID +"']").addClass("activeNavLink");
      $(".sidebar-container a[href='#" + targetID +"']").addClass("activeNavLink");
    } else {
      $(".header-nav a[href='#" + targetID +"']").removeClass("activeNavLink");
      $(".sidebar-container a[href='#" + targetID +"']").removeClass("activeNavLink");
    }
  });
});