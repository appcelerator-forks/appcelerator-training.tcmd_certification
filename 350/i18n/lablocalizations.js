/*
	Localization strings file. To translate, copy the entire "en-US" branch, paste in as new member of the object, 
	set its name to be the two-letter language code, and translate each string.
	As shown, strings can include simple HTML.
*/
String.toLocaleString({
	"en-US": {
		"%l_labname": "Lab - Android API Deep Dive",
		"%l_mission": "<img src='https://wiki.appcelerator.org/download/attachments/14090405/share_menu.png?version=1&modificationDate=1311684993000' style='height:300px;float:right;margin-top:-40px;margin-bottom: 10px;'><img src='https://wiki.appcelerator.org/download/attachments/14090405/share_text.png?version=1&modificationDate=1311684981000' style='height:300px;float:right;margin-top:-40px;margin-bottom: 10px;'><strong>Mission: </strong>Titanium has broad support for many Android-specific OS features. Chief among them is the ability to launch activities with intents. Such interactions enable your apps to communicate with other apps, in essence 'borrow' functionality from those apps, without specific knowledge of the actual app in use. For example, your app might share text to other apps on the user's device. The user will choose whether to use that text in their email, messaging, or twitter app. The official Android documentation is the definitive source for information on activities and intents.",
		"%l_specification": "<strong>Specification: </strong>In this lab, you will enable an app to share text with other apps on the user's device. The app provides a simple text box. You'll plug in the code to share the text that users enter via an intent.",

		"%l_backgroundinfo": "<strong>Background Information: </strong>Titanium exposes the ability to launch an activity through JavaScript. An activity is usually a view in an application capable of handling some task. Activities are launched with Intents, which are basically objects containing data necessary for an activity to perform a task. In this example code, we are launching an activity with an intent we have created.This will bring up a dialogue of applications with activities that are registered to handle that intent. In this case, e-mail, Twitter, and any other sharing apps installed will likely be presented as options.",

		"%l_backgroundcode": "\n// the type parameter defines the mime type of the data to be shared\nvar intent = Ti.Android.createIntent({\n    action: Ti.Android.ACTION_SEND,\n    type: 'text/plain'\n});\n// See the Android developer docs for info on required and options extra data fields with intents\nintent.putExtra(Ti.Android.EXTRA_SUBJECT, 'My subject!');\nintent.putExtra(Ti.Android.EXTRA_TEXT, 'My text!');\ntry {\n    // Start the activity and pass the intent object\n    Ti.Android.currentActivity.startActivity(intent);\n} catch (ex) {\n    // Handle Exception if no suitable apps installed\n    Ti.UI.createNotification({ message : 'No sharing apps installed!' }).show();\n}\n ",

		
		"%l_labstep1": "1. Download the starting point files from <a href='http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/350.zip'>http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/350.zip</a>. Extract the archive, then import it into Studio as an existing Titanium project.",
		"%l_labstepexplanation1": "",

		"%l_labstep2": "2. In app.js, modify the Window object to include the Android-specific property that will scroll the UI if the soft keyboard covers the textarea field.",
		"%l_labstepexplanation2": "",

		"%l_labstep3": "3. Where indicated by the comments, add the Android-specific statement to hide the soft keyboard when the button is clicked. (Don't use blur().)",
		"%l_labstepexplanation3": "",

		"%l_labstep4": "4. Create the intent, along with its two extra fields to pass the text entered in the message box. Then, using a try/catch block, start the activity and pass the intent.",
		"%l_labstepexplanation4": "",

		"%l_labstep5": "5. For best results, connect your Android device. Then, build and deploy the app to your phone. If you don't have an Android device, build and run your app in the emulator.",
		"%l_labstepexplanation5": "",

		"%l_summary": "Summary",
		"%l_summarypara": "In this lab, you ...",

		"%l_resources": "Resources",
		"%l_resources1": "Finished code: <a href='http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/350_finished.zip'>http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/350_finished.zip</a>",
		"%l_resources2": "See the <a href='http://developer.android.com/reference/android/content/Intent.html'>Android developer docs</a> for information on Intents and their options.",

	}});
