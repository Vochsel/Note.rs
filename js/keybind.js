var key = {
	bind: {
		add: function(key, mods, action) {
			document.addEventListener("keydown", function(e) {
				var k = key.toUpperCase().charCodeAt(0);
				
				mods.ctrl 	= (mods.ctrl === true) 	? true : false;
				mods.shift 	= (mods.shift === true) ? true : false;
				mods.alt 	= (mods.alt === true) 	? true : false;

				if(k === e.keyCode) {

					if(	e.ctrlKey 	=== mods.ctrl && 
						e.shiftKey 	=== mods.shift && 
						e.altKey 	=== mods.alt) {
						action(e);
					}
				}
			})
		}
	}
}