# URL logger

## Description
Make an Express application in NodeJS on port 3000  which will have 3 routes:
1. Root route (http://localhost:3000)
2. About us route (http://localhost:3000/about-us)
3. 404 - everything else that isn't "root" or "about us" route

HTML output for each route is simple h1 that says "Welcome", "About us" or "404"

Every time someone visits any of these routes, you need to log current time (time of visit) and URL (req.url) into a text file.

Routes must not know anything about that logger (you shouldn't write anything related to logger within routes definition)

## Definition of done
* You have 3 routes, "Root", "About us" and "404" which display simple h1 element with the description of the page.
* Every time someone visits any page, you log something like this **16:42 - "/about-us"** to "URL_logger.txt" (each one in a new line)
* 

## You will fail
* if you require any module except ***express*** and ***fs***
* if you have any code related to logger within routes definitions
