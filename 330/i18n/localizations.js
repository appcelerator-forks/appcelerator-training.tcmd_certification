/*
	Localization strings file. To translate, copy the entire "en-US" branch, paste in as new member of the object, 
	set its name to be the two-letter language code, and translate each string.
	As shown, strings can include simple HTML.
*/
String.toLocaleString({
	"en-US": {
		"%l_filetitle": "User Input Collection",
		"%l_subtitle": "Advanced Titanium Mobile Development",
		"%l_lessontitle": "User Input Collection",
		"%l_slidenote_titleslide": "<b>Module time: 60 mins</b>(30 mins teaching, 30 mins for lab) Data entry in a mobile application is much different than sitting at a keyboard with a desktop computer.  In this module, developers will learn how to collect data from users in a streamlined way.",

		"%l_agenda_title": "Agenda",
		"%l_agenda1": "Skin and style native components",
		"%l_agenda2": "Handle keyboard and layout issues",
		"%l_agenda3": "Keyboard customization",
		"%l_agenda4": "Using Web Views and HTML forms for input collection",
		"%l_slidenote_agenda": "",

		"%l_styling_input": "Styling Input Components",
		"%l_sizing_input": "Sizing input elements",
		"%l_pos_input": "Positioning input elements",
		"%l_hint_text": "hintText",
		"%l_clear_edit": "clearOnEdit",
		"%l_auto_correct": "Autocorrection and autocapitalization",
		"%l_slidenote_styling_input": "You can set all the usual width and height values<br>Keep in mind that text sizes differ across platforms, so size text accordingly<br>Position with top, left, right, bottom as usual<br>Hint text shows in empty text fields and text areas, removed when user focuses on the field<br>Clear on edit removes contents on focus<br>Turn off autocorrection and autocapitalization by setting to false in field’s properties",

		"%l_styling_input_contd": "Styling Input Components, continued",
		"%l_bg_color": "Background colors and gradients",
		"%l_bg_graphics": "Background graphics",
		"%l_bgcap": "backgroundLeftCap, backgroundTopCap",
		"%l_styling_input_contdn_image": "<img src='images/styling-input.png' style='margin-top:5px;height:250px;'/>",
		"%l_slidenote_styling_input_contd": "Set normal, selected, and disabled background colors<br>Gradients on iOS only<br>Set normal, selected, and disabled background graphics on most fields<br>backgroundLeftCap / top cap define an area that won’t be stretched<br>specifies a size in pixels that is the left/right or top/bottom non-stretched area<br>middle is stretched to fill size of element<br>background right cap is calculated as width – left cap – center 1px",
		
		"%l_soft_kbd": "Soft Keyboard and Layout Issues",
		"%l_hiding": "Hiding the keyboard - blur()",
		"%l_suppress": "Suppressing the return key",
		"%l_preventing": "Preventing the keyboard from covering an input",
		"%l_soft_kbd_image": "<img src='images/soft-kbd.png' style='margin-top:5px;height:250px;'/>",
		"%l_slidenote_soft_kbd": "Hide keyboard with input.blur() or show with input.focus()<br>There’s a native Android-only way to hide the keyboard programmatically, see the Kitchen Sink<br>No way to tell if the keyboard is showing – native OS limitation<br>Suppressing return – to get new lines in textarea<br>Add suppressReturn:false to field<br>Prevent keyboard covering input:<br><ul><li>Put input fields into a scroll view</li><li>Android only: use the SOFT_INPUT_ADJUST_PAN constant</li></ul>",
		
		"%l_kbd_cust": "Keyboard Customization",
		"%l_kbd_type": "Keyboard Type",
		"%l_set_kbd_type": "&nbsp;&nbsp;&nbsp;Set with textfield.keyboardType",
		"%l_ret_key": "ssigning the Return key",
		"%l_set_ret_key": "&nbsp;&nbsp;&nbsp;Set with textfield.returnKeyType",
		"%l_kbd_toolbars": "Keyboard Toolbars",
		"%l_slidenote_kbd_cust": "Agenda type slide<br>Details on upcoming slides",
		
		"%l_kbd_types_ios": "Keyboard Types - iOS",
		"%l_kbd_types_ios_image": "<img src='images/kbd-types-ios.png' style='margin-top:5px;height:380px;'/>"
		"%l_slidenote_kbd_types_ios": "Keyboard types<br>Set on text field or text area with keyboardType =  Ti.UI.type_name",
		
		"%l_kbd_types_android": "Keyboard Types - Android",
		"%l_kbd_types_android_image": "<img src='images/kbd-types-android.png' style='margin-top:5px;height:380px;'/>"
		"%l_slidenote_kbd_types_android": "Differences are subtle<br>Numbers_Punctuation and Namephone_Pad are the same<br>Decimal_Pad not supported<br>Carrier themes will likely change the appearance of these",

		
		"%l_ret_key": "Return Key Options",
		"%l_ret_ke_image": "<img src='images/ret-key.png' style='margin-top:5px;height:380px;'/>"
		"%l_slidenote_ret_key": "field.returnKeyType = Ti.UI.RETURNKEY_type<br>Return key options<br>Changes label and user expectation<br>When button is tapped, the return event of the input field is fired<br>Hint: you could capture return event and move focus to next field in a long form",

		
		"%l_kdb_toolbars": "Keyboard Toolbars",
		"%l_ios_only": "iOS only feature",
		"%l_kdb_toolbars_image": "<img src='images/kbd-toolbars.png' style='margin-top:5px;height:380px;'/>",
		"%l_slidenote_kdb_toolbars": "Define buttons separately prior<br>Assign object references to keyboardToolbar property<br>Add event listeners to those individual buttons",
		
		"%l_using_webviews": "Using Web Views and HTML Forms",
		"%l_html_forms": "HTML is built for forms",
		"%l_support_tabbing": "Great automatic support for scrolling and 'tabbing' between fields",
		"%l_html5_forms": "HTML 5 forms:",
		"%l_input_type": "Keyboard types set with < input type=type >",
		"%l_html_input": "<a href='www.w3.org/TR/html5/the-input-element.html#attr-input-type'>www.w3.org/TR/html5/the-input-element.html#attr-input-type</a>",
		"%l_viewport": "Controlling the 'viewport'",
		"%l_control_viewport": "<a href='http://bit.ly/sxiFMK'>http://bit.ly/sxiFMK</a>",
		"%l_form_validation": "Form validation support",		
		"%l_slidenote_using_webviews": "HTML 5 includes many form-related additions<br>Keyboard types<br>Control size of page via the meta tag<br>HTML 5 form validation not fully supported across platforms",
		
		"%l_qa": "Q&amp;A",
		"%l_slidenote_qa": "",
		
		"%l_lab_goals": "Lab Goals",
		"%l_use_an": "Use an HTML form and a WebView for data entry",
		"%l_set_app": "Set appropriate keyboard types for each field",
		"%l_transmit_collected": "Transmit collected data back to native land so data can be saved to a database",
		"%l_demoURL": "Demo and wiki URL",
		"%l_slidenote_lab_goals": ">We want to add additional fields to the TiBountyHunter fugitive object.  Let’s use a web view to create a nicer input form.<br>Demo: finished BountyHunter, new bounty form is built with HTML<br><ul><li>Fields auto-scroll to remain visible</li><li>Next/previous buttons</li></ul>",
				
		"%l_lab": "Lab",
		"%l_slidenote_lab": "In TiBountyHunter, the add window is implemented as a web view.  The lone HTML file in resources is used for the web view, and we use custom messages to pass data between the web view and the “native wrapper”.  Show how we create the web view with the HTML page, and then how data is transferred back and forth from the web view.  Also point out that fields are automatically scrolled about in the web view."
	}
});
