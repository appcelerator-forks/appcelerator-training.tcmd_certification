/*
	Localization strings file. To translate, copy the entire "en-US" branch, paste in as new member of the object, 
	set its name to be the two-letter language code, and translate each string.
	As shown, strings can include simple HTML.
*/
String.toLocaleString({
	"en-US": {
		"%l_labname": "Lab - Handling Gestures and Orientation Changes",
		"%l_mission": "<strong>Mission: </strong>In this lab you will create an app, the layout of which reacts to orientation changes, as well as swipe and shake gesture events.",
		"%l_specification": "<strong>Specification: </strong>Download the starting point code linked to in Step 1 below. The archive includes the necessary graphics. To successfully complete this lab, you must develop an app that meets the following description:",
		"%l_spec1": "When the phone registers the shake event, it will choose a random photo to display as the album image.",
		"%l_spec2": "When you swipe over the copy, it will choose a random one for display as well.",
		"%l_spec3": "Rotation of device will reorient the content of the window to be more effectively located.",
		
		"%l_labstep1": "1. Download the starting point files from <a href='http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/Lab325.zip'>http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/Lab325.zip</a>.",
		"%l_labstepexplanation1": "",

		"%l_labstep2": "2. Extract the archive, then import it into Studio as an existing Titanium project.",
		"%l_labstepexplanation2": "",

		"%l_labstep3": "3. Examine the contents of app.js. Build the project for the simulator/emulator and check how orientation changes affect the layout of the app. ",
		"%l_labstepexplanation3": "Press Cmd + Arrow to rotate the iOS Simulator. Press Ctrl + F12 to rotate the Android emulator.",

		"%l_labstep4": "4. To app.js, add an orientation change event listener. When in landscape orientation, set these parameters:<br/><code>lblArtist</code> &dash; top: 240, left: 250<br/><code>audioControls</code> &dash; top: null, left: 10<br/><code>additionalCopy</code> &dash; left: 260, bottom: 20, width: 200<br/></br>When in portrait orientation, set these parameters:<br/><code>lblArtist</code> &dash; top: 260, left: null<br/><code>audioControls</code> &dash; top: 10, left: null<br/><code>additionalCopy</code> &dash; left: null, bottom: 10, width: 240",
		"%l_labstepexplanation4": "",

		"%l_labstep5": "5. 5. Add info-level logging statement within your orientation event listener to output the orientation direction to the console.",
		"%l_labstepexplanation5": "",

		"%l_labstep6": "6. Add a shake event listener. Within this function create a simple random number generator from  0 - 2 that will change the ot.model.img array number. When you shake your device make sure that the image updates properly.",
		"%l_labstepexplanation6": "",

		"%l_labstep7": "7. Add a swipe event to the additionalCopy UI element. Use the same random number generator to change the copy that is to be displayed on the side.",
		"%l_labstepexplanation7": "",

		"%l_labstep8": "8. Build your app for the simulator/emulator. Rotate the simulator; the UI should update accordingly. On iOS, you can simulate the shake event by using the Device menu; the image should change. Click and drag across the additionalCopy text; it should randomly change as well.",
		"%l_labstepexplanation8": "",

		"%l_summary": "Summary",
		"%l_summarypara": "In this lab, you modified an app to better support orientation changes by updating its layout appropriately for the new screen dimensions. You also added shake and swipe event listeners so that your app now reacts to gestures rather than just taps.",

		"%l_resources": "Resources",
		"%l_resources1": "Docs: Orientation guide <a href='http://docs.appcelerator.com/titanium/2.0/index.html#!/guide/Orientation'>http://docs.appcelerator.com/titanium/2.0/index.html#!/guide/Orientation</a>",
		"%l_resources2": "Docs: Gestures guide <a href='http://docs.appcelerator.com/titanium/2.0/index.html#!/guide/Supporting_Gestures'>http://docs.appcelerator.com/titanium/2.0/index.html#!/guide/Supporting_Gestures</a>",

	}});
