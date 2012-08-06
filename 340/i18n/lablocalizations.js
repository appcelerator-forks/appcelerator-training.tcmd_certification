/*
	Localization strings file. To translate, copy the entire "en-US" branch, paste in as new member of the object, 
	set its name to be the two-letter language code, and translate each string.
	As shown, strings can include simple HTML.
*/
String.toLocaleString({
	"en-US": {
		"%l_labname": "Lab - Animation API Deep Dive",
		"%l_mission": "<img src='https://wiki.appcelerator.org/download/attachments/14090422/Screenshot_39.png?version=1&modificationDate=1311643807000' style='height:300px;float:right;margin-top:-40px;margin-bottom: 10px;'><img src='https://wiki.appcelerator.org/download/attachments/14090422/Screenshot_40.png?version=1&modificationDate=1311643794000' style='height:300px;float:right;margin-top:-40px;margin-bottom: 10px;'><strong>Mission: </strong>Animations can provide critical feedback to a user in your application. Used wisely, your app's UI will benefit greatly from the gentle application of animations. This lab will walk you through a simple series of animation examples for common use cases.",
		"%l_specification": "<strong>Specification: </strong>In this lab, you will animate three elements in a partially-completed app. You'll add code to fade an element out of view, then back into view; add code to slide an element off screen, then back; and you'll add code to transition between two views using iOS-specific functionality.",
		
		"%l_labstep1": "1. Download the starting point files from <a href='http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/340.zip'>http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/340.zip</a>. Extract the archive, then import it into Studio as an existing Titanium project.</a>.",
		"%l_labstepexplanation1": "",

		"%l_labstep2": "2. In app.js, examine the colored boxes and helper functions provided. We have laid out the UI for you. Where indicated, add the three event listeners as follows:<br/><ul><li>Each of the event listeners should respond to the click event.</li><li>For box1, the event listener should take two (2) seconds to fade the box out of view by setting its opacity to 0. It should then fade the box back into view, resetting its opacity to the default.</li><li>For box2, the event listener should take two seconds to move the box off the bottom of the screen (make sure to account for common screen sizes on various devices). The box should slide back to its original position in another two seconds.</li><li>For container, which contains box3 and box4 use transitions to swap those two elements in and out of view. Use the flip from right transition for one, and flip from left for the other. This effect will work on only iOS. (Using 3D Matrix animations, you could potentially code a cross-platform version of that transition — check out the matrix animation examples in the Kitchen Sink for a starting point.)</li></ul>",
		"%l_labstepexplanation2": "",

		"%l_labstep3": "3. When you're done, build the project for either the iOS Simulator or Android emulator. Correct any code mistakes, if necessary. Test your work by clicking on each of the boxes in turn. Note that the transition effects won't work on Android.",
		"%l_labstepexplanation3": "",

		"%l_summary": "Summary",
		"%l_summarypara": "In this lab, you implemented three simple animations as an introduction to the types of effects you could add to your apps.",

		"%l_resources": "Resources",
		"%l_resources1": "You can download the finished code from <a href='http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/340_finished.zip'>http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/340_finished.zip</a>.",

	}});
