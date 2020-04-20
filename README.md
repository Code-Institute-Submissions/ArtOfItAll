# Art Of It All - v0.2 - Photos, Home Finished and Other Pages Added
The idea of this is displaying art from different artists for sale. 
Also, allowing customers to make personal requests for pieces of art they would like made. 
The site would also be an opportunity to help the artist get a foothold in the industry, 
for exposure and learning how to handle these types of situations before doing it on their own. 
The interaction I want for this are:-
* I'd like to use a market basket API; this hopefully would allow customers to add items to the basket for a later checkout
* I'd like to use an API that analyses the colour of the picture and suggest colours for walls
* I'd like to use a Google login API to allow customers to login and checkout with Google Pay
* I'd like to use an email API to send a response from a submitted form with the information about a job
* I'd like an API that is a calendar that shows how much work an artist has at the moment, 
 displaying how long it may take for a customers piece to complete. 

## UX

This website will have two target audiences. 
The first is customers who are looking into or wanting to buy art for there home. 
Also, customers that wish to request their ideas to be made. 
The other main target is the artists that want to get into the industry who need a little help getting their foot in the door.

For the customers, the site will be designed with ease of access in mind as much as possible. 
So, to achieve this, the navigation, login, header and light/dark toggle will be on a bar that sticks to the top of the page, 
I will do this so when they scroll; they can still navigate, change the theme and login or out without needing to scroll to the top of the page. 
Also, in the direction of ease of access navigation links to make searching the market place easier will be present to the market navigation tab in a dropdown menu. 
There will also be a few pages that explain how all these services work so they can read them and to help 
this there will be a contact form that they can complete to talk to Help department about any issues.

For artists, their art will display on the market page and past requests page. 
On these pages, there will be a description of the making process, 
the artist and the artist's thoughts on the piece. 
These descriptions will help the artist because it will help them learn how to show off their work, 
learn what types of questions they should be asking themselves when showing off their work and finally 
will help them start getting noticed in the artist industry. The contact form that customers can use to contact 
them will help the artist to understand interactions with customers and will help them learn to handle 
specific requests from customers. By this, I mean learn how to help customers get there idea created while also letting them know what is achievable.

For the design of the page, I will be using the Bootstrap grid method to make the page look organised and well-spaced. 
It will help with the response to smaller screen sizes for a better layout of all of the features. 
Also, for the design of the pages, a title will be at the top in the large text. So customers are reassured which page they are on. 
I hope to reinforce this with the current page highlighted on the navigation.

User Stories:-
Art enthusiast wants more art for there home; they want more landscapes. 
They open up on the home page and see a link to "Landscapes for Sale". 
They click on this and go to the market place with landscapes selected on the filter. 
They want fantasy designs, so they choose the fantasy filter. 
They find some pieces they like but want this to look it's best in there home, 
so they use the wall colour chooser to look at suggestions to paint their wall.

A fan of tattoos wants a personal design done, but they're not sure how to design it themselves. 
They see "Past Requested Art" and click the link to see what's there. They come across loads of designs; they find a filter for "Tattoos". 
When they see loads of good designs by one particular artist, they follow the link that says "Please use the Contact page to make personal requests!". 
They find the artist they want on the dropdown list of artist and write there request out.

Artist starting in the art business, they want to let people know their new art out. 
They see the social link for the page at the bottom, they click the link for Facebook and join the artist group under the websites Facebook page. 
They post the new art they have coming out here, and customers see and have a look at their craft.

A customer wants to make a personal request but isn't entirely sure how to go about it, 
they have managed to navigate to the contact page but is not sure how it should be laid out and not sure about what to say. 
They see the link for help at the top of the page before the request for; they click the link that leads them to the policies page and see "Request Details" subpage link. 
They look through the suggestions here on layout and what to say and head back to the contacts page through the navigation to make their request.

An artist gets a request but isn't sure how to handle it. 
They have managed to navigate to the Policies page and has had a look through its subpages but is still unsure. 
They then decide to try and get further help, on the Policies page they notice a help link, 
they follow this which leads to the contact page with the Help department selected in the contact form. 
They fill this out and are helped with their query. 

## Features

### UX Feature
* Sticky bar at the top with open button, site title, light/dark toggle and login button
* Open button and side navigation
* Light/Dark that changes the theme of the page except for the top bar and the footer
* Login that will allow people to login with Google
* Grid method throughout all pages using Bootstrap

