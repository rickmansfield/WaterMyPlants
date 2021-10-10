# SPA & React Router 

## Client Side Application(CSA) Route Managmeent
- __ROUTE MANAGEMENT__ In this CSA we implemented route managment in the app.js.
- This might have been done in index.js for even better scalability.
- __CLIENT SIDE ROUTING (CSR)__ Our Routing is handled internally by the javascript that is already on the page. We call this client-side routing.
- __BONUS-No Page Refresh__ the benefit of CSR is the page won't refresh. The data is just there, displayed when we ask for it. How this works is that when a user clicks on a requested resource, instead of the client asking for that resource from the server via a URL, JavaScript will prevent this. We then get the resource (state) that is already available to us rendered out, and when using react, this happens beautifully through component-based architecture.
- __SWITCH TAG__ Hence, CSR allowed us to employed the switch tag to ensure visitors to the project see only what they "shuould" see. 
- __ORGANIZATION__ We organized this project at the component level for ease of future development. 
- __STATE MANAGEMENT__ Note this gives us the abilty to incorporate both global and local state and manipulate state with props as needed. 
__SEVER-SIDE ROUTING__ to contrast and understand why we employed Client Side Routing here is an overview of Server Side Routing. 
When we request information from a server (by clicking on a link or button), that server then sends back the document that was requested. For example, we click on a link and our URL changes to match the request, then the server goes and finds a template or some HTML file and sends it back across the world wide web to deliver that content to the user.

All of this is handled and achieved on the server, and there are a few things that happen here. First, the server will refresh the web page that we're looking at. This is because a new request was made for information, and the information given was a bunch of DOM elements, so we have to re-paint the web page. The information requested will be the only information given, no more, and no less. Because of this, we get the opportunity to load smaller portions of the webpage as opposed to requesting/loading the entire thing the whole time the way that we do in Client-Side Routing.

When you (the client) request a lot of information, your computer and subsequent internet-related devices run through a lot of protocols. The process can be really slow, especially when bandwidth is an issue.