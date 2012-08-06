/*
	Localization strings file. To translate, copy the entire "en-US" branch, paste in as new member of the object, 
	set its name to be the two-letter language code, and translate each string.
	As shown, strings can include simple HTML.
*/
String.toLocaleString({
	"en-US": {
		"%l_labname": "Lab - API Deep Dive - TableView",
		"%l_mission": "<img src='https://wiki.appcelerator.org/download/attachments/14090413/Screenshot_12.png?version=1&modificationDate=1308316394000' style='height:300px;float:right;margin-top:-40px;margin-bottom: 10px;'><img src='https://wiki.appcelerator.org/download/attachments/14090413/Screenshot_13.png?version=1&modificationDate=1308316403000' style='height:300px;float:right;margin-top:-40px;margin-bottom: 10px;'><strong>Mission: </strong>In this lab assignment, you will implement a customized TableView.",
		"%l_specification": "<strong>Specification: </strong>Download the starting point code linked to in Step 1 below. The archive includes the necessary graphics. In this lab assignment, you will create a custom table that doesn’t fill the entire viewport. The table will contain customized rows with background images that differ based on the row’s location within the table. Each row will contain two images and two labels. When you tap a row, an event listener will determine if either of the images was the object that received the tap. If so, that image will be swapped with an alternate graphic.",
		
		"%l_labstep1": "1. Download the starting point files from <a href='http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/320.zip'>http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/320.zip</a>. Extract the archive, then import it into Studio as an existing Titanium project.",
		"%l_labstepexplanation1": "",

		"%l_labstep2": "2. Following the comments included in the starting app.js file, add these elements to the app:<br/><ul><li>Set the window background to images/gradientBackground.png</li><li>Add a page heading of “Custom Table” with a dark blue, 18 px, bold font that is positioned at the top-left of the window</li><li>Define a table that is positioned below the label and which is 90% of the width of the screen and 85% of its height. Set the table’s background color to transparent and for iOS, set the separator style to NONE.</li></ul>",
		"%l_labstepexplanation2": "",

		"%l_labstep3": "3. Write a CommonJS module following the specifications included in the comments within the code.<br/><ul><li>Your module should instantiate and return a new table row object.</li><li>Your module's constructor should accept an object that will be used to pass in four values: the row number, primary label text, secondary label text, and a custom “which image” indicator string. Possible values for the row number parameter will be an integer or the string ‘last’. Possible values for the myImage string property will be a, b, c, blue, and red. You’ll use this myImage property to determine which element in the row is tapped and to swap images accordingly.</li><li>Each row should contain two images:<ul><li>Left image: if an even-numbered row = ‘images/imageA.png’ otherwise ‘images/imageB.png’. It should have a custom property named myImage that is set equal to the myImage parameter passed to your constructor function at run time.</li><li>Right image: use ‘images/notificationBadge.png’ and set its custom myImage property equal to ‘blue’</li></ul></li><li>Each row should contain two labels:<ul><li>Primary label: use a bold, 16 px font positioned to the right of the left image with its text set equal to the primary label parameter passed to the constructor at run time. Be sure to set a height for the label.</li><li>Secondary label: use a bold, 13 px font positioned below the primary label with its text set equal to the secondary label parameter passed to the constructor at run time. Be sure to set a height for the label.</li></ul></li><li>Each row’s background image should be set to ‘images/middleRow.png’ and the selected background image to ‘images/middleRowSelected.png’. If the row number parameter is 0, set the row’s background image to ‘images/topRow.png’ and selected background image to ‘images/topRowSelected.png’. If the row number parameter equals ‘last’ then use ‘images/bottomRow.png’ and ‘images/bottomRowSelected.png’ for the background images and use ‘images/imageC.png’ for the left image.</li></ul>",
		"%l_labstepexplanation3": "",

		"%l_labstep4": "4. Require in your custom row module. Then, use a for-loop to create an array of 8 rows for your table, instantiating a new custom row object in each iteration of the loop. Set the primary label to 'This is row' plus the row-number indicator. Set the secondary label to 'Subtitle' and the row-number indicator. Set the myImage value to either ‘a’ or ‘b’ depending on whether your loop counter is odd or even. (Hint: use the modulus operator, %, to calculate this odd/even value.) Push one additional custom row into the rows array. This row should pass these values:<br/><ul><li>row number: ‘last’</li><li>primary label: ‘This is the last row’</li><li>secondary label: ‘The last subtitle’</li><li>myImage: ‘c’</li></ul>",
		"%l_labstepexplanation4": "",

		"%l_labstep5": "5. Add a click event listener to your table. Check the myImage property of the event source. Using a switch or if-else test, determine if myImage is set equal to a, b, c, blue, or red. If a, b, or c, swap the left image such that imageA becomes imageB, imageB becomes imageC, and imageC becomes imageA again. If the myImage property equals blue, the right image should change to images/notificationUnreadBadge.png otherwise it should swap back to images/notificationBadge.png.",
		"%l_labstepexplanation5": "=",

		"%l_labstep6": "6. When you're done, build the project for either the iOS Simulator or Android emulator. Correct any code mistakes, if necessary. Confirm that your event listener functions properly:<br/><ul><li>When the row is tapped, the background image should swap to the green “selected” version.</li><li>If the left image is tapped, the letter should advance to the next letter, looping back to the beginning properly.</li><li>If the right image is tapped, it should swap between the red and blue versions properly.</li></ul>",
		"%l_labstepexplanation6": "",

		"%l_summary": "Summary",
		"%l_summarypara": "When completed, your app should match what is shown in this movie: <a href='http://assets.appcelerator.com.s3.amazonaws.com/video/320.mov'>http://assets.appcelerator.com.s3.amazonaws.com/video/320.mov</a>",

		"%l_resources": "Resources",
		"%l_resources1": "TableView API docs: http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TableView-object</li>",
		"%l_resources2": "TableViewRow API docs: http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.TableViewRow-object</li>",
		"%l_resources3": "Kitchen Sink code: https://github.com/appcelerator/KitchenSink</li>",
		"%l_resources4": "Finished code: http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/320-finished.zip</li>",

	}});
