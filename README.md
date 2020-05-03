#Tsunami Android Webviews

Problem:
- Android doesn't support JS natively, and lots of the code we need is in JS. Ex. Tornado Cash proof generation

Solution:
- Make simple static webpages. Add them into an android app. Load them into a webview, and interface with a JavaScriptInterface of some sort
- If possible, don't include any remote JS files at all. Load everything locally to maximize privacy and timing analysis

## Tornado Cash

First attempt will be with Tornado Cash. They have a simple minimal demo that should be able to be integrated into a browser:
https://github.com/tornadocash/tornado-core/blob/a533ad9ffb62163a42d4fa9a09984c5dd4e5c41d/minimal-demo.js


