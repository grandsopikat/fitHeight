(function( $ ){

  $.fn.fitHeight = function() {

    return this.each(function(){

      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var fitHeight = function () {
        var childsHeight = 0;
      	var $childs = [];
      	$this.children().each(function() {
      		var $child = $(this);
      		if ( !$child.hasClass("unfit-height") ) {
      			childsHeight += $child.outerHeight();
      			$childs.push( $child );
      		}
      	});

      	if ( $childs.length == 1 ) {
      		$childs[0].first().css("margin-top", (($this.outerHeight() - childsHeight)/2) + "px" )
      			.css("margin-bottom", (($this.outerHeight() - childsHeight)/2) + "px" );
      	} else {
      		$childs[0].first().css("margin-top", (($this.outerHeight() - childsHeight)/2) + "px" );
        	$childs[ $childs.length -1 ].last().css("margin-bottom", (($this.outerHeight() - childsHeight)/2) + "px" );
      	}
        
      };

      // Call once to set.
      fitHeight();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', fitHeight);

    });

  };

})( jQuery );
