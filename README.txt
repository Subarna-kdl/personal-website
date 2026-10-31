SUBARNA KANDEL - PERSONAL PORTFOLIO WEBSITE
===========================================

ABOUT
-----
A personal portfolio website for Subarna Kandel, a student leader and
technology enthusiast from Nepal. It is built with plain HTML, CSS and
JavaScript. There are no frameworks and nothing to install.

SECTIONS
--------
  - Home: introduction, tagline and photo spot
  - About me
  - Leadership
  - Projects
  - Skills and interests
  - Contact

The website works on phones, tablets and computers.


HOW TO OPEN IT
--------------

Files:
  index.html   the page and all of its text
  style.css    the design (colors, layout, fonts)
  script.js    the menu, contact links and back-to-top button

The header uses Google Fonts. Without internet the site still works, but
with a normal system font.


HOW TO EDIT
-----------
Add your photo
  Open index.html and find  <img id="pf" ... src="">  near the top.
  Put your picture in the same folder, for example photo.jpg, and set
  src="photo.jpg".

Add your contact links
  Open script.js. At the top you will find:

      var SITE_CONFIG = {
        email: '',
        facebook: '',
        instagram: '',
      };

  Type your email address and your full profile links between the quotes.
  Links you leave empty are hidden. If all of them are empty, the page
  says "My contact links will be added soon."

Change the text
  All the text is in index.html. Edit it in any text editor.
  Please check that every sentence is true and sounds like you.

Change the colors
  Open style.css. The main colors are:
    Dark navy  #0F172A
    Cyan       #06B6D4
    White      #FFFFFF

NOTES
-----
- The content comes only from the details of Subarna Kandel. No
  achievements, dates or contact details were invented.
- Zentobyte is described as a planned company, because it has not
  launched yet.