### Home Feature
* Links to the market page that select filter settings, i.e. portrait links to the market page with portraits chose in filters
* Contact page link 
* Calendar that can be changed by the name selected on the dropdown list above the picture

### Market Feature
* Picture of the art displayed in a grid with price over the top of the picture and description underneath the picture
* A filter section on the right of the page that leaves picture with the correct class and removes the rest
* Clicking the picture will transition with a zoom in on the clicked image and show more information about the image
* Constantly updating basket at the top of the page, with a checkout button next to it

### Policies Features
* Three boxes with information about Policies Terms and Conditions, acceptable requests and service description
* The last two boxes will link to respective pages with more in-depth information about this
* The top will open a new page and download a document with more information on this

### Contact Features
* Link to Policies page for more information before the submitting a form
* A form with a dropdown for with all the different artist and the help department
* The form will have a name box for the person using it 
* The form will have a box that asks for the user's email
* The form will have a box for the request they want to put in, the text in there before they start typing will be an example

### Past Art Feature
* Will have a picture of the requested art in a grid
* Under the pictures will the artist, the buyer and a description

### Checkout feature
* Will have all the items in the current basket
* These items will have a ruff description, artist and price
* A total will be displayed, underneath it will be a total without VAT
* A checkout/pay button will be under that
* Finally there will be a link to help page for any queries

### Existing Features

#### UX Feature

##### Open button and side navigation

Open button - allows the user to press it and open a navigation that comes accross the side of the left hand side of the page/
To do this the Javascript code [sideNavMenu.js](assets/js/sideNavMenu.js) was written. It has two simple functions in it, 
the first is openNav() which sets the width of the side navigation div to 250px and does this with a transition for a smoother movement. 
The second is closeNav() which does the opsite.
Side Navigation - allows user to navigate to the other pages on the website, by clicking the page names on this side bar/
The headers on this div are wrapped in anchor links to the other pages allowing navigation.

##### Light/Dark Toggle

Light/Dark button - the user can change the theme of the page between a lighter and a darker theme, 
they do this by clicking the toggle button on the top headers
The Javascript code [lightDarkMode.js](assets/js/lightDarkMode.js) controls this and 
the button is styled in the [style.css](assets/css/style.css) with the class l-d-btn.
```javascript
if (this.checked) {
            trans()
            document.documentElement.setAttribute('data-theme', 'dark')
        } else {
            trans()
            document.documentElement.setAttribute('data-theme', 'light')
        }
```
This code uses an event listener to see if the box has been clicked and if its checked it changes the data-theme to dark.
These have css rules linked to them which change the pages apperance. 
And I use a transiton so background and headers change first then text follows soon after.

##### Grid method throughout all pages using Bootstrap
To keep a consitant size between all the pages and between the screen sizes I have used Bootstrap grid method to layout my pages, 
these are in light/dark containers so there style can be changed by the light/dark toggle.

#### Home Feature

##### Contact page link
This is simply done by h3 with some text above a h2 which is wrapped in an anchor link to the contact page.

##### Calendar
Artist Selector - the user can select the calendar of the artist they want, they do this by selecting the artist from a dropdown list
This is done by the [calendar.js](assets/js/calendar.js). All the calendar are hidden till a choice is made. 
The js waits till the document is ready then builds calendars for all the artist on the list with the data in the js folder, 
things like events, working times and days off stored as an object in the function.
```javascript
$(document).ready(function () {
    var calendarElmt = document.getElementById("show-artist10")

    var calendar = new FullCalendar.Calendar(calendarElmt, {
        plugins: ['dayGrid'],
        events: [
            {
                id: 'a',
                title: 'Personal Time',
                daysOfWeek:[ 1, 2],
            },
            {
                id: 'a',
                title: 'Public Piece',
                start: '2020-04-21',
                end: '2020-04-26',
            }
        ]
    });

    calendar.render();
});
```
This is the code from the FullCalendar libary, with the events I want set for each artist./
Then my code waits for a change in the selectors value and sets the display of the choosen option to show and hides the previous selection if there was one.
```javascript
$(document).ready(function () {
    $("div.calendar").hide()
    $('#changeCalendar').on('change', function () {
        var chosenOption = $(this).val();
        $("div.calendar").hide();
        $("#show" + chosenOption).show();
    });
});
```

### Features Left to Implement

#### UX Feature
* Sticky bar at the top with open button, site title, light/dark toggle and login button
* Open button and side navigation
* Light/Dark that changes the theme of the page except for the top bar and the footer
* Login that will allow people to login with Google
* Grid method throughout all pages using Bootstrap

#### Home Feature
* Links to the market page that select filter settings, i.e. portrait links to the market page with portraits chose in filters
* Contact page link 
* Calendar that can be changed by the name selected on the dropdown list above the picture

#### Market Feature
* Picture of the art displayed in a grid with price over the top of the picture and description underneath the picture
* A filter section on the right of the page that leaves picture with the correct class and removes the rest
* Clicking the picture will transition with a zoom in on the clicked image and show more information about the image
* Constantly updating basket at the top of the page, with a checkout button next to it

#### Policies Features
* Three boxes with information about Policies Terms and Conditions, acceptable requests and service description
* The last two boxes will link to respective pages with more in-depth information about this
* The top will open a new page and download a document with more information on this

#### Contact Features
* Link to Policies page for more information before the submitting a form
* A form with a dropdown for with all the different artist and the help department
* The form will have a name box for the person using it 
* The form will have a box that asks for the user's email
* The form will have a box for the request they want to put in, the text in there before they start typing will be an example

#### Past Art Feature
* Will have a picture of the requested art in a grid
* Under the pictures will the artist, the buyer and a description

#### Checkout feature
* Will have all the items in the current basket
* These items will have a ruff description, artist and price
* A total will be displayed, underneath it will be a total without VAT
* A checkout/pay button will be under that
* Finally there will be a link to help page for any queries

## Technologies Used

### Bootstrap
Used for the page and specific HTML element styling. Its primary use at the moment is its grid method for page format and look on smaller screens

### JQuery
Used for more effortless Javascript coding and dom manipulation

### Jasmine
Used to test Javascript code

### Font-Awesome
Used for a logo for different navigation links and some titles. Also used for social connections in the footer. Finally used for the dropdown logo on the navigation

### Google Font
Used for the font families for the whole page

### FullCalendar
I have used this to add a calendar to the bottom of the home page to show how busy artists are at the moment

## Testing
In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

Contact form:
Go to the "Contact Us" page
Try to submit the empty form and verify that an error message about the required fields appears
Try to submit the form with an invalid email address and verify that a relevant error message appears
Try to submit the form with all inputs valid and verify that a success message appears.
In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Deployment
This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:

Different values for environment variables (Heroku Config Vars)?
Different configuration files?
Separate git branch?
In addition, if it is not obvious, you should also describe how to run your code locally.

## Credits
Content
I have used lorem for description text to save time for better development

Media
The pictures for this page where obtained from Google search 
[paint1.jpg](assets/img/portraits/paint1.jpg) was on [Pinterest](https://www.pinterest.co.uk/pin/327707310359626455/?autologin=true) 
and it says it's by Nikos Gyftakis./
[paint3.jpg](assets/img/portraits/paint3.jpg) was on [Pinterest](https://www.pinterest.co.uk/pin/216032113352265032/) 
and it says it's by Joshua Miels.
[paint2.jpg](assets/img/portraits/paint2.jpg) was on [artnet news](https://news.artnet.com/art-world/art-history-through-perfect365-app-321640) 
and it says it's by Brian Boucher./
[portrait2.jpg](assets/img/portraits/portrait2.jpg) was on [Anna Bregman personal site](https://annabregmanportraits.co.uk/pencil-portraits/) 
and it says it's by Anna Bregman./
[portrait3.jpg](assets/img/portraits/portrait3.jpg) was on [Pencil Sketch Portraits](https://www.pencilsketchportraits.co.uk/baby-drawings/) 
and it says it's by Angela, no last name stated./
[manga1.jpg](assets/img/manga-cartoons/manga1.jpg) was on [My Anime List](https://myanimelist.net/featured/2070/The_Top_14_Series_With_The_Best_Manga_Artwork_Ever) 
and it says it's by Takeshi Obata./
[manga2.jpg](assets/img/manga-cartoons/manga2.jpg) was on [Ebay](https://www.ebay.com/itm/C95-CANVAS-En-Morikura-Doujinshi-Fuyu-no-Onnanoko-/323627641814) 
and I can't tell who it is by./
[manga3.jpg](assets/img/manga-cartoons/manga3.jpg) was on [Pinterest](https://www.pinterest.co.uk/pin/517984394621954627/) 
and I can't tell who it is by./
[portrait1.jpg](assets/img/portraits/portrait1.jpg) was on [Rita Kirkman Drawings](https://www.ritakirkmandrawings.com/) 
and it says it's by Rita Kirkman./
[abstract1.jpg](assets/img/portraits/abstract1.jpg) was on [Pinterest](https://www.pinterest.co.uk/pin/328903579035102913/) 
and it doesn't say who it is by./
[abstract2.jpg](assets/img/portraits/abstract2.jpg) was on [Fine Art America](https://fineartamerica.com/featured/abstract-portrait-rani-s-manik.html) 
and it says it's by Rani S Manik./
[abstract3.jpg](assets/img/portraits/abstract3.jpg) was on [Kent Paulette personal page](https://www.kentpaulette.com/product/taylor-swift/) 
and it says it's by Kent Paulette./
[cartoon1.jpg](assets/img/manga-cartoons/cartoon1.jpg) was on [Clipart Library](http://clipart-library.com/free/cartoon-cat-png.html) 
and it doesn't say who it is by./
[cartoon3.jpg](assets/img/manga-cartoons/cartoon3.jpg) was on [Fiverr](https://www.fiverr.com/shalemsingh/create-cool-cartoon-avatars) 
and it says it's by shalemsingh(screen name)./
[cartoon2.jpg](assets/img/manga-cartoons/cartoon2.jpg) was on [Pinterest](https://www.pinterest.co.uk/pin/25051341657469044/) 
and it doesn't say who it is by./
[landscape1.jpg](assets/img/landscapes/landscape1.jpg) was on [My Modern Met](https://mymodernmet.com/polygon-art-landscape-paintings-elyse-dodge/) 
and it says it's by Emma Taggart./
[landscape2.jpg](assets/img/landscapes/landscape2.jpg) was on [Fiverr](https://www.fiverr.com/tamajoshi/paint-you-a-beautiful-pixel-art-landscape) 
and it says it's by tamajoshi(screen name)./
[landscape3.jpg](assets/img/landscapes/landscape3.jpg) was on [Pinterest](https://www.pinterest.co.uk/pin/467881848786061919/) 
and it says it's by Paintings By Justin./
[landscape4.jpg](assets/img/landscapes/landscape4.jpg) was on [Pixels](https://www.pexels.com/search/landscape/) 
and it says it's by Pok Rie./
[picture1.jpg](assets/img/portraits/portrait1.jpg) was on [Pinterest](https://www.pinterest.co.uk/pin/409194316117415873/) 
and it says it's by Steven Saillant./
[picture2.jpg](assets/img/portraits/portrait2.jpg) was on [techradar](https://www.techradar.com/how-to/photography-video-capture/cameras/77-photography-techniques-tips-and-tricks-for-taking-pictures-of-anything-1320768) 
and it doesn't say who it is by./
[picture3.jpg](assets/img/portraits/portrait3.jpg) was on [Skylum](https://skylum.com/how-to/how-to-photoshop-someone-into-picture) 
and it doesn't say who it is by./
[requested-art2.jpg](assets/img/requests/requested-art2.jpg) was on [Template.Net](https://www.template.net/design-templates/art/cool-art/) 
and it doesn't say who it is by./
[requested-art1.jpg](assets/img/requests/requested-art1.jpg) was on [Funny Junk](https://funnyjunk.com/Cool+art+by+a+friend/funny-pictures/5631723/) 
and I think it's by glasswall but I'm not sure./
[requested-art3.jpg](assets/img/requests/requested-art3.jpg) was on [Unreality Mag](https://unrealitymag.com/a-cool-but-bizarre-gallery-of-super-mario-bros-fan-art/) 
and it says it is by Madison, no last name is stated./
[requested-art4.jpg](assets/img/requests/requested-art4.jpg) was on [Ebay](https://www.ebay.co.uk/itm/Watercolor-Pop-Art-Eye-Ball-Zombie-Rainbow-Wet-Paint-Graffiti-Cool-3-Sticker-/113734900026) 
and it doesn't say who it is by./

Acknowledgements
