// Waits until the page is fully loaded
$(document).ready(function() {
	function adjustFooterSpacing() {
	  const footer = $('#site-footer');
	  const content = $('#site-content');
  
	  if (footer.length && content.length) {
		const footerHeight = footer.outerHeight();
		content.css('margin-bottom', footerHeight + 50);
	  }
	}
  
	adjustFooterSpacing(); // runs when the page loads
	$(window).on('resize', adjustFooterSpacing); // runs when the window is resized
  });
  