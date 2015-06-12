/*------------------------------------------------------------------
 Project:    Highland
 Author:     Yevgeny S.
 URL:        http://simpleqode.com/
 https://twitter.com/YevSim
 Version:    1.5.0
 Created:        11/03/2014
 Last change:    20/02/2015
 -------------------------------------------------------------------*/

// Sign in & sing out nav bar demo. To be removed on an operational website
// ========================================================================
$('#sign-in').on('click', function () {
	$("#sign-up").toggleClass('show hidden');
	$("#sign-in").toggleClass('show hidden');
	$("#cogs-menu").toggleClass('show hidden animated fadeIn');
	$("#profile-menu").toggleClass('show hidden animated fadeIn');
	return false;
});
$('#sign-out').on('click', function () {
	$("#sign-up").toggleClass('show hidden');
	$("#sign-in").toggleClass('show hidden');
	$("#cogs-menu").toggleClass('show hidden animated fadeIn');
	$("#profile-menu").toggleClass('show hidden animated fadeIn');
	return false;
});

// Search box toggle
// =================
$('#search-btn').on('click', function () {
	$("#search-icon").toggleClass('fa-search fa-times margin-2');
	$("#search-box").toggleClass('show hidden animated fadeInUp');
	return false;
});

// Smooth scrolling for UI elements page
// =====================================
$(document).ready(function () {
	$('a[href*=#buttons],a[href*=#panels], a[href*=#info-boards], a[href*=#navs], a[href*=#alerts], a[href*=#thumbnails], a[href*=#social], a[href*=#section-header],a[href*=#page-tip], a[href*=#block-header], a[href*=#tags]').bind("click", function (e) {
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 1000);
		e.preventDefault();
	});
	return false;
});

// 404 error page smile
// ====================
$('#search-404').on('focus', function () {
	$("#smile").removeClass("fa-meh-o flipInX");
	$("#smile").addClass("fa-smile-o flipInY");
});

$('#search-404').on('blur', function () {
	$("#smile").removeClass("fa-smile-o flipInY");
	$("#smile").addClass("fa-meh-o flipInX");
});
// Sign up popovers
// ================
$(function () {
	$('#exampleInputName1').popover();
});

$(function () {
	$('#exampleInputUsername1').popover();
});

$(function () {
	$('#exampleInputEmail1').popover();
});

$(function () {
	$('#exampleInputPassword1').popover();
});

$(function () {
	$('#exampleInputPassword2').popover();
});

// Profile - Status Update 
// =======================

$('#update-status').on('click', function () {
	$(".user-status > p").toggleClass("show hidden");
	$(".user-status > form").toggleClass("hidden show");
	return false;
});

$('.user-status > form > button').on('click', function () {
	$(".user-status > p").toggleClass("show hidden");
	$(".user-status > form").toggleClass("hidden show");
	return false;
});

// Add dismissable buttons
// =======================

$(document).ready(function () {
	$('.alert-dismissable').prepend('<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>');
	$('.services__item').hover(
		function() {
			$('.services__item.current').toggleClass('active');
		},
		function() {
			$('.services__item.current').toggleClass('active');
		}
	).click(function() {
			$(this).find('a').click();
	});
	$('.services__item.current').each(function() {
		$(this).click(function(){return false;});
	});
});