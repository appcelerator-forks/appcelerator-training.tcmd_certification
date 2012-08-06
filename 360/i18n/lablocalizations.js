/*
	Localization strings file. To translate, copy the entire "en-US" branch, paste in as new member of the object, 
	set its name to be the two-letter language code, and translate each string.
	As shown, strings can include simple HTML.
*/
String.toLocaleString({
	"en-US": {
		"%l_labname": "Lab - iOS API Deep Dive",
		"%l_mission": "<img src='https://wiki.appcelerator.org/download/attachments/14090403/lab360_3.png?version=1&modificationDate=1324309782000' style='height:300px;float:right;margin-top:-40px;margin-bottom: 10px;'><img src='https://wiki.appcelerator.org/download/attachments/14090403/lab360_2.png?version=1&modificationDate=1324309766000' style='height:300px;float:right;margin-top:-40px;margin-bottom: 10px;'><img src='https://wiki.appcelerator.org/download/attachments/14090403/lab360_1.png?version=1&modificationDate=1324309745000' style='height:300px;float:right;margin-top:-40px;margin-bottom: 10px;'><strong>Mission: </strong>Titanium supports many iOS specific APIs capabilities - one of these is the ability to support application preferences in the "Settings" app. In this lab, you will create a Settings bundle so that application settings can be changed via the Settings app in the simulator or on a phone. ",
		"%l_specification": "<strong>Specification: </strong>Download the starting point code linked to in Step 1 below. The archive includes the necessary graphics. To successfully complete this lab, you must implement the following functionality:",
		"%l_spec1": "The setting will control the image placement when the app is opened from a completely stopped state.",
		"%l_spec2": "By using an application-level event, the UI will update the image placement after being resumed from the background (such as when you switch to the Settings app, change the placement option, the switch back to the app).",
		
		"%l_labstep1": "1. Download the starting point files from <a href='http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/Lab###.zip'>http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/Lab###.zip</a>.",
		"%l_labstepexplanation1": "",

		"%l_labstep2": "2. In the project root folder (same folder where tiapp.xml is located), create a folder named <strong>platform</strong>. Within it, create an <strong>iphone</strong> folder. Within it, create a folder called <strong>Settings</strong>. Using Studio or another text editor, create a new text file in that folder and paste in the XML code shown below. For now, save the file as <strong>Root.txt</strong>.<br/><br/>Alternatively, copy the platform/iphone folder from the KitchenSink example app (SDK1.8 version or newer) to your app's root folder. Then modify the contents of those files. Skip steps 3 &amp; 4 if you choose this technique.<br/><pre><code>\n&lt;?xml version='1.0' encoding='UTF-8'?>\n&lt;!DOCTYPE plist PUBLIC '-//Apple//DTD PLIST 1.0//EN' 'http://www.apple.com/DTDs/PropertyList-1.0.dtd'>\n&lt;plist version='1.0'>\n&lt;dict>\n    &lt;key>StringsTable&lt;/key>\n    &lt;string>Root&lt;/string>\n    &lt;key>PreferenceSpecifiers&lt;/key>\n    &lt;array>\n        &lt;dict>\n            &lt;key>Type&lt;/key>\n            &lt;string>PSGroupSpecifier&lt;/string>\n            &lt;key>Title</key>\n            &lt;string>Lab360&lt;/string>\n        &lt;/dict>\n        &lt;dict>\n            &lt;key>Type&lt;/key>\n            &lt;string>PSToggleSwitchSpecifier&lt;/string>\n            &lt;key>Title&lt;/key>\n            &lt;string>Image on right&lt;/string>\n            &lt;key>Key&lt;/key>\n            &lt;string>rtl_preference&lt;/string>\n            &lt;key>DefaultValue&lt;/key>\n            &lt;false/>\n        &lt;/dict>\n    &lt;/array>\n&lt;/dict>\n&lt;/plist>\n </code></pre>",
		"%l_labstepexplanation2": "",

		"%l_labstep3": "3. Using Finder or Terminal, rename the Root.txt file to <strong>Root.plist</strong>. If you use Finder, you'll be prompted to confirm changing the extension. The file needs to be named with the .plist extension, which is the Apple proprietary XML format for properties files.",
		"%l_labstepexplanation3": "",

		"%l_labstep4": "4. Rename the Settings folder to <strong>Settings.bundle</strong>. Again, you might be prompted to confirm that you want to add the .bundle extension. This is a proprietary extension for bundle type directories. The contents will become hidden once you rename the file.",
		"%l_labstepexplanation4": "",

		"%l_labstep5": "5. In Studio, open app.js and observe the app-level event that is fired. You'll need to add a listener for this event, which will update the position of an image and a view.",
		"%l_labstepexplanation5": "",

		"%l_labstep6": "6. Open ui.js. Within the setLayout() function, add the code that will set the left and right positions for the fugitiveImage and vitalsView elements. Code comments tell you the values for those settings. Which get implemented should be based on the value of the app property, as set in Settings.",
		"%l_labstepexplanation6": "",

		"%l_labstep7": "7. Add the event listener where indicated that will call setLayout() when the app resumes from the background state.",
		"%l_labstepexplanation7": "",

		"%l_labstep8": "8. When you're done, build the project for either the iOS Simulator. he picture should be on the left and text (within the view) on the right. Return to the Springboard. In Settings, set the 'Image on right' option to On. Open the Lab 360 app again. The picture should be on the right with vitals to the left. Correct any code mistakes, if necessary.",
		"%l_labstepexplanation8": "",

		"%l_summary": "Summary",
		"%l_summarypara": "Small touches like this are necessary to make your application feel like it belongs on the target operating system. This is only one minor capability of many supported by Titanium - most anything you can configure for a native iOS app is doable through Titanium quite easily.",

		"%l_resources": "Resources",
		"%l_resources1": "Finished code: <a href='http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/360_finished.zip'>http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/360_finished.zip</a>",
		"%l_resources2": "Apple Documentation: <a href='http://developer.apple.com/library/ios/#documentation/PreferenceSettings/Conceptual/SettingsApplicationSchemaReference/Introduction/Introduction.html#//apple_ref/doc/uid/TP40007071'>Settings bundle</a>",

	}});
