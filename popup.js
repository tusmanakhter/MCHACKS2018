function getCurrentTabUrl(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, (tabs) => {
    var tab = tabs[0];
    var url = tab.url;
    console.assert(typeof url == 'string', 'tab.url should be a string');
    callback(url);
  });
}

function matosify() {
  chrome.tabs.executeScript({
    file: 'content_script.js'
  });
}

document.addEventListener('DOMContentLoaded', () => {
  getCurrentTabUrl((url) => {
    var button = document.getElementById('matosify');

    button.addEventListener('click', () => {
      matosify();
    });
  });
});