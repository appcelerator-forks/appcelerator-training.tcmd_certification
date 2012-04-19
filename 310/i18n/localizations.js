/*
	Localization strings file. To translate, copy the entire "en-US" branch, paste in as new member of the object, 
	set its name to be the two-letter language code, and translate each string.
	As shown, strings can include simple HTML.
*/
String.toLocaleString({
	"en-US": {
		"%l_filetitle": "Mobile UX Design",
		"%l_subtitle": "Advanced Titanium Mobile Development",
		"%l_lessontitle": "Mobile UX Design",
		"%l_slidenote_titleslide": "<b>Module time: 90 mins</b>(60 mins teaching, 30 mins for lab)<br><br/>User experience is 'how it feels to use your app'<br/>Utility, ease of use, efficiency, app flow, navigation<br>Subjective<br>Not how it looks.",

		"%l_agenda_title": "Agenda",
		"%l_agenda1": "The basics of UI/UX",
		"%l_agenda2": "The inputs that you have available",
		"%l_agenda3": "Navigation for the user",
		"%l_agenda4": "Providing feedback",
		"%l_agenda5": "Tools for good design",
		"%l_agenda6": "Rapid development and testing",
		"%l_slidenote_agenda": "Why Mobile UX in a programmer's course?<br/>Good UX separates 'good' apps from 'great' apps<br/>Provide input and feedback to design team members<br/>Know what is possible<br/>Learn to think outside the norm &mdash; be creative",

		"%l_ux_basics": "Basics of UX",
		"%l_slidenote_ux_basics": "Think about your user<br>And the way they'll use your app<br>3 examples<br>Tweet: confusing options and actions<br>App on left: too much info, too much in app<br>Dialog: not a mobile app, but still poor UX<br>Asks users to select command-line switches<br> If user knows what they are, they'd be typing at console<br>If they don't, then the dialog doesn't give appropriate info",

		"%l_critial_questions": "Critical Questions",
		"%l_can_you": "Can you answer the following:",
		"%l_what_problem": "What problem(s) am I solving?",
		"%l_who": "Who are my key users?",
		"%l_what_needs": "What are their needs?",
		"%l_slidenote_critial_questions": "When developing any application you need to as these fundamental questions about the consumer.<br>What problems are you solving,<br>Who are your key users,<br>What are their needs<br>These questions form the foundation of what you build your core application around.",

		"%l_segment": "Segment Your Customers",
		"%l_focus_on": "<b>Focus on your primary consumer!</b> (The one that makes you profitable)",
		"%l_remove": "<b>Remove your personal opinion!</b> (You're not the target consumer)",
		"%l_slidenote_focus_needs_2": "Divide your potential users into segments. Which one makes you the money? You will not be able to please everyone with your app. That is why there a million apps in the app store. Focus on the most important segments, the ones who will make you the most money. Don't ignore the others, but don't spend too much time adding features to support a small number of users.<br/><br/>You are probably not your target market. So don't rely on your opinions. Focus groups, surveys, etc.",

		"%l_hardware": "Hardware",
		"%l_confining": "Hardware is confining by nature",
		"%l_freedom": "Freedom in the framework",
		"%l_use_it": "Use it to your advantage",
		"%l_work_with": "Work with the lowest common greatest value",
		"%l_added_value": "Provide added values",
		"%l_slidenote_hardware": "Hardware constraints: screen size, input options, memory limitations<br>Freedom in framework = understanding what is available to you and how to truly utilize it to your advantage.<br>Advantage = new ways to engage customers, video, audio, location, etc. Those things that mobile does well, but desktop doesn't<br>Target lowest common hardware that provides the greatest value to your company. Drop support for older devices or OSes when they're not big segments of your userbase<br>Provide added value = giving users reason to use your app",

		"%l_device_principles": "Device Principles",
		"%l_married": "You are married to your mobile",
		"%l_interfaces": "Interfaces are truncated",
		"%l_design_for": "Design for real mobile interfaces (voice, messaging, location...)",
		"%l_plan_for": "'Plan for Abandon'",
		"%l_slidenote_device_principles": "Married to mobile &mdash; take it with you everywhere (bedroom, bathroom, work, play)<br>Truncated &mdash; small, limited input options, one handed operation<br>Mobile &mdash; hub for messaging, voice, location, network<br>Plan for Abandon = interruptions are constant &mdash; phone calls, people interrupting, etc. Average app use time is a few seconds. Plan your UX around that.",

		"%l_only_include": "Only include or require a script WHEN IT IS ABSOLUTELY NEEDED",
		"%l_screens": "Screens",
		"%l_do_not_design": "Do NOT design once, place everywhere",
		"%l_resolutions": "Resolutions are opportunity",
		"%l_target": "Target your majority",
		"%l_slidenote_screens": "Take advantage of the differences in screens and sizes<br>Optimize for the difference in screen real estate and resolution<br>Target the hardware of the majority of users",

		"%l_inputs": "Inputs",
		"%l_slidenote_inputs": "Let's talk about some of the mobile-specific input options you have and how you can use them within your app to create novel or exciting ways to interact.",

		"%l_accelerometer": "Accelerometer",
		"%l_directional_info": "Directional Information",
		"%l_use_in": "Use in conjunction with Compass",
		"%l_scrolling": "Directional Scrolling",
		"%l_dictates": "Dictates Orientation",
		"%l_slidenote_accelerometer": "Accelerometer tells you how the device is moving. In conjunction with the compass, you can tell where and how the user is looking<br/><br/>Novel inputs with the accelerometer:<ul><li>Tip to move to next screen/page</li><li>Roll a ball or move a 'player' in a game</li><li>'Throw' to transfer data</li></ul>",

		"%l_orientation": "Orientation",
		"%l_you_must": "You must lock your orientation, or design for both!",
		"%l_orientation2": "User's rotate device for a variety or reasons, your app must work in both orientations",
		"%l_orientation3": "Better yet, design for both!",
		"%l_slidenote_orientation": "We'll talk in another lesson <em>how</em> to handle. This is more the <em>why</em><br/><br>Apple's HIG says iPad should account for all four orientations<br>iPhone should be either:<ul><li>locked to portrait</li><li>or, portrait, landscape left/right but not upside down so that folks don't accidentally have their phone upside down when making/receiving a call</li></ul>",


		"%l_slidenote_orientation_2": "'Jamie&rsquo;s Recipes' &mdash; not a Titanium app<br/>UI functionality actually changes based on the orientation, different info is exposed<br>Portrait shows ingredients, landscape shows cooking directions.",

		"%l_micro_audio": "Microphone &amp; Audio",
		"%l_io": "Input &amp; Output",
		"%l_guide_user": "Guide a user with instruction",
		"%l_provide_feedback": "Provide positive/negative feedback",
		"%l_unique": "Unique and interesting UX",
		"%l_slidenote_micro_audio": "You can use sound for input and output<br>Instructions<br>Beeps and more for feedback, audio output<br>Unique &mdash; Apple's recent patent &mdash; the sound of a puff of air can be used to advance screens in an app<",

		"%l_camera_video": "Camera &amp; Video",
		"%l_camera_image": "<img src='images/camera-video.png' style='margin-top:5px;height:420px;float:right;'/>",
		"%l_rec_edit": "Record &amp; Edit",
		"%l_instant_result": "Instant Result &amp; Gratification",
		"%l_mult_uses": "Multiple Uses",
		"%l_augment_exp": "Augment Experience",
		"%l_slidenote_camera_video": "Camera is input device<br>Natural action for many<br>Example app shown is Turbo Tax &mdash; snap photo, upload, OCR of tax form<br>Augmented reality",

		"%l_nav_ux": "Navigation",
		"%l_slidenote_nav_ux": "Navigation is really the core behind your UX<br/>Must be simple and intuitive<br/>Test with real users<br/><br/>Let's take a look at the common elements and explore which work best as a base before expanding on how to build with them.",

		"%l_tabs": "Tabs",
		"%l_dec_powered": "Decision Powered",
		"%l_quick_eff": "Quick &amp; Efficient",
		"%l_natural": "Natural User Experience",
		"%l_instant": "Instant Information Use",
		"%l_slidenote_tabs": "Tabs imply equal weight, not a hierarchy<br/>Related functionality under the common purpose of the app<br>Familiar<br>Efficient<br>Tab based apps are the most popular apps that exist. The reason it that there is no more than five or so decisions that a user needs to make.",

		"%l_modal_windows": "Modal Windows",
		"%l_signify": "Signify separate action",
		"%l_path_must": "Path must lead back to purpose",
		"%l_easy_creation": "Easy creation & close",
		"%l_expected_inconvenience": "Expected 'inconvenience'",
		"%l_slidenote_modal_windows": "login screens, alerts, etc. &mdash; stop user action<br>They are an expected UX component<br/>But make them useful and part of the experience<br>There must be a clear path (app flow) provided by the modal windows<br>Programming wise, these windows are easy to create and close",

		"%l_window_nav": "Window Navigation",
		"%l_windownav_images": "<img src='images/window-nav.png' style='margin-top:50px;height:440px;padding:20px;'/>",
		"%l_slidenote_window_nav": "Plan for simple, intuitive navigation<br>Minimum Viable Product is just what's needed, no feature creep<br>We'll talk more about prototyping apps later",

		"%l_indication": "Indication & Status",
		"%l_slidenote_indication": "Loading indicators, alerts &amp; messages, etc.<br>Indicators and status are often overlooked<br/>Must provide the necessary feedback so a user knows what is going on.<br/>When actions fail or time-out, users need to know",

		"%l_loading_ind": "Loading Indicators",
		"%l_loading_images": "<img src='images/loading-indicator.png' style='width:300px;float:right;'>",
		"%l_prov_feedback": "Provide feedback to user",
		"%l_prov_info": "Provide information",
		"%l_show_prog": "Show progress",
		"%l_pass_fail": "Pass/Fail",
		"%l_slidenote_loading_ind": "Did it work? Is it done?<br>Loading indicators provide critical feedback to a user.<br/>Without notification, users can misunderstand whether an action worked, or failed, or is complete, etc.<br/>Think uploads &amp; downloads, logging in and out, progress through a series of data entry steps",

		"%l_feedback": "Feedback",
		"%l_feedback_images": "<img src='images/feedback.png' style='width:300px;float:right;'>",
		"%l_alerts": "Alerts are ok",
		"%l_action_screens": "Action screens are good",
		"%l_active_results": "Active results are best",
		"%l_slidenote_feedback": "Alerts are in your face, but get the job done<br>Action screens &mdash; customized screen, fills entire viewport, opportunity for better UI<br>Active results &mdash; best, inline with rest of app's actions &mdash; game results, incoming messages, users get info and can react<br>Feedback should give positive reinforcement of desired actions in your app, and discourage actions that aren't the best way to use your app. <br/><br>With that being said...",

		"%l_dont_over": "Don't Over Dialog",
		"%l_only_provide": "Only provide it when necessary",
		"%l_dont_remind": "Don't remind me constantly",
		"%l_avoid": "Avoid repetitive loops",
		"%l_slidenote_dont_over": "Constant nagging will drive away users<br/>Provide just enough, but not too much feedback<br/>Not every action needs some sort of 'Congratulations' message<br/><b>Avoid loops and situations that cause extensive dialogs. </b>I shouldn't have to be informed more than once to do something, especially if I'm wrong.",

		"%l_dont_over_inform": "Don't Over Inform",
		"%l_serving_neds": "Are you serving the needs?",
		"%l_data_fit": "Does the data really fit?",
		"%l_show_off": "Are you just showing off?",
		"%l_slidenote_dont_over_inform": "<b>Just because you have data doesn't mean it needs to be shown. </b><br/><br/>You have to go back to the core three questions:<br>What problem(s) am I solving?<br>Who are my key users?<br>What are their needs?<br>In light of the answers to these questions, ask yourself if the data really fits and needs to be shown now. If you cannot justify why the data is there, then it probably doesn't't belong there.",

		"%l_tools_trade": "Tools of the Trade",
		"%l_slidenote_tools_trade": "Let's look at some of the tools that UX designers use. Remember, we're talking about user experience, not user interface design &mdash; so, how it works not how it looks.",

		"%l_ux_tools": "UX design tools",
		"%l_uxtools_image": "<img src='images/ux-tools.png' style='margin-top:5px;width:375px;float:right;'/>",
		"%l_paper": "Paper &amp; pencil !",
		"%l_balasmiq": "Balsamiq",
		"%l_mockapp": "MockApp",
		"%l_plugin": "Pencil plug-in &nbsp;&nbsp;&nbsp;http://pencil.evolus.vn/",
		"%l_ipad_apps": "iPad apps",
		"%l_slidenote_ux_tools": "For UX design, low-fidelity is critical<br>You want decision makers to focus on flow and features, not the look<br>Sketching is fine: use 3x5 cards (one card per screen)<br>Low-fi graphics apps include Balsamiq<br>MockApp is a set of PowerPoint/Keynote templates (too hi-fi for UX though)<br>Pencil plug-in for Firefox<br>iPad apps include Blueprint, iMockups and others",

		"%l_graphic_apps": "Graphics apps",
		"%l_raster": "Raster: Photoshop, Pixelmator, Gimp, etc.",
		"%l_vector": "Vector: Fireworks, Inkscape, etc.",
		"%l_other": "Other: Keynote/PowerPoint",
		"%l_slidenote_graphic_apps": "UX doesn't generally need the power of full graphics apps<br>But traditional designers are used to working with them<br>Templates include Teehan & Lax for Photoshop<br>Watch out for making designs too realistic at UX design phase",

		"%l_live_view": "Live view tools",
		"%l_liveview_image1": "<img src='images/liveview.png' style='margin-top:5px;width:250px;float:right;'/>",
		"%l_liveview_image2": "<img src='images/androidpreview.png' style='margin-top:5px;width:250px;float:right;'/>",
		"%l_quick_feedback": "Quick device feedback",
		"%l_check_sizes": "Check sizes and layout",
		"%l_great_demo": "Great for app demos",
		"%l_ios_live": "iOS: LiveView &nbsp;&nbsp;&nbsp;http://www.zambetti.com",
		"%l_andr_live": "Android: Design Preview <br/>&nbsp;&nbsp;http://code.google.com/p/android-ui-utils/",
		"%l_slidenote_live_view": "Screen broadcasting apps display what's on your screen on a mobile device<br> Let you check for sizing and layout<br>Quicker than creating graphics and displaying them on your device (like a browser image)<br>On iOS: LiveView is one of the most popular &mdash; shares screen wirelessly over local network<br>On Android: Android Design Preview is free & open source, shares screen over USB connection",

		"%l_dev_test": "Development & Testing",
		"l_slidenote_dev_test": "Development and Testing<br>One of the biggest benefits of Titanium is it's ability to rapidly develop apps. If you have a good mockup for UX that is receiving stellar feedback from your test group, then start building it in Titanium and get it out there to other users. Refined design will simply enhance the core experience, but it shouldn't limit what you can gain from doing a good “skeleton style” app.",

		"%l_how_test": "How to Test",
		"%l_6_ppl": "6 people is enough, no really it is!",
		"%l_paper_mockups": "Paper mockups work",
		"%l_live_works": "LiveView apps work well",
		"%l_do_not": "Do not 'own' the project",
		"%l_slidenote_how_test": "Small groups are best, 6 is enough<br>Ask specific questions rather than 'what do you think?'<br>Paper apps work fine for testing<br>Pass off project as someone else's to remove personal concerns",

		"%l_ti_test": "Using Titanium for Rapid Testing",
		"%l_bring_ui": "Bring your UI to life",
		"%l_bring_imp": "Bring important Design elements (Fonts, colors, positioning)",
		"%l_place_dead": "Place dead images",
		"%l_insert": "Insert 'Lorem Ipsum' text",
		"%l_slidenote_ti_test": "You can use mock screens / static graphics to further test your UX<br>Create static images, lay transparent clickable views atop the images to provide rudimentary navigation and flow to bring a UI mockup to live. <br>Use dummy images as placeholders, especially for user-submitted images. <br>Do NOT use real copy, use Lorem Ipsum text, otherwise testers will focus on misspellings and grammar.",

		"%l_iteration": "Iteration",
		"%l_change_early": "Change early and often",
		"%l_ensure_your": "Ensure your changes are justified",
		"%l_180_deg": "180 degrees is not bad",
		"%l_ask_yourself": "Ask yourself the three questions...",
		"%l_slidenote_iteration": "Change early/often means to iterate, try/change/try/change<br>Always go back to your core three questions:<br>What problems are you solving,<br>Who are your key users,<br>What are their needs",

		"%l_contd_testing": "Continued Testing",
		"%l_keep_test": "Keep testing hypotheses",
		"%l_you_never": "You are never complete!",
		"%l_remember_your": "Remember your MVP",
		"%l_slidenote_contd_testing": "Many of our app developers build in analytics so they can test UX even after they publish their apps. Features that aren't used, actions that are performed incorrectly, etc. are logged and improved or removed in the next release.<br/>Remember your minimum viable product<br/>If nothing else, make sure you provide true value to your user, and that you are satisfying their needs.",

		"%l_qa": "Q&amp;A",
		"%l_slidenote_qa": "There is no lab for this lesson.",

	}
});
