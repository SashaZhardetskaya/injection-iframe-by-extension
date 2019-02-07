

setTimeout(() => {
  console.log('SET TIMEOUT WORKED!');
  var iframe = document.createElement('iframe');
  // iframe.style.display = "none";
  // iframe.src = 'http://recognition.10.55.39.17.xip.io';
  iframe.style.display = 'chrome-extension://ffhpppcepenmeegpjndakheolopiafen/html/index.html';
  // document.body.appendChild(iframe);
  window.document.body.appendChild(iframe)
}, 2000);