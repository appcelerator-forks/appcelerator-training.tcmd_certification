Ti.include('env.js'); //bootstrap context

var ui = require('modules/ui/core');

var tabs = ui.tabGroup(
	{title:'New', window:'new', icon:'tabs/new'},
	{title:'Purchased', window:'purchased', icon:'tabs/purchased'},
	{title:'Browse', window:'browse', icon:'tabs/browse'},
	{title:'Account', window:'account', icon:'tabs/account'}
);

tabs.open();