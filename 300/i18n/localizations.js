/*
	Localization strings file. To translate, copy the entire "en-US" branch, paste in as new member of the object, 
	set its name to be the two-letter language code, and translate each string.
	As shown, strings can include simple HTML.
*/
String.toLocaleString({
	"en-US": {
		"%l_filetitle": "Performance Optimization",
		"%l_subtitle": "Advanced Titanium Mobile Development",
		"%l_lessontitle": "Performance Optimization",
		"%l_slidenote_titleslide": "<b>Module time: 60 minutes</b><br/>(30 mins teaching, 30 mins lab)",

		"%l_agenda_title": "Agenda",
		"%l_agenda1": "Performance tips and tricks",
		"%l_agenda2": "Code organization in large projects",
		"%l_agenda3": "Dos and Don'ts",
		"%l_agenda4": "Lab",
		"%l_slidenote_agenda": "",

		"%l_perf_opt": "Performance Optimization in Ti",
		"%l_small_med": "For small-medium apps, not a concern usually",
		"%l_apps_complex": "As apps become complex, Titanium can't shield you from memory management",
		"%l_computation": "Computation is usually not bottleneck, RAM is",
		"%l_managing_memory": "Managing memory usually means management of UI components",
		"%l_slidenote_perf_opt": "Need to worry about running out of resources<br>The biggest concern is running out of memory<br>Mostly that means getting rid of things you no longer need",

		"%l_js_garbage": "JavaScript Garbage Collection",
		"%l_auto": "Automatic (you don't have to release memory)",
		"%l_obj_collect": "Objects collected when no references remain",
		"%l_mark": "'Mark and sweep'",
		"%l_force": "Force by removing all references",
		"%l_slidenote_js_garbage": "Garbage collection is automatic, you don't have to manually track and release memory<br>Objects are GC'd when no references remain<br>Mark &amp; Sweep:<ul><li>JS stops and scans</li><li>Marks all objects except those in use</li><li>Objects marked are instructed to shut down &amp; destroy</li><li>App execution resumes</li></ul><br>Force an object to be GC'd by removing all references to it<br>Can be tough as references can be 'hidden' in event listeners, closures, etc.",

		"%l_when_does": "When Does Titanium Clean Up?",
		"%l_window_closed": "When a window is closed (UI is cleaned up)",
		"%l_var_null": "When a variable holding a proxy object is set to null",
		"%l_mem_issues": "If you're running into memory issues, look to do one of these things.",
		"%l_note": "Note: Showing/hiding views will improve DRAW SPEED, but memory will still be in use",
		"%l_vimeo_url": "http://vimeo.com/29804284<br/>(Codestrong - Memory leaks talk)",
		"%l_slidenote_when_does": "Garbage management:<br><ul><li>When a window is closed, the object it contains are generally removed and memory freed</li><li>Manually &mdash; set a reference to null (proxy objects are the JS objects that represent the native equivalent)</li></ul><br>Use DDMS and Instruments to monitor memory usage, see when &amp; where you're running out of memory<br>Then you can take manual actions to clean up<br><br>Optional: Demo AppLeak project and fixing memory leaks now",

		"%l_displ_slow": "Window displaying Slowly?",
		"%l_app_slow": "Application startup too slow?",
		"%l_js_slow": "JS evaluation is slow",
		"%l_defer_js": "Defer JS loading!",
		"%l_slidenote_displ_slow": "Slow window open time is a common problem especially on Android<br/>App start-up time can be slow, especially on Android<br/>Rhino is slower than JavaScript Core/V8, but should be needed for only old (pre 2.2) devices, so go with V8 in most cases<br>You can use the Ti.Platform.runtime (SDK1.8+) to determine whether your code is running within Rhino or V8 &amp; branch accordingly",

		"%l_js_tips": "JavaScript loading tips",
		"%l_only_include": "Defer loading a script until it is <em>actually needed</em>",
		"%l_ti_include": "require() is best, Ti.include() is okay, but &ldquo;eval() is evil&rdquo;",
		"%l_dont_parse": "Don't parse JSON packaged with your app - put it inline in JavaScript",
		"%l_slidenote_js_tips": "Defer loading when possible<br>require()'d modules are not re-evaluated, though objects might need to be re-instantiated<br/>Don't use eval() unless you must<br/>parsing JSON is much slower than working with inline JS variables<br/>The DB is generally faster than parsine JSON<br>Older 'hack' of adding objects, functions, and values to Ti.App is no longer recommended. Generally this is disallowed and it can lead to many potentials for problems and crashes.",

		"%l_multi_contexts": "Multiple contexts can be good",
		"%l_large_apps": "In very large apps for which deferring script evaluation is critical, multiple contexts are a good choice",
		"%l_tab": "Tabbed apps are multicontext: one per tab",
		"%l_level_critical": "With multi contexts, app level events are critical",
		"%l_downside": "Downside - dependencies may be evaluated multiple times",
		"%l_slidenote_multi_contexts": "With multi-context, the code &amp; isn't evaluated and objects aren't instantiated until the user opens that window. The OS can also manage instantiated, but out-of-context resources such as a tab that was opened but isn't active",

		"%l_tableview_per": "Table View Performance",
		"%l_classnameexplanation": "className allows Titanium to cheat a bit<pre><code contenteditable>\nvar row = Ti.UI.createTableViewRow({\n   className: 'anystring'\n});\n </code></pre>",
		"%l_set_all": "Set all rows at the same time, don't call append 300 times",
		"%l_only_load": "Only load as much data as needed",
		"%l_if_your": "If your table has 1,000s of custom rows, you might need to rethink your UX design",
		"%l_slidenote_tableview_per": "<ul><li>Adding className enables Ti &amp; underlying OS to reuse table row objects and optimize memory</li><li>A setData() call for a lot of rows is faster than repeated appendRow() calls</li><li>Perhaps you can use alternate UI paradigm to create smaller tables</li><li><b>Dawson's Lazy Loaded Tables http://j.mp/rbL32h</b></li></ul>",

		"%l_db_per": "Database Performance",
		"%l_sql_fast": "SQL Queries are fast - use these rather than in-memory sorting of JS arrays, etc.",
		"%l_l_sql_transations": "Wrap multiple inserts in a transaction",
		"%l_ram": "Avoid loading Blobs into memory &mdash; RAM is the bottleneck",
		"%l_conn_mgmt": "Open/close connections with each use",
		"%l_l_sqlitefaq": "SQLite Optimization FAQ - http://j.mp/HFxVZ8",
		"%l_slidenote_db_per": "<ul><li>Filter data in SQL rather than via JS (sorting, searching, etc.)</li><li>Don't use 'select * from table' if you store blobs in your tables</li><li>Open/closing connections is generally more memory friendly than any performance benefits you'd get from keeping a connection open</li></ul>",

		"%l_net_per": "Network Performance",
		"%l_wifi": "Don't assume wifi - test on cell networks",
		"%l_decrease": "Decrease service payload sizes",
		"%l_existing": "Existing web service APIs aren't generally optimized for mobile - make mobile service APIs such that:",
		"%l_as_few": "As few requests are made as possible",
		"%l_as_small": "The data sets being returned are as small as possible<br/>(JSON helps for this)",
		"%l_slidenote_net_per": "<ul><li>Test in a real-world networking environment (in various data coverage areas)</li><li>Use DDMS &amp; other tools to simulate poorer network conditions</li><li>Decrease payload size (use JSON rather than SOAP for example)</li><li>If you have a lot of data to transfer, a few larger network requests is better than multiple smaller data transfers</li><li>Saves on battery if nothing else (min. time of radio on per network request can suck juice if you have lots of network requests)</li></ul>",

		"%l_battery": "Battery Optimization",
		"%l_battery1": "Critical on Android, important on iOS too",
		"%l_battery2": "Network and geolocation most critical concerns",
		"%l_battery_image": "<img src='images/android_radio_states.png' style='width:700px;'>",
		"%l_battery_moreinfo": "More info at:",
		"%l_l_batterymore1": "Android &mdash; http://j.mp/IDMk5H",
		"%l_l_batterymore2": "iOS &mdash; http://j.mp/IDMaeG",
		"%l_slidenote_battery": "Diagram from Google is for AT&amp;T cell radio, but similar case would exist for wifi and for iOS too.<br/>There's a delay transitioning between radio states. Example: per Google, if you query the network every 18 seconds you'll keep the radio continuously in the active state &mdash; continual battery drain <ul><li>Transfer in bursts</li><li>Don't poll the network without considering radio delays</li><li>Prefetch and cache</li><li>Disable location listeners as soon as you can</li></ul>",

		"%l_qa": "Q&amp;A",
		"%l_slidenote_qa": "",

		"%l_lab": "Lab Goals",
		"%l_analyze": "Analyze a memory leak",
		"%l_correct": "Correct the leak and test the app",
		"%l_labURL": "<a href='https://wiki.appcelerator.org/display/td/300+-+Performance+Optimization'>wiki.appcelerator.org/display/td/300+-+Performance+Optimization</a>",
		"%l_slidenote_lab_goals": "In this lab, you will examine an app that contains a memory leak. You'll apply a fix for that memory leak and test the results. You'll use the Instruments tool on the iOS platform for this lab. While Android testing is possible, the tools are less helpful and clear in the information they present.",

	}
});
