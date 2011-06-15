//App Namespace
var ct = {};

(function() {
	
	//UI 
	ct.ui = {};
	
	ct.ui.createCustomTab = function() {
		var tg = Ti.UI.createTabGroup();
		
		var win = Ti.UI.createWindow({
			width: 320,
			height: 60,
			bottom: 0
		});
		
		var bkgImg = Ti.UI.createImageView({
			image: 'images/tabBkg.png',
			width: 'auto',
			height: 'auto', 
			left: -323
		})
		win.add(bkgImg);

		var makeTab = function(/*Object*/ obj) {
			var tt = Ti.UI.createTab({
				title: obj.title,
				window: obj.window
			})
			tg.addTab(tt);
		}
		
		makeTab({
			loc: 50,
			title: 'today',
			window: ct.ui.createMainWindow()
		});
		
		makeTab({
			loc: 50,
			title: 'another',
			window: ct.ui.createSecondaryWindow()
		});
		
		tg.open();
		
		return win;
	}
	
	ct.ui.createMainWindow = function() {
		var win = Ti.UI.createWindow({
			backgroundColor: '#ddd'
		})
		
		return win;
	}
	
	
	ct.ui.createSecondaryWindow = function() {
		var win = Ti.UI.createWindow({
			backgroundColor: '#ccc'
		})
		
		return win;
	}
	
	
})();

var w = ct.ui.createCustomTab();
w.open();