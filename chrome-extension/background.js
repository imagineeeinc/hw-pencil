/*
chrome.runtime.onInstalled.addListener(async () => {
  let url = chrome.runtime.getURL("popup.html");
  let tab = await chrome.tabs.create({ url });
  console.log(`Created tab ${tab.id}`);
});
*/

chrome.action.onClicked.addListener(function (tab) {
	// for the current tab, inject the "inject.js" file & execute it
	chrome.tabs.executeScript(tab.ib, {
		file: 'inject.js'
	});
});