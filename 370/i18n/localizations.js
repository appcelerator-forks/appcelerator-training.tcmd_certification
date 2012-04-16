/*
	Localization strings file. To translate, copy the entire "en-US" branch, paste in as new member of the object, 
	set its name to be the two-letter language code, and translate each string.
	As shown, strings can include simple HTML.
*/
String.toLocaleString({
	"en-US": {
		"%l_filetitle": "Extending Titanium",
		"%l_subtitle": "Advanced Titanium Mobile Development",
		"%l_lessontitle": "Extending Titanium",
		"%l_slidenote_titleslide": "<b>Module time: 30 mins</b>(10 mins teaching, 20 mins for lab)",

		"%l_agenda_title": "Agenda",
		"%l_agenda1": "Basic Titanium Internal Architecture",
		"%l_agenda2": "Object Model",
		"%l_agenda3": "Building Modules",
		"%l_agenda4": "Distributing and Installing Modules",
		"%l_agenda5": "Resources",
		"%l_slidenote_agenda": "<b>This presentation is intended as a starting point for developers with native development knowledge wishing to get into module development.  This is not an extensive tutorial, but rather an introduction to the process.<br><b>Basic Arch…</b><br>will introduce audience to the basic structure of Titanium in terms of internal implementation, including the Kroll micro kernel<br><b>Object Model</b><br>will introduce the key objects and vocabulary for building modules, like Proxy objects, and will cover serialization and conversion of values from native types to JS objects<br><b>Building modules</b><br>will cover how to use titanium SDK to build/package modules<br><b>distributing and installing</b><br>will cover how to distribute and install a custom module in a titanium app<br><b>resources</b><br>go over docs and help resources available</b>",

		"%l_disclaimer": "Disclaimer!",
		"%l_slidenote_disclaimer": "Just so you know, the presenter is not an expert in native development for iOS and Android (probably).  The intent of this presentation is to brief you on the basics of how Titanium works and to point you in the right direction for further exploration.",
		
		"%l_we_know": "We all know the basics...",
		"%l_ti_main_arch_image": "<img src='images/ti-main-arch.png' style='margin-top:5px;height:350px;'/>",
		"%l_slidenote_ti_arch_1": "discuss titanium mobile app architecture – JavaScript files comprise application and communicate with native APIs through a bridge layer",
		"%l_ti_arch": "Titanium Architecture",
		"%l_ti_arch_image": "<img src='images/ti-arch.png' style='margin-top:5px;height:250px;float:right;'/>",
		"%l_but_now": "...but now we need to understand the bridge",
		"%l_how_is": "How is a Titanium app packaged?",
		"%l_how_do": "How do I create new behaviors in native code?",
		"%l_js_api": "How do I create a JS API?",
		"%l_slidenote_ti_arch": "<b>…but now</b><br>in order to extend Titanium, we need to understand the bridge implementation for Titanium Mobile<br><b>packaged?</b><br>we need to understand how a titanium app is packaged at a high level, and what those python scripts are doing to our JS project to package it up<br><b>native code?</b><br>we need to understand how native APIs are packed into a Titanium application<br><b>JS API?</b><br>How do we expose native APIs to JavaScript and pass data between them?",
		"%l_when_app": "When a Titanium app launches...",
		"%l_native_starts": "Native app starts - activity is launched (Android) or app delegate is run (iOS)",
		"%l_js_context": "A JavaScript context is created (Rhino/V8 or JSCore)",
		"%l_js_app": "JS app is evaluated starting with app.js",
		"%l_js_comm": "JS Context communicates with C/Java code",
		"%l_bridge": "The 'bridge' between them is what we call Kroll",
		"%l_slidenote_when_app": "Take you through the lifecycle in very general terms…",
		
		"%l_the_kroll": "The Kroll Microkernel",
		"%l_what_kroll": "What is Kroll?",
		"%l_met_process": "Metallurgical process by which titanium (the element) is created",
		"%l_name_given": "The name given to the 'cross-language, cross-platform binding and invocation framework'",		
		"%l_microkernel": "It is a microkernel",
		"%l_what_kernel": "What is a kernel?",
		"%l_in_os": "In an OS, it is the bridge between software and hardware",
		"%l_in_ti": "In Titanium, it is the bridge between JavaScript & native code",
		"%l_kroll_url": "https://github.com/appcelerator/kroll",
		"%l_kernel_url": "http://en.wikipedia.org/wiki/Kernel_(computing)",

		"%l_slidenote_what_kernel": "Why do we call it kroll<br>What is a kernel",
		
		"%l_ti_mods": "Titanium Modules",
		"%l_every_ti": "Every Titanium module is plugged into Kroll's microkernel architecture",
		"%l_ti_mods_image": "<img src='images/ti-modules.png' style='margin-top:5px;height:300px'/>",
		"%l_slidenote_ti_mods": "Note that even titanium modules for UI, Database, etc have this same structure – as you get into module development, look to core modules to see how things are done in ObjC or Java<br>Titanium ObjC modules must extend TiModule<br>Titanium Java modules must extend KrollModule",
		
		"%l_mod_obj": "Module Object Model",
		"%l_proxy": "Proxy - base class that represents the native binding between your JavaScript and native code (a module will have at least one proxy)",
		"%l_view": "View - actual native representation of a view object (for UI components)",
		"%l_viewproxy": "ViewProxy - represents model data (state of the View, in case the View must be released for memory management) and exposes the JavaScript API & events",
		"%l_module_spl": "Module - specialized type of Proxy that describes a specific API set, or namespace",
		"%l_slidenote_mod_obj": "the object model is slightly different between iOS and Android.  in iOS, the top level module (i.e. Ti.MyModule) is just a Proxy.  In Android, it’s called a “Module”.  they both function as top-level, static interfaces to native code<br>a proxy is an object that interfaces directly with native code – non-visual modules will just use these objects<br>a visual module will need to implement a view, which is a native representation of a visual component, and a ViewProxy, which contains the state information for a View.  The View could be hidden and removed from memory, but the ViewProxy would still contain information about that view (like the title of a window, background color of a view, etc.)<br>View proxy is a sub class of proxy",
		
		"%l_mod_js": "Module JavaScript Interfaces",
		"%l_proxy_props": "Proxy objects can have public properties:",
		"%l_osname": "-  Ti.Platform.osname",
		"%l_proxy_pub": "Proxy objects can have public methods:",
		"%l_create_win": "-  Ti.UI.createWindow",
		"%l_proxy_listen": "Proxy objects can emit and listen for events:",
		"%l_foo": "-  Ti.App.addEventListener('foo', function(){});",
		"%l_slidenote_mod_js": "",
		
		"%l_ios_proxy": "iOS - Proxy Property",
		"%l_ios_proxy_image": "<img src='images/ios-proxy.png' style='margin-top:5px;height:400px;'/>",
		"%l_slidenote_ios_proxy": "Here’s how you’d create a property on an iOS proxy object",
		
		"%l_andr_proxy": "Android - Proxy Property",
		"%l_andr_proxy_image": "<img src='images/andr-proxy.png' style='margin-top:5px;height:400px;'/>",
		"%l_slidenote_andr_proxy": "Must explicitly declare property as public for it to be visible in JavaScript land",
		
		"%l_ios_method": "iOS - Proxy Method",
		"%l_ios_method_image": "<img src='images/ios-method.png' style='margin-top:5px;height:400px;'/>",
		"%l_slidenote_ios_method": "Must implement one of a couple valid signatures (see the wiki)<br>One or more arguments passed in are all accessible via the single NSArray args array",
		
		"%l_andr_method": "Android - Proxy Method",
		"%l_andr_method_image": "<img src='images/andr-method.png' style='margin-top:5px;height:400px;'/>",
		"%l_slidenote_andr_method": "",
		
		"%l_ios_event": "iOS - Event Handlers for Proxy",
		"%l_ios_event_image": "<img src='images/ios-event.png' style='margin-top:5px;height:400px;'/>",
		"%l_slidenote_ios_event": "To react to the adding or removing of event listeners, override the listenerAdded and listenerRemoved methods<br>These methods are automatically invoked when a corresponding JavaScript event listener is added or removed",
		
		"%l_andr_event": "Android - Event Handlers for Proxy",
		"%l_andr_event_image": "<img src='images/andr-event.png' style='margin-top:5px;height:400px;'/>",
		"%l_slidenote_andr_event": "",
		
		"%l_add_event": "Adding Event Handlers for Proxy",
		"%l_add_event_image": "<img src='images/add-event.png' style='margin-top:5px;height:180px;'/>",
		"%l_slidenote_add_event": "This JS api is what corresponds to the native code on the two preceding slide",
		
		"%l_fire_event": "Firing an Event on a Proxy Object",
		"%l_both_proxy": "Both Proxy base classes have a 'fireEvent' method",
		"%l_use_this": "Use this to fire an event back up to a JavaScript object",
		"%l_any_events": "Any events fired from native land via 'fireEvent' can be listened for on a JavaScript object via 'addEventListener'",
		"%l_slidenote_fire_event": "",
		
		"%l_type_bridge": "Type Conversions Across The Bridge",
		"%l_both_platforms": "Both platforms provide utilities for type conversion, both JS >> Native Classes and Native Classes >> JS",
		"%l_some_simple": "Some simple types like Strings and Booleans auto convert",
		"%l_check_other": "Check other module implementations for type conversion examples",
		"%l_slidenote_type_bridge": "",
		
		"%l_build_module": "Building your Module",
		"%l_build_module_image": "<img src='images/build-module.png' style='margin-top:5px;height:400px;'/>",
		"%l_slidenote_build_module": "When it comes time to write your own, titanium.py is the tool you’ll use to create your starting Java or Xcode project",
		
		"%l_distr_module": "Distributing your Module",
		"%l_distr_module_image": "<img src='images/distr-module.png' style='margin-top:5px;height:400px;'/>",
		"%l_slidenote_distr_module": "You have to include the JS via CommonJS require()",
		
		"%l_resources": "Resources",
		"%l_dev_guides": "Platform specific module dev guides on wiki",
		"%l_moddev": "<a href='https://github.com/appcelerator/titanium_modules/'>https://github.com/appcelerator/titanium_modules/ --> see the moddevguide</a>",
		"%l_ti_mob": "<a href='https://github.com/appcelerator/titanium_mobile'>https://github.com/appcelerator/titanium_mobile</a>",
		"%l_again_best": "Again, best resource is existing core Ti modules",
		"%l_anything_core": "Anything core Titanium does, you can do in your module",
		"%l_slidenote_resources": "Guides on our wiki document at least the basics of the process<br>The ModDevGuide project on GitHub shows sample code for iOS & Android and includes lots of boilerplate samples to get you started<br>GitHub is where you’ll find our core Titanium distro which you can examine for techniques and features<br>For existing modules, the Ti.Platform module is fairly straightforward for basic stuff. Look at the UI widgets to see how you’d make a module with a visual/UI component",

		"%l_qa": "Q&amp;A",
		"%l_slidenote_qa": "",
		
		"%l_lab_goals": "Lab Goals",
		"%l_follow_steps": "Follow the steps in the iOS (or Android) module development wiki guide",
		"%l_create_sample": "Create the sample module that guide describes",
		"%l_use_that": "Use that module in a Titanium project",
		"%l_slidenote_lab_goals": ">We will follow along with the module dev guides and try a custom module ourselves.  This is a 'kick the tires' type exercise",
		
		"%l_lab": "Lab",
		"%l_slidenote_lab": "There is no specific TiBountyHunter tie in here – the exercise is going through the module development guides"

	}
});
