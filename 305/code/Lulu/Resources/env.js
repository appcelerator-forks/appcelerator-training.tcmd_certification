//Bootstrap a JavaScript context
Ti.UI.setBackgroundColor('#fff');

//set up mixin function on the global, persistent Ti.App object
if (!Ti.App.mixin) {
	//Extend an object with the properties from another or many others (implementation from Dojo)
	Ti.App.mixin = function(/*Object*/ obj, /*Object...*/ props) {
		var empty = {};
		function doMixin(/*Object*/ target, /*Object*/ source) {
			var name, s, i;
			for(name in source) {
				if (source.hasOwnProperty(name)) {
					s = source[name];
					if(!(name in target) || (target[name] !== s && (!(name in empty) || empty[name] !== s))) {
						target[name] = s;
					}
				}
			}
			return target; // Object
		};

		if(!obj) {
			obj = {};
		}
		for(var i=1, l=arguments.length; i<l; i++) {
			doMixin(obj, arguments[i]);
		}
		return obj; // Object
	};
}