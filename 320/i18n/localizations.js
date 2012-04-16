/*
	Localization strings file. To translate, copy the entire "en-US" branch, paste in as new member of the object, 
	set its name to be the two-letter language code, and translate each string.
	As shown, strings can include simple HTML.
*/
String.toLocaleString({
	"en-US": {
		"%l_filetitle": "API Deep Dive: Table Views",
		"%l_subtitle": "Advanced Titanium Mobile Development",
		"%l_lessontitle": "API Deep Dive: Table Views",
		"%l_slidenote_titleslide": "<b>Module time: 60 mins</b>(30 mins teaching, 30 mins for lab)",

		"%l_agenda_title": "Agenda",
		"%l_agenda1": "TableView Examples",
		"%l_agenda2": "TableView Basics and Beyond",
		"%l_agenda3": "Headers, Footers, and Sections",
		"%l_agenda4": "Events and Extras",
		"%l_slidenote_agenda": "In this module, we’ll look at some table examples<br>review tableview basics then go a bit further into what you can do with tables<br>we’ll look at headers, footers, and sections<br>we’ll wrap up with another look at events as well as some cross platform continuous scrolling solution",

		"%l_examples": "Examples",
		"%l_examples_image": "<img src='images/examples.png' style='margin-top:5px;height:350px;'/>",
		"%l_slidenote_examples": "Many options for formatting tables (seven total shown)",

		"%l_basic_tableview": "Basic TableView",
		"%l_basic_tableview_image": "<img src='images/basic-tableview.png' style='margin-top:5px;height:350px;'/>",
		"%l_slidenote_basic_tableview": "This is probably all review from BNAPPs",
		
		"%l_table_anonymous": "Table Rows with Anonymous Objects",
		"%l_table_anonymous_image": "<img src='images/table-anonymous.png' style='margin-top:5px;height:350px;'/>"
		"%l_slidenote_table_anonymous": "One option for adding rows is to use anonymous objects<br>Useful with JSON data pulled from a web service or database",

		"%l_table_obj": "TableViewRow Object",
		"%l_table_obj_image": "<img src='images/tableview-obj.png' style='margin-top:5px;height:350px;'/>"
		"%l_slidenote_table_obj": "You can also create TableViewRow objects<br>Useful when you want to manipulate the row’s properties before/after adding to the table<br>Saves cumbersome means of accessing the object within the table’s data array<br>As of SDK 1.8, appendRow() accepts row object, dictionary, or array (of rows/dictionary objects)",
		
		
		"%l_row_ind": "Row Indicators",
		"%l_row_ind_image": "<img src='images/row-ind.png' style='margin-top:5px;height:250px;'/>"
		"%l_slidenote_row_ind": "hasChild – indicates sub-table or additional rows<br>hasDetail – indicates a detail view or alert will appear when row is tapped (not supported on Android)<br>hasCheck – on/off or yes/no indicator",
		
		"%l_basic_table": "Basic Table and Row Properties",
		"%l_basic_table_image": "<img src='images/basic-table.png' style='margin-top:5px;height:450px;'/>"
		"%l_slidenote_basic_table": "Formatting can be done with standard TableViewRow properties<br>First row has different background image than middle rows<br>Not labeled, but the row’s foreground (text) color also set<br>The “other information…” text is added as a label rather than a standard row property",
		
		"%l_cust_rows": "Custom Table Rows",
		"%l_cust_rows_image": "<img src='images/cust-rows.png' style='margin-top:5px;height:350px;float:right;'/>"
		"%l_add_label": "Add labels, views, images to your rows",
		"%l_pos": "Positioning: relative to top-left of row",
		"%l_elements": "Elements accessible via children[]",
		"%l_slidenote_cust_rows": "You can add labels, views, and images to create custom rows<br>Point out the three labels<br>Point out the image views<br>The “plus” image is set with the row’s rightImage property",
		
		"%l_header_footer": "Headers and Footers",
		"%l_header_footer_image": "<img src='images/header-footer.png' style='margin-top:5px;height:450px;'/>"
		"%l_slidenote_header_footer": "",
		
		"%l_table_sections": "Table Sections",
		"%l_table_sections_image": "<img src='images/table-sections.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_table_sections": "Create sections, add rows to them<br>assign sections to table via an array added to the data property",
		
		"%l_table_searching": "Table Searching",
		"%l_table_searching_image": "<img src='images/table-searching.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_table_searching": "Same code, but different looks",
		
		"%l_ios_only_features": "iOS Only Features",
		"%l_ios_only_image": "<img src='images/ios-only.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_ios_only_features": "iOS only properties (table.editable = true) will be ignored on Android<br>You listen for the delete/move events and take action based on that",
		
		"%l_event_extras": "Event Extras",
		"%l_scroll_events": "Scroll Events - contentOffset (iOS only)",
		"%l_scroll_events_android": "Scroll Events - firstVisibleItem, visibleItemCount, totalItemCount (Android only)",
		"%l_dyn_scroll": "Dynamic scrolling Android workarounds<br>https://gist.github.com/903895<br>					https://gist.github.com/810391",
		"%l_slidenote_event_extras": "Use these events to create dynamic scrolling, also called continuous or infinite scrolling<br>See these gists as well as the Q&A forums for more info on creating cross-platform infinite scrolling solutions",
		
		"%l_qa": "Q&amp;A",
		"%l_slidenote_qa": "",
		
		"%l_lab_goals": "Lab Goals",
		"%l_create_custom": "Create custom table",
		"%l_doesnt_fill": "doesn't fill entire viewport",
		"%l_cust_background": "custom rows with backgrounds and child elements",
		"%l_table_listeners": "table event listeners that react differently depending on which child element receives the event",
		"%l_demoURL": "Demo and wiki URL",
		"%l_slidenote_lab_goals": "In this lab assignment, you will create a custom table that doesn’t fill the entire viewport. The table will contain customized rows with background images that differ based on the row’s location within the table. Each row will contain two images and two labels. When you tap a row, an event listener will determine if either of the images was the object that received the tap. If so, that image will be swapped with an alternate graphic.",
		
		
		"%l_lab": "Lab",
		"%l_slidenote_lab": "For TiBountyHunter walkthrough, focus on TableView skinning, found in FugitiveTableView.js – show how we use custom background images for the row, and mix/match built-in properties like leftImage/rightImage and custom layout with adding a label"

	}
});
