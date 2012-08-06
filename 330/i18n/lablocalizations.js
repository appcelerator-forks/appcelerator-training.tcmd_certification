/*
	Localization strings file. To translate, copy the entire "en-US" branch, paste in as new member of the object, 
	set its name to be the two-letter language code, and translate each string.
	As shown, strings can include simple HTML.
*/
String.toLocaleString({
	"en-US": {
		"%l_labname": "Lab - User Input Collection",
		"%l_mission": "<img src='https://wiki.appcelerator.org/download/attachments/14090418/Screen+shot+2011-12-19+at+3.03.12+PM.png?version=1&modificationDate=1324325175000' style='height:300px;float:right;margin-top:-40px;margin-bottom: 10px;'> <img src='https://wiki.appcelerator.org/download/attachments/14090418/Screen+shot+2011-12-19+at+3.07.02+PM.png?version=1&modificationDate=1324325267000' style='height:300px;float:right;margin-top:-40px;margin-bottom: 10px;'> <img src='https://wiki.appcelerator.org/download/attachments/14090418/Screen+shot+2011-12-19+at+3.05.23+PM.png?version=1&modificationDate=1324325288000' style='height:300px;float:right;margin-top:-40px;margin-bottom: 10px;'>User input collection on a mobile application can be problematic, since the screen is small and the input mechanisms (software or hardware keyboard, operated by thumbs) are not suited for intensive data entry. For that reason, we need to only require the user to type in specific circumstances, and we need to make the form as easy to navigate as possible. The WebView, in many cases, ends up being a great fit for larger forms that require multiple user input fields. <strong>Mission: </strong>In this lab assignment, you will update an app to use a web form to pass collected data to the native wrapper where you'll output it within a view. You'll also modify the form to display a keyboard type appropriate to the data being collected.",
		
		"%l_labstep1": "1. Download the starting point files from <a href='http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/330.zip'>http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/330.zip</a>. Extract the archive, then import it into Studio as an existing Titanium project.",
		"%l_labstepexplanation1": "",

		"%l_labstep2": "2. Edit the html/addForm.html. Based on the comments in the file, add the appropriate HTML attribute to display the given hint text in each of the fields.",
		"%l_labstepexplanation2": "",

		"%l_labstep3": "3. In that same file, update the form fields to show the correct type of keyboard when focused. See http://www.w3.org/TR/html5/the-input-element.html#attr-input-type for the complete list of input types supported.",
		"%l_labstepexplanation3": "",

		"%l_labstep4": "4. In addForm.html, add the JavaScript send() function to pass data to the native wrapper. Pass an object containing fields for the data gathered from the form. The submit button should call send().",
		"%l_labstepexplanation4": "",

		"%l_labstep5": "5. Update mainWindow.js. Update the empty eventListener to receive the data sent from the web form and pass it to the outputFugitiveStats() function. You'll also remove the 'add' button from the window and update the heading label.",

		"%l_labstep6": "6. When you're done, build the project for either the iOS Simulator or Android emulator. Correct any code mistakes, if necessary. Test your work by opening the form, entering data, and clicking Save. Your input should be displayed on the app's native screen.",
		"%l_labstepexplanation6": "",

		"%l_summary": "Summary",
		"%l_summarypara": "In this lab, you implemented a form within a WebView to capitalize on the advantages offered by HTML forms for data input. You also had the opportunity to learn how to pass data between the WebView and native wrapper.",

		"%l_resources": "Resources",
		"%l_resources1": "You can download the finished version of this lab's code from <a href='http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/330_finished.zip'>http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/330_finished.zip</a>",

	}});
