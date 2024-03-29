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
// var indTargetID = $("#firstItem");

// // Industry Menu navigation
// $(".customergrid-menu nav a").on("click", function (e) {
//   e.preventDefault();

//   $(indTargetID).removeClass("activeIndustry");

//   indTargetID = $(this);

//   $(indTargetID).addClass("activeIndustry");

//   // Ensure job link is within nav and not on edge
//   $(".customergrid-menu nav").animate(
//     {
//       scrollLeft:
//         $(".customergrid-menu nav").scrollLeft() + indTargetID.position().left,
//     },
//     600
//   );

//   $(".customergrid").animate(
//     {
//       scrollLeft:
//         $(".customergrid").scrollLeft() +
//         $(indTargetID.attr("href")).position().left,
//     },
//     600
//   );
// });

// // Ensure the same experience/nav link is in view on resize
// $(window).resize(function () {
//   var container = $(".customergrid");

//   container.scrollLeft(
//     container.scrollLeft() + $(indTargetID.attr("href")).position().left
//   );

//   var industryNav = $(".customergrid-menu nav");
  
//   industryNav.scrollLeft(industryNav.scrollLeft() + indTargetID.position().left);
// });


// // Scroll Buttons for Experiences Nav
// $("#menuLeftButton").on("click", function (e) {
//   var expNav = $(".customergrid-menu nav");

//   expNav.animate(
//     {
//       scrollLeft: expNav.scrollLeft() - (3 * expNav.width()) / 5,
//     },
//     450
//   );
// });

// $("#menuRightButton").on("click", function (e) {
//   var expNav = $(".customergrid-menu nav");

//   expNav.animate(
//     {
//       scrollLeft: expNav.scrollLeft() + (3 * expNav.width()) / 5,
//     },
//     450
//   );
// });

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

// $(".box-title").click(function() {
//   $(this).siblings().toggleClass("show-box-desc");
// });

var currentJob = null;

$(".box-title").click(function() {
  if (currentJob != null) {
    currentJob.siblings().removeClass("show-box-desc");
    
    if (!currentJob.is($(this))) {
      $(this).siblings().addClass("show-box-desc");
      currentJob = $(this);
    } else {
      currentJob = null;
    }
  } else {
    $(this).siblings().addClass("show-box-desc");
    currentJob = $(this);
  }
});

// Fade In on scroll effect
/* Every time the window is scrolled ... */
$(window).scroll(function(){
  /* Check the location of each desired element */
  $('.hide-me-for-fade').each( function(i){
    var objectTop = $(this).offset().top + 50;
    var windowBottom = $(window).scrollTop() + $(window).height();
    
    /* If the object is completely visible in the window, fade it it */
    if(windowBottom > objectTop){
      $(this).animate({'opacity':'1'}, 500);     
    }
  }); 
});

$(document).ready(function() {

  // Update Copyright year automatically
  $("#copyright-text p").html("© " + new Date().getFullYear() +
    " Computers Network & Telecom India Pvt. Ltd.");

  // Scroll to section link when navigating from another page
  // Instead of straight away jumping to it or not doing anything
  // Fixes issue with invisible content due to Fade In on scroll effect
  // Eg. Careers to Partners section on home page
  var target = window.location.hash;
  target = target.replace('#', '');

  // Delete hash so the page won't scroll to it
  window.location.hash = "";

  if (target.length > 0) {
    $("html, body").animate(
      {
        scrollTop: $("#" + target).offset().top - 0,
      },
      1000
    );
  }
});

// Stop browser from refreshing at current scroll position
history.scrollRestoration = 'manual';