// var speed = prompt("Speed?");
// console.log(speed);
// if (speed!==null){document.getElementsByClassName('html5-main-video')[0].playbackRate = speed;};

// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     chrome.tabs.executeScript(
//         tabs[0].id,
//         {code: 'var speed = prompt("Speed?");if (speed!==null){document.getElementsByClassName('+'html5-main-video'+')[0].playbackRate = speed;};' });
//   });
  chrome.tabs.executeScript(null,
    {code:"var speed = prompt(\"Speed?\");if (speed!==null){document.getElementsByClassName('html5-main-video')[0].playbackRate = speed;}"});
window.close();




/*

javascript:(function(){var speed = prompt("Speed?");if (speed!==null){document.getElementsByClassName('html5-main-video')[0].playbackRate = speed;}})();

*/