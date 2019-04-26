# Neural

## The idea

Inspired by your brief, I’ve built Neural,  a personal assistant who can help defeat Loki by providing useful information about him, to resemble  J.A.R.V.I.S. 

In my project, I have aimed at bringing forward Sky’s identity/values. The background is following the colours of Sky’s logo.  The idea to built the project as a challenge for which the chances to win are higher if you are working within a team  came from the fact that some of Sky’s values are team-working and collaboration.

## Running

>Open the Project folder using Visual Studio Code / Node.js

>Open terminal and type "npm install" in order to install all the dependencies

and

>"npm start" in order to launch the web page in your default browser

I've run the web page with chrome and firefox and worked as I expected with both of them

## Describing Neural and his features:

**Header / Header.js:** 
- Left side / HulkComponent.js:  contains a short movie, from assets folder.
- Middle / FileSystem.js: you will find the FileSystem icons (react-icons package, installed via npm). You can light them up by pressing any of the following letters: “f” or “F”
- Right side / LokiComponent.js: is wrapped a short movie, this time embedded from youtube (react-iframe package, installed via npm).

**Middle / Main.js:**
- Left side / Leftside.js: I’ve implemented a real google map using an API call. This map is useful to locate Loki in real time and is implemented using google-map-react package.
- Middle / Middle.js: this is where Neural is “living”, a neuronal network which is capable to provide useful info. This neuronal network effect is obtained by implementing react-particles package.
- Rightside / Rightside.js: here are some images of the enemy, from assets folder. You can light them up by pressing any of the following letters: [ 'q', 'w', 'e', 'r', 't', 'y', 'Q', 'W', 'E', 'R', 'T', 'Y'].

**Footer / Footer.js**
Here is the welcome message and the report provided by Neural. 
