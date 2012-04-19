/*
	Localization strings file. To translate, copy the entire "en-US" branch, paste in as new member of the object, 
	set its name to be the two-letter language code, and translate each string.
	As shown, strings can include simple HTML.
*/
String.toLocaleString({
	"en-US": {
		"%l_filetitle": "Animation",
		"%l_subtitle": "Advanced Titanium Mobile Development",
		"%l_lessontitle": "Animation",
		"%l_slidenote_titleslide": "<b>Module time: 60 mins</b><br/>(30 mins teaching, 30 mins lab)",

		"%l_agenda_title": "Agenda",
		"%l_agenda1": "Animation Key Concepts",
		"%l_agenda2": "Basic property animation",
		"%l_agenda3": "2d and 3d Matrix Animations",
		"%l_agenda4": "Lab",
		"%l_slidenote_agenda": "",

		"%l_overview": "Animation Overview",
		"%l_visually_pickup": "Animations can help a user visually pick up on application state changes",
		"%l_can_help": "Can help make your app more engaging and dynamic (read: look cool)",
		"%l_essential": "Essential for games (a less often used application of Titanium, but becoming more popular)",
		"%l_overview": "Animation Overview",
		"%l_slidenote_overview": "",
		
		"%l_basic": "Basic Animation",
		"%l_for_simple": "For simple property animations, we use obj.animate()",
		"%l_basic_image": "<img src='images/basic.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_basic": "Background color animations on Android with SDK 1.8+",
		
		"%l_basic_obj": "Basic Animation With Object",
		"%l_hash": "Hash of properties are properties of a Ti.UI.Animation object",
		"%l_reuse": "To reuse animations, create an object which can be passed to animate():",
		"%l_basic_obj_image": "<img src='images/basic-obj.png' style='margin-top:5px;height:250px;'/>",
		
		"%l_matrix": "Matrix Animations",
		"%l_matrix_image": "<img src='images/matrix.png' style='margin-top:5px;height:380px;float:right;'/>",
		"%l_what_is": "What is a matrix?",
		"%l_matrix_url": "<a href='http://en.wikipedia.org/wiki/Matrix_(mathematics)'>http://en.wikipedia.org/wiki/Matrix_(mathematics)</a> if you care",
		"%l_for_animations": "For animations, it's a set of properties describing a transformation of an object in a way a computer can process and execute",
		"%l_provides_more": "Provides more options for animation",
		"%l_slidenote_matrix": "<ul><li>Matrix animations are for more complex animations</li><li>A matrix is a grid of values representing the properties of an object</li><li>You then transform starting to ending values of that matrix to animate the object</li></ul>",
		
		"%l_2d_matrix": "2D Matrix Animations",
		"%l_2d_matrix_image": "<img src='images/2d-matrix.png' style='margin-top:5px;height:440px;float:right;'/>",
		"%l_transform": "Transform objects in 2D Space",
		"%l_rotate": "Rotate",
		"%l_scale": "Scale",
		"%l_skew": "Skew",
		"%l_associated": "Associated with Animation object",
		"%l_slidenote_2d_matrix": "<ul><li>You can combine these transformations</li><li>These work on iOS and (mostly) on Android</li></ul>",
		
		"%l_2d_matrix_example": "2D Matrix Animation Example",
		"%l_2d_matrix_example_image": "<img src='images/2d-example.png' style='margin-top:5px;height:440px;'/>",
		"%l_slidenote_2d_matrix_example": "<ul><li>We don't have to worry about the matrix math</li><li>We create a matrix object and use one of its methods, such as rotate or scale</li></ul>",
		
		"%l_3d_matrix": "3D Matrix Animations (iOS)",
		"%l_matrix_3d_image": "<img src='images/3d.png' style='margin-top:5px;height:380px;float:right;'/>",
		"%l_transform_3d": "Transform objects in 3D Space",		
		"%l_slidenote_3d_matrix": "<ul><li>Same sorts of transformations, but in 3D space</li><li>Not supported on Android, API docs inaccurate on this</li></ul>",
		
		"%l_3d_matrix_example": "3D Matrix Animation Example",
		"%l_3d_matrix_example_image": "<img src='images/3d-example.png' style='margin-top:5px;height:440px;'/>",
		"%l_slidenote_3d_matrix_example": "<ul><li>Titanium.UI.iOS.3DMatrix as of 1.8 (was Ti.UI.3DMatrix earlier)</li><li>Set up 3D transformations in much the same way as 2D</li><li>Repeat and autoreverse properties for 2D and 3D transforms</li><li>Line 51 represents an access to an actual matrix value (e.g. row 3, column 4)</li></ul>",
		
		"%l_opacity": "Using Opacity",
		"%l_opacity_imp": "Opacity is an important property in animation",
		"%l_values": "Values:",
		"%l_val0": "0 is invisible",
		"%l_val1": "1 is totally opaque",
		"%l_scrollToView": "scrollToView()",
		"%l_dimming": "Dimming objects indicates they are unavailable",
		"%l_fading": "Fading in/out views makes UI state changes less jarring",
		"%l_demo_animating": "Demo: animating the opacity property",
		"%l_slidenote_opacity": "Animatable property<br>Has typical use scenarios – indicating a disabled or unavailable state<br><b>Demo</b><br>Use the finished code from Lab 340. Demonstrate working app, then examine app.js",
		
		"%l_transitions": "Transitions",
		"%l_ios_allows": "iOS allows for animated transitions between views and windows",
		"%l_can_open": "Can open window with a transition",
		"%l_can_transition": "Can transition between child views",
		"%l_demo_transitions": "Demo: Using transitions on iOS",
		"%l_slidenote_transitions": "<b>Demo</b>Use the finished code from Lab 340. Demonstrate working app, then examine app.js<br>OR<br>Demo: KitchenSInk<br><ul><li>Basic tab > Transitions</li><li>File is <b>transitions.js</b></li><li>~line 110 transition property in animate()</li></ul>",
		
		"%l_common_anim": "Common Animation Uses",
		"%l_window_transitions": "Window Transitions (already demoed)",
		"%l_view_opacity": "View opacity (already demoed)",
		"%l_slide_demo": "Slide - Demo",
		"%l_bounce_demo": "Bounce/Grow/Shrink - Demo",
		"%l_drag": "Drag and Drop",
		"%l_slidenote_common_anim": "<ul><li>Demo A: KitchenSink – Base UI tab, Animations > Basic</li><ul><li>file is: basic_animation.js</li></ul><li><Demo B: show the touchmove event listener</li><li>drop part would be the callback function: you'd determine the x/y and bounds of the dragged object, if it were in the right spot per your app's UI, then you'd take the appropriate actions</li><li>Drag & drop is not an automated / built-in function. You have to manually build that functionality</li></ul>",
		
		"%l_qa": "Q&amp;A",
		"%l_slidenote_qa": "",
		
		"%l_lab_goals": "Lab Goals",
		"%l_implement": "Implement basic animations",
		"%l_compare": "Compare animation capabilities across platforms",
		"%l_demo_wiki": "Demo and wiki URL",
		"%l_slidenote_lab_goals": "n this lab, you will animate three elements in a partially-completed app. You'll add code to fade an element out of view, then back into view; add code to slide an element off screen, then back; and you'll add code to transition between two views using iOS-specific functionality.",
		
		"%l_lab": "Lab",
		"%l_slidenote_lab": "There is no TiBountyHunter component which directly uses animation at this point, unless it is added in in the future."

	}
});
