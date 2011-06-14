// define a namespace for your app
var tv = {};

// write the self-calling function that define's your app's UI
(function() {
	// define the UI namespace for your app
	tv.ui = {};
	
	// define your app's main window
	tv.ui.createApplicationWindow = function() {
		var win = Ti.UI.createWindow({
			backgroundImage:'images/gradientBackground.png'
		});
		// define the page heading
		var pageHeading = Ti.UI.createLabel({
			text: 'Custom Table',
			color:'blue',
			font:{
				fontSize:18,
				fontWeight:'bold'
			},
			top:1,
			left:10,
			height:35
		});
		win.add(pageHeading);
		
		// define your table rows here		
		/**
		  * Creates a table row
		  * @param {Object} _params   Map of row parameters: rownum, primarylabel, secondarylabel
		  * @return {Object}    Returns the row.
		  */		
		var makeRow = function(/*Object*/ _params) {
			var row = Ti.UI.createTableViewRow({
				backgroundImage:'images/middleRow.png',
				selectedBackgroundImage:'images/middleRowSelected.png',
				backgroundColor:'transparent',
				height:74
			});
			var rowImage = Ti.UI.createImageView({
				image:(_params.rownum % 2 == 0) ? 'images/imageA.png' : 'images/imageB.png',
				height:64,
				width:64,
				top:8,
				left:8
			});
			row.add(rowImage);
			if(_params.rownum == 0) {
				row.backgroundImage = 'images/topRow.png';
				row.selectedBackgroundImage = 'images/topRowSelected.png';
			} else if(_params.rownum == 'last') {
				row.backgroundImage = 'images/bottomRow.png';
				row.selectedBackgroundImage = 'images/bottomRowSelected.png';
				rowImage.image='images/imageC.png';		
			}
			var primaryLabel = Ti.UI.createLabel({
				text:_params.primarylabel,
				font:{
					fontSize:16,
					fontWeight:'bold'
				},
				top:20,
				left:75,
				height:'auto'
			});
			row.add(primaryLabel);
			var secondaryLabel = Ti.UI.createLabel({
				text:_params.secondarylabel,
				font:{
					fontSize:13,
					fontWeight:'bold'
				},
				top:42,
				left:75,
				height:'auto'
			});
			row.add(secondaryLabel);
			var notificationImage = Ti.UI.createImageView({
				image:'images/notificationBadge.png',
				height:22,
				width:25,
				top:32,
				right:10
			});
			row.add(notificationImage);
			return row;
		};
		
		
		var tbldata = [];
		for(i=0;i<8;i++) {
			tbldata.push(makeRow({
				rownum: i,
				primarylabel: 'This is row '+i,
				secondarylabel: 'Subtitle '+i
			}));
		};
		tbldata.push(makeRow({
			rownum: 'last',
			primarylabel: 'This is the last row',
			secondarylabel: 'The last subtitle'
		}));

		// define the tableview and assign its data/rows here
		var table = Ti.UI.createTableView({
			width:'90%',
			height:'85%',
			top:45,
			backgroundColor:'transparent',
			separatorStyle:Titanium.UI.iPhone.TableViewSeparatorStyle.NONE
		});
		
		table.setData(tbldata);
		win.add(table);

		// set the event listeners
		table.addEventListener('click', function(e){
			alert(e.row.children[3].image);
			if(e.row.children[3].image == 'images/notificationBadge.png') {
				e.row.children[3].image = 'images/notificationUnreadBadge.png'
			} else {
				e.row.children[3].image = 'images/notificationBadge.png'
			}
		});
		
		return win;
	}
	
})();

// create your app's main window and open it
var w = tv.ui.createApplicationWindow();
w.open();

