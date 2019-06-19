(function( $ ) {
  $.fn.cutstring = function() {
		this.each(function() {
			var me = $(this);
			var settings = {
				display: me.is('[data-display]') ? me.attr('data-display') : 'none',
				maxLength: me.is('[data-max-length]') ? parseInt(me.attr('data-max-length')) : Math.ceil((me.html().length * 20) / 100),
				showText: me.is('[data-show-text]') ? me.attr('data-show-text') : 'смотреть полностью &raquo;',
				hideText: me.is('[data-hide-text]') ? me.attr('data-hide-text') : '&laquo; скрыть',
			};
			if ( me.html().length > settings.maxLength ) {
				var subText1 = me.html().substring(0, settings.maxLength);
				var subText2 = me.html().substring(settings.maxLength);
				var meHellip = $('<span>'+ ( (settings.display == '') ? ' ' : '&hellip; ' ) +'</span>').addClass('cutstring-hellip');
				var meSuffix = $('<span>'+ subText2 +'</span>').addClass('cutstring-suffix').css('display', settings.display);
				var meToggle = $('<span>'+ ( (settings.display == '') ? settings.hideText : settings.showText ) +'</span>').addClass('cutstring-toggle');
				me.html(subText1).append(meSuffix).append(meHellip).append(meToggle);
				meToggle.click(function() {
					settings.display = (settings.display == '') ? 'none' : '';
					meHellip.html( (settings.display == '') ? ' ' : '&hellip; ' );
					meSuffix.css('display', settings.display);
					meToggle.html( (settings.display == '') ? settings.hideText : settings.showText );
				});
			}
		})
  };
})(jQuery);

$(function() {
	$('.cutstring').cutstring();
});