var newTab = false;
var optionsLoaded= false;

function createTabInWindow(window)
	{
	if(window.type === "normal")
		{
		var url;
		if(newTab == true) url = "newTab.html";
		else url = "blank.html";
		chrome.tabs.create({"windowId": window.id, "index": 0, "url": url, "active": false, "pinned": true});
		}
	}

function checkIfFirstTabIsOurs(window)
	{
	var regex
	if(newTab == true) regex = "^chrome-extension\:\/\/.+newTab\.html$";
	else regex = "^chrome-extension\:\/\/.+blank\.html$";
    var regExpr = new RegExp(regex);
	
	if(typeof window.tabs != 'undefined' && window.tabs[0].url.search(regExpr) != -1)
		{
		return true;
		}
	return false;
	}

function initialCheck(windows)
	{
	var index;
	for (index = 0; index < windows.length; ++index)
		{
		if(!checkIfFirstTabIsOurs(windows[index])) createTabInWindow(windows[index]);
		}
	}

function additionalCheck(windows)
	{
	var index;
	for (index = 0; index < windows.length; ++index)
		{
		if(!checkIfFirstTabIsOurs(windows[index])) createTabInWindow(windows[index]);
		if(windows[index].type === "normal" && windows[index].tabs.length == 1 && newTab == false)
			{
			chrome.tabs.create({"windowId": windows[index].id, "index": 1, "url": "chrome://newtab", "active": true});
			}
		}
	}

function tabRemoved(tabId, removeInfo)
	{
	if(removeInfo.isWindowClosing == false) chrome.windows.getAll({populate: true}, additionalCheck);
	}

function tabDetached(tabId, detachInfo)
	{
	chrome.windows.getAll({populate: true}, additionalCheck);
	}

function tabActivated(activeInfo)
	{
	if(typeof activeInfo.windowId != 'undefined') chrome.windows.get(activeInfo.windowId, { "populate": true },
		function (window)
			{
			if(window.tabs[0].active == true)
				{
				if(newTab == true) chrome.tabs.create({"windowId": window.id, "url": "chrome://newtab", "active": true});
				else chrome.tabs.update(window.tabs[1].id, {active: true});
				}
			});
	}

function updateOptions()
	{
	chrome.storage.sync.get({ newTab: false },
		function(items)
			{
			if(newTab != items.newTab)
				{
				newTab = items.newTab;
				
				var url;
				if(newTab == true) url = "newTab.html";
				else url = "blank.html";
				
				chrome.windows.getAll({ "populate": true },
					function (windows)
						{
						var index;
						for (index = 0; index < windows.length; ++index)
							{
							if(windows[index].type === "normal")
								{
								chrome.tabs.update(windows[index].tabs[0].id, { "url": url });
								}
							}
						});
				}
			});
	}

// load options from storage
//restoreOptions();

// create windows when chrome or extension is started
chrome.windows.getAll({populate: true}, initialCheck)

updateOptions();

// add listeners
chrome.windows.onCreated.addListener(createTabInWindow);

chrome.tabs.onRemoved.addListener(tabRemoved);
chrome.tabs.onDetached.addListener(tabDetached);

chrome.storage.onChanged.addListener(updateOptions);

chrome.tabs.onActivated.addListener(tabActivated);
