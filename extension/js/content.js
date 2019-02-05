

setTimeout(() => {
  console.log('SET TIMEOUT WORKED!');
  var iframe = document.createElement('iframe');
  // iframe.style.display = "none";
  iframe.src = 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options';
  // document.body.appendChild(iframe);
  window.document.getElementById('login').appendChild(iframe)
}, 4000);