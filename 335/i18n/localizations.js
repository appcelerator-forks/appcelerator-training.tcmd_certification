/*
	Localization strings file. To translate, copy the entire "en-US" branch, paste in as new member of the object, 
	set its name to be the two-letter language code, and translate each string.
	As shown, strings can include simple HTML.
*/
String.toLocaleString({
	"en-US": {
		"%l_filetitle": "API Deep Dive: Scroll Views",
		"%l_subtitle": "Advanced Titanium Mobile Development",
		"%l_lessontitle": "API Deep Dive: Scroll Views",
		"%l_slidenote_titleslide": "<b>Module time: 60 mins</b><br/>(30 mins teaching, 30 mins lab)",

		"%l_agenda_title": "Agenda",
		"%l_agenda1": "ScrollViews and ScrollableViews",
		"%l_agenda2": "ScrollViews in depth",
		"%l_agenda3": "ScrollableViews in depth",
		"%l_agenda4": "Web views as scrollable containers",
		"%l_slidenote_agenda": "In this module, we'll look at the three types of scrolling content containers",

		"%l_scroll_vs": "Scroll vs. Scroll",
		"%l_scroll_vs_image": "<img src='images/scroll-vs.png' style='margin-top:5px;height:640px;;'/>",
		"%l_slidenote_scroll_vs": "ScrollView &mdash; scrollable area of content, doesn't have to fill viewport, scroll in either direction<br>ScrollableView &mdash; screen-size content area with 'page' indicator<br>sort of like a filmstrip of views shown within a container<br>views snap into place: you can't end up halfway between views after a swipe",

		"%l_basic_scroll": "Basic ScrollView",
		"%l_basic_scroll_image": "<img src='images/basic-scroll.png' style='margin-top:5px;width:320px;'/>",
		"%l_basic_scrollview_code": "\nvar sv = Ti.UI.createScrollView({\n   /* properties */\n});\n ",
		"%l_basicSV": "Key Properties: ",
		"%l_basicSV1": "height / width",
		"%l_basicSV2": "contentHeight / contentWidth",
		"%l_basicSV3": "showHorizontalScrollIndicator / showVerticalScrollIndicator",
		"%l_basicSV4": "scrollType (vertical or horizontal, Android only)",
		"%l_slidenote_basic_scroll": "Height/width = what's visible to the user &mdash; this is like the size of a porthole through which you're viewing the content<br/><br>Content height/width are dimensions of the actual content",
		
		"%l_deeper_dive": "Deeper Dive into ScrollViews",
		"%l_content_height": "Content height & width",
		"%l_auto_vs": "Auto vs. specified size",
		"%l_zoom_content": "Zooming content",
		"%l_zoomScale": "zoomScale",
		"%l_minZoomScale": "minZoomScale",
		"%l_maxZoomScale": "maxZoomScale",
		"%l_ios_scrollviewV2": "canCancelEvents to block subview events",
		"%l_slidenote_deeper_diveV2": "Set content height to auto and it will scroll just enough to show the content.<br>Set it to a specific size and that's all you'll get. Content could get cut off or scroll could continue well past available content<br>Users can zoom in/out, which you can control<br/><br/><code>canCancelEvents</code> = boolean = whether the ScrollView would block touch-related events from passing into the view that's being scrolled. For example, to block a scroll event being fired on a child ScrollView, thus stopping the parent from scrolling.",
		
		"%l_scrollview_diff": "ScrollView - Platform Differences",
		"%l_android_scrollview": "Android - scroll horizontal <i>or</i> vertical, not both",
		"%l_bounce": "iOS - Set 'bounce' at limits of scroll contents:",
		"%l_horizontalBounce": "horizontalBounce",
		"%l_verticalBounce": "verticalBounce",
		"%l_slidenote_scrollview_diffV2": "Bounce properties are booleans that turn off or on the bounce effect.",
		
		"%l_scrollview_events": "ScrollView events",
		"%l_scrollview_code": "\nsv.addEventListener('scale', function(e) {\n   alert('You zoomed to ' + e.scale * 100 + '%');\n});\n ",
		"%l_basicSVEvt": "Key Events", 
		"%l_basicSVEvt1": "click / dblclick", 
		"%l_basicSVEvt2": "scroll", 
		"%l_basicSVEvt3": "scale", 
		"%l_basicSVEvt4": "touchstart, touchend, touchmove, touchcancel", 
		"%l_basicSVEvt5": "swipe", 
		"%l_basicSVEProp": "Event object properties:", 
		"%l_basicSVEProp1": "x / y and globalPoint", 
		"%l_basicSVEProp2": "source", 
		"%l_basicSVEProp3": "type", 
		"%l_basicSVEProp4": "decelerating (scroll)", 
		"%l_basicSVEProp5": "dragging (scroll)", 
		"%l_basicSVEProp6": "scale (scale)", 
		"%l_basicSVEProp7": "direction (swipe)", 
		"%l_slidenote_scrollview_events": "Primary difference from other views would be the scale event<br>Additional event object properties",
		
		"%l_basic_scrollable": "Basic ScrollableView",
		"%l_basic_scrollable_image": "<img src='images/basic-scrollable.png' style='margin-top:5px;width:320px;'/>",
		"%l_basic_scrollableview_code": "\nvar sav = Ti.UI.createScrollableView({\n   /* properties */\n});\n ",
		"%l_basicSAV": "Key Properties",
		"%l_basicSAV1": "height / width",
		"%l_basicSAV2": "view",
		"%l_basicSAV3": "showPagingControl",
		"%l_basicSAV4": "currentPage",

		"%l_slidenote_basic_scrollable": "views is an array of standard views that are shown within the ScrollableView<br>pagingControl &mdash; white dots on iOS, arrows on Android<br>by default set to false (don't show) in 1.8+<br>On Android, use pagingControlTimeout to control time when arrows disappear (=0 to always show)<br>currentPage is an integer specifying which view to show when the scrollableview is rendered",
		
		"%l_deeper_dive_scrollableviews": "Deeper Dive into ScrollableViews",
		"%l_cust_page": "Customize the paging controller",
		"%l_pagingControlColor": "pagingControlColor",
		"%l_scrollToView": "scrollToView()",
		"%l_param_int": "@param = integer or object reference to view",
		"%l_addview": "addView(), removeView()",
		"%l_param_obj": "@param = object reference to view",
		"%l_slidenote_deeper_dive_scrollableviews": "On iOS, you can change the background of the paging area but not the color of the dots.<br/><br/>On Android, the paging control is the set of arrows; setting the height also sets the width (square dimensions)",
		
		"%l_scrollableview_diff": "ScrollableView - Platform Difference",
		"%l_ios_scrollableview": "iOS - cacheSize (integer) is number of views to prerender",
		"%l_ios_svpaging": "iOS - pagingControl alpha and overlay",
		"%l_slidenote_scrollableview_diffV2": "<code>cacheSize</code> is the number of views that will be pre-rendered to graphics memory prior to being scrolled into view. Number is adjusted per: <code>(currentPage +/- (cacheSize - 1)/2), ROUNDED DOWN for even values (i.e. cacheSize=4 renders 3 views into the cache.)</code> <br/><br/>On iOS, you can set the pagingControl (bar &amp; dots) to be on top and even overlay the content (rather than outside content). And, you can set its alpha so that it blends with the overlaid content.",
		
		"%l_scrollableview_events": "ScrollableView events",
		"%l_scrollableview_events_image": "<img src='images/scrollableview-events.png' style='margin-top:5px;height:640px;'/>",
		"%l_slidenote_scrollableview_events": "",

		"%l_scrollable_events": "ScrollableView events",
		"%l_scrollable_events_code": "\nsav.addEventListener('scroll', function(e) {\n   alert('You\'re on page ' + e.currentPage);\n});\n ",
		"%l_basicSAVEvt": "Key Events", 
		"%l_basicSAVEvt1": "click / dblclick", 
		"%l_basicSAVEvt2": "scroll", 
		"%l_basicSAVEvt3": "touchstart, touchend, touchmove, touchcancel", 
		"%l_basicSAVEvt4": "swipe", 
		"%l_basicSAVEProp": "Event object properties:", 
		"%l_basicSAVEProp1": "x / y and globalPoint", 
		"%l_basicSAVEProp2": "source", 
		"%l_basicSAVEProp3": "type", 
		"%l_basicSAVEProp4": "currentPage (scroll)", 
		"%l_basicSAVEProp5": "direction (scroll)", 
		"%l_slidenote_scrollable_events": "",


		
		"%l_webviews": "WebViews",
		"%l_content_area": "Scrollable content area",
		"%l_ti_js": "Titanium <i>or</i> Javascript scrolling and touch events, but not both",
		"%l_caveats": "Caveats:",
		"%l_dont_put": "Don't put WebViews into other scrollable containers",
		"%l_res": "Resource expense",
		"%l_slidenote_webviews": "<ul><li>Set scalePageToFit to false so content isn't scaled, then scrolling should be automatically supported</li><li>You can manage Titanium style touch related events, or handle them with Javascript within your HTML content, but not both</li><li>You'll encounter problems if you put web views into other scrollable containers, such as tables, scroll views, etc. Touch related events might not be handled in the way you expect.</li><li>Also, remember that web views are among the most resource expensive UI components. Use them with that forethought.</li></ul>",
		
		"%l_qa": "Q&amp;A",
		"%l_slidenote_qa": "",
		
		"%l_lab_goals": "Lab Goals",
		"%l_use_both": "Use both ScrollView and ScrollableView in an app",
		"%l_use_scroll": "Use ScrollView as tab-strip style component",
		"%l_will_control": "It will control what is shown in the ScrollableView",
		"%l_labURL": "<a href='https://wiki.appcelerator.org/display/td/335+-+ScrollView+API+Deep+Dive'>wiki.appcelerator.org/display/td/335+-+ScrollView+API+Deep+Dive</a>",

		"%l_slidenote_lab_goals": "In this lab, you will create a scroll view containing a list of baseball players. That list will extend left/right beyond the width of the viewport. When the user taps a player's name, three images of that player will be displayed in a scrollable view located below the scroll view.",
		
		"%l_lab": "Lab",
		"%l_slidenote_lab": "In TiBountyHunter, point out the use of the scroll view in DetailWindow.js &mdash; it is used to segment detail information about the fugitive, like the fugitive description and their location on a map (unimplemented, but easily could be)."

	}
});
