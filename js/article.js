var all_elements = $('.post__content').contents();
var i = 0;
for ( const elem of all_elements ) {
	if ( $(elem).is('h2') ) {
		var id = 'list-article-item-' + i;
		$(elem).attr('id', id);
		// $('.post__navigation').append('<div class="mb-0">');
		$('.post__navigation').append('<a data-id="' + id + '" href="#' + id + '" class=" post-nav-item post_nav-h2 post__nav-' + i +' list-group-item list-group-item-action"> '  + $(elem).text().substring(-1, 18) + '...</a>');
		// $(elem).clone().appendTo('.post__navigation');
		$('.post__navigation').append('</div>');
	}
	i++;
}
jQuery(function($){
$('.post__content').ScrollSpy({ target: '#list-article-content' })

window.onload = function() {
	document.querySelectorAll(".list-group-item+.list-group-item.active")[0].classList.remove("active");
  };
});