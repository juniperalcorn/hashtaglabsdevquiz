# Part 1

## 1. What is the difference between HTTP and HTTPS?
- HTTPS is secure--it is an extension of HTTP so it works the same way in communicating with the network, but because it is secure it encrypts or decrypts information on a page--usually for a user.

## 2. What is the difference between HTTP GET and POST?
- HTTP GET and POST are two different calls to the server. The GET call asks for data to be sent from the server to the website, whereas the POST call sends data from the website to the server.

## 3. What is the difference between the HTTP 2xx status codes and 4xx status codes?
- 2xx status codes report confirmation or affirmation of HTTP requests, whereas 4xx status codes report client-side errors.

## 4. What is ajax (conceptually, what does it do)? Describe a situation where it is useful.
- I am most familiar with AJAX around fetch() calls. AJAX allows for asynchronous web applications, or in other words allows for websites to HTTP GET or POST etc in the background while the webpage continues to function in other ways (displays aren't affected, other elements load and function). 

## 5. What is responsive design?
- Responsive design refers to websites which maintain design consistency across a range of window/viewport sizes. This can refer to designs which utilize CSS rules like flexbox or grid to change layout by expanding or shrinking elements, or wrapping elements, as the window size changes. It can also refer to CSS media-queries, which specify new CSS rules according to window size breakpoints.

## 6. What is the difference between these 3 CSS rules?

div {background:#fff;}
- This is a style rule that applies to all <div> tag elements in the HTML.

- #div {background:#fff;}
- This is a style rule that should apply to a single element with the id "div" (it need not be a <div> element itself at this point) (I say "should" because id should be used only once).

.div {background:#fff;}
- This is a style rule that applies to one or many elements with the class/className "div" (they need not be <div> elements themselves).

## 7. What is the difference between these 2 uses of the <script> tag?

<script src = "http://example.com/whatever.js"></script>
- This tag references a javascript file, where all of the javascript code is held, and calls that file when running the HTML. This tag will be read synchronously based on where it is placed in the HTML.

<script>var whatever = true</script>
- This tag only declares or updates the value of a specific variable. When this is read synchronously within the HTML file, it may interact dynamically with other scripts. From just this snippet, it doesn't seem to affect much.

## 8. What is the difference between these two javascript snippets?

var x = function(){
    return 1+1;
}();
- This function is written and then called, which means that 2 (1+1) is returned.

var y = function() {
    return 1+1;
};
- This function has not been called, so nothing has been returned.