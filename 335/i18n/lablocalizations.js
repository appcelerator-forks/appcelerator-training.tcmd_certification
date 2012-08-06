/*
	Localization strings file. To translate, copy the entire "en-US" branch, paste in as new member of the object, 
	set its name to be the two-letter language code, and translate each string.
	As shown, strings can include simple HTML.
*/
String.toLocaleString({
	"en-US": {
		"%l_labname": "Lab - ScrollView API Deep Dive",
		"%l_mission": "<img src='https://wiki.appcelerator.org/download/attachments/14090415/20110623-p6a1spsixn1r5mrmfe1eswgwj5.jpg?version=1&modificationDate=1311617039000' style='height:300px;float:right;margin-top:-40px;margin-bottom: 10px;'><strong>Mission: </strong>In this lab, you will create a scroll view containing a list of baseball players. That list will extend left/right beyond the width of the viewport. When the user taps a player's name, three images of that player will be displayed in a scrollable view located below the scroll view.",
		
		"%l_labstep1": "1. Download the starting point files from <a href='http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/Lab335.zip'>http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/Lab335.zip</a>. Extract the archive, then import it into Studio as an existing Titanium project.",
		"%l_labstepexplanation1": "",

		"%l_labstep2": "2. Open app.js and examine its contents. This file is completed for you. It instantiates then includes the two major UI modules into the app's window and opens that window.",
		"%l_labstepexplanation2": "",

		"%l_labstep3": "3. Open CustomScrollableView.js and following the code comments, write a module to create a custom ScrollableView object. It will contain three images as its views. It will also listen for an app-level 'playerChanged' event, which when fired will call a function you'll write to swap out those images with three new images passed in as an array. That event listener should also scroll the ScrollableView back to the first image in the set.",
		"%l_labstepexplanation3": "",

		"%l_labstep4": "4. Open CustomScrollView.js and following the code comments, write a module to create a custom ScrollView object. It will contain a view, which will contain a series of labels (which you'll create with another module). Instantiate a series of custom labels with the player details as noted in the comments. Add those labels to the container. Add an event listener to your scroll view so that when it's clicked, if a label is clicked on, you'll fire the 'playerChanged' event and pass an array of images.",
		"%l_labstepexplanation4": "",

		"%l_labstep5": "5. Open CustomLabel.js and following the code comments, write a module to create a custom Label object. This module will define a consistent set of properties, including the player's name and image file basename. Follow the constructor pattern with your code.",
		"%l_labstepexplanation5": "",

		"%l_labstep6": "6. Build and run your app in the simulator/emulator. Correct any errors and build again. Compare your finished work to the screenshot below. You should be able to click a player's name and have his pictures show in the scrollable view.",
		"%l_labstepexplanation6": "",

		"%l_summary": "Summary",
		"%l_summarypara": "In this lab, you created a ScrollView that controls the contents of a ScrollableView.",

		"%l_resources": "Resources",
		"%l_resources1": "Finished code is available at <a href='http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/Lab335-finished.zip'>http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/Lab335-finished.zip</a></li>",
		"%l_resources1": "Guides: Scrolling Views</li>",
		"%l_resources1": "APIdocs: ScrollView and ScrollableView</li></ul>",

	}});
