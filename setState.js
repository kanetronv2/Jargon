// set state to saved state

chrome.storage.local.get(['SavedState'], function(result) {
      document.body.className = result.SavedState;
    });