// Saves options to chrome.storage
function save_options() {
  var newTab = document.getElementById('newTab').checked;
  chrome.storage.sync.set({ newTab: newTab }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    newTab: false
  }, function(items) {
    document.getElementById('newTab').checked = items.newTab;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
