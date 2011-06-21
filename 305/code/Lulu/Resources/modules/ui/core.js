var mixin = Ti.App.mixin;
var osname = Ti.Platform.osname;

function platform(androidValue,iphoneValue) {
	return osname === 'android' ? androidValue : iphoneValue;
}

function label(text,options) {
	return Ti.UI.createLabel(mixin({
		text:text,
		color:'#000',
		height:'auto',
		width:'auto',
		font: {
			fontSize: '18dip',
			fontFamily: platform('Droid Sans', 'Helvetica Neue')
		}
	},options||{}));
}

function headerLabel(text,options) {
	return Ti.UI.createLabel(mixin({
		text:text,
		color:'#fff',
		height:'auto',
		width:'auto',
		font: {
			fontSize: '28dip',
			fontFamily: platform('Lobster','Lobster 1.4')
		}
	},options||{}));
}

function detailLabel(text,options) {
	return Ti.UI.createLabel(mixin({
		text:text,
		color:'#000',
		height:'auto',
		width:'auto',
		font: {
			fontSize: '18dip',
			fontFamily: platform('Minion','Minion Pro')
		}
	},options||{}));
}

//most consistent path resolution per platform, regardless of context
function imagePath(assetName) {
	return (platform('/images/', Ti.Filesystem.resourcesDirectory +'/images/'))+assetName+'.png';
}

function image(assetName, options) {
	return Ti.UI.createImageView(mixin({
		image:imagePath(assetName)
	},options||{}));
}

function window(title, url, options) {
	var w = Ti.UI.createWindow(mixin({
		url:url+'.js',
		backgroundImage:imagePath('bkg'),
		navBarHidden:true
	},options||{}));
	
	var header = Ti.UI.createView({
		top:0,
		height:'50dip',
		width:'100%',
		backgroundImage:imagePath('barImage')
	});
	w.add(header);
	
	header.add(headerLabel(title, {right:'70dip'}));
	
	return w;
}

function tabGroup() {
	var tg = Ti.UI.createTabGroup();

	for(var i=0, l=arguments.length; i<l; i++) {
		var obj = arguments[i];
		tg.addTab(Ti.UI.createTab({
			title:obj.title,
			icon:'images/'+obj.icon+'.png', //one-off for handling paths from the root context
			window:window(obj.title,'windows/'+obj.window)
		}));
	}

	return tg;
}

//Public API
exports.imagePath = imagePath;
exports.image = image;
exports.label = label;
exports.headerLabel = headerLabel;
exports.detailLabel = detailLabel;
exports.window = window;
exports.tabGroup = tabGroup;

exports.W = (Ti.UI.currentWindow) ? Ti.UI.currentWindow : null;
exports.T = (Ti.UI.currentTab) ? Ti.UI.currentWindow : null;