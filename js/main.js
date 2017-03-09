$(function() {
  $(".slider").slick({
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: 1,
    speed: 1000,
    autoplay: false,
    autoplaySpeed: 1000,
	 // responsive: [
	 //    {
	 //      breakpoint: 1024,
	 //      settings: {
	 //        slidesToShow: 3,
	 //        slidesToScroll: 3,
	 //        infinite: true,
	 //        dots: false
	 //      }
	 //    },
	 //    {
	 //      breakpoint: 768,
	 //      settings: {
	 //        slidesToShow: 2,
	 //        slidesToScroll: 2
	 //      }
	 //    },
	 //    {
	 //      breakpoint: 480,
	 //      settings: {
	 //      	speed: 500,
	 //        slidesToShow: 1,
	 //        slidesToScroll: 1
	 //      }
	 //    }
	 //  ]
  });
});

jQuery(function(){
	jQuery('.nav-opener').clickClass({
		classAdd: 'nav-active',
		addToParent: true
	});
});

/*
 * Add class plugin
 */
jQuery.fn.clickClass = function(opt) {
	var options = jQuery.extend({
		classAdd: 'add-class',
		addToParent: false,
		event: 'click'
	}, opt);

	return this.each(function() {
		var classItem = jQuery(this);
		if(options.addToParent) {
			if(typeof options.addToParent === 'boolean') {
				classItem = classItem.parent();
			} else {
				classItem = classItem.parents('.' + options.addToParent);
			}
		}
		jQuery(this).bind(options.event, function(e) {
			classItem.toggleClass(options.classAdd);
			e.preventDefault();
			return false;
		});
	});
};