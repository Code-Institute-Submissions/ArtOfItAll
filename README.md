# Table Of Content
- [Art Of It All - v0.3.6 - Request page made and Footer updated](#art-of-it-all---v036---request-page-made-and-footer-updated)
  * [UX](#ux)
  * [Features](#features)
    + [UX Feature](#ux-feature)
    + [Home Feature](#home-feature)
    + [Market Feature](#market-feature)
    + [Policies Features](#policies-features)
    + [Contact Features](#contact-features)
    + [Past Art Feature](#past-art-feature)
    + [Checkout feature](#checkout-feature)
  * [Existing Features](#existing-features)
    + [UX Feature](#ux-feature-1)
      - [Open button and side navigation](#open-button-and-side-navigation)
      - [Light/Dark Toggle](#light-dark-toggle)
      - [Grid method throughout all pages using Bootstrap](#grid-method-throughout-all-pages-using-bootstrap)
    + [Home Feature](#home-feature-1)
      - [Links to Market that refine items visible](#links-to-market-that-refine-items-visible)
      - [Contact page link](#contact-page-link)
      - [Calendar](#calendar)
    + [Market Feature](#market-feature-1)
      - [Picture of the art displayed in a grid](#picture-of-the-art-displayed-in-a-grid)
      - [A filter](#a-filter)
      - [Clicking the picture](#clicking-the-picture)
    + [Contact Features](#contact-features-1)
      - [Link to Policies page](#link-to-policies-page)
      - [A dropdown with all the different artist and the help department](#a-dropdown-with-all-the-different-artist-and-the-help-department)
      - [A name box for the person using it](#a-name-box-for-the-person-using-it)
      - [The form will have a box that asks for the user's email](#the-form-will-have-a-box-that-asks-for-the-user-s-email)
      - [Request area, with example text](#request-area--with-example-text)
      - [One Issue](#one-issue)
    + [Policies Features](#policies-features-1)
      - [Three boxes with information](#three-boxes-with-information)
      - [The last two boxes will link to respective pages](#the-last-two-boxes-will-link-to-respective-pages)
      - [The top will download a draft contract](#the-top-will-download-a-draft-contract)
    + [Footer](#footer)
      - [Links in the footer updated](#links-in-the-footer-updated)
      - [Info added to the footer](#info-added-to-the-footer)
    + [Past Art Feature](#past-art-feature-1)
      - [Will have a picture of the requested art in a grid](#will-have-a-picture-of-the-requested-art-in-a-grid)
      - [Example extra info page](#example-extra-info-page)
  * [Features Left to Implement](#features-left-to-implement)
    + [UX Feature](#ux-feature-2)
    + [Home Feature](#home-feature-2)
    + [Market Feature](#market-feature-2)
    + [Policies Features](#policies-features-2)
    + [Contact Features](#contact-features-2)
    + [Past Art Feature](#past-art-feature-2)
    + [Checkout feature](#checkout-feature-1)
  * [Technologies Used](#technologies-used)
    + [Bootstrap](#bootstrap)
    + [JQuery](#jquery)
    + [Jasmine](#jasmine)
    + [Font-Awesome](#font-awesome)
    + [Google Font](#google-font)
    + [FullCalendar](#fullcalendar)
  * [Testing](#testing)
  * [Deployment](#deployment)
  * [Credits](#credits)

# Art Of It All - v0.3.7 - Basket Added

- [Table Of Content](#table-of-content)

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

- [Table Of Content](#table-of-content)

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

## Existing Features

- [Table Of Content](#table-of-content)

### UX Feature

#### Open button and side navigation

Open button - allows the user to press it and open a navigation that comes accross the side of the left hand side of the page/
To do this the Javascript code [sideNavMenu.js](assets/js/sideNavMenu.js) was written. It has two simple functions in it, 
the first is openNav() which sets the width of the side navigation div to 250px and does this with a transition for a smoother movement. 
The second is closeNav() which does the opsite.
Side Navigation - allows user to navigate to the other pages on the website, by clicking the page names on this side bar/
The headers on this div are wrapped in anchor links to the other pages allowing navigation.

#### Light/Dark Toggle

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

#### Grid method throughout all pages using Bootstrap
To keep a consitant size between all the pages and between the screen sizes I have used Bootstrap grid method to layout my pages, 
these are in light/dark containers so there style can be changed by the light/dark toggle.

### Home Feature

#### Links to Market that refine items visible
The links open to the market page with a tag word linked to the href. 
On document being ready the urlCheck.js checks which word has been added and checks the box for the corrisponding item type. 
Then it calls the filter code which handles the rest.
```javascript
$(document).ready(function(){
    if (window.location.href.indexOf("portrait") > -1){
        $('#portrait').prop('checked', true);
        marketFilter()
    }
    })
```

#### Contact page link
This is simply done by h3 with some text, above a h2 which is wrapped in an anchor link to the contact page.

#### Calendar
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
### Market Feature

#### Picture of the art displayed in a grid
This is done with Bootstrap, there are 4 colums, 3 are the pictures and one of them is the filter. 
I have decide to not have the price displayed over the top because on smaller screen sizes it didn't look right.

#### A filter
Filter - the user wants only specific images displayed, to do this they click the ones they want to keep
Currently this only works if you select and deselect the ones you don't want on the page,
also because of the way the page is layed out the pictures stay in the same position, 
if the ones above them go they will move up but not sideways.\
[example1](assets/img/examples/example-img1.jpg)
[example2](assets/img/examples/example-img2.jpg) \
The select and deselect issue has been fixed now. The way this works now is the HTML code calls the function marketFilter() on click.
```html
<li>
	<label for="chck-box1">Abstract</label>
	<input data-num="0" class="checkbox" type="checkbox" id="chck-box1" onclick="marketFilter()">
</li>
```
Then the function clears all the items on the page with a for loop. Then the second for loop loops through all the checkboxes and checks which ones are check or not, 
then takes the data-num of the ones who are checked and use this to select the checkbox names that corrispond with the numbers in the filter function.
Then it goes through the list of names and uses this to select the divs by there class name and sets there display to block.
```javascript
function filters(filter) {
    var filters = {
        0: "abstract",
        1: "cartoon",
        2: "landscape",
        3: "manga",
        4: "paint",
        5: "picture",
        6: "portrait"
    }
    return filters[filter];
}

function marketFilter() {
    for (var i = 0; i < 7; i++) {
            var elem = filters(i)
            var filter = document.getElementsByClassName(elem);
            for(var j = 0; j < filter.length; j++) {
                filter[j].style.display = "none";;
            }
        }
    var checkbox = document.getElementsByClassName("checkbox")
    for (var i = 0; i < checkbox.length; i++){
        if(checkbox[i].checked == true) {
            var filter = filters(checkbox[i].dataset.num);
            var filterChoice = document.getElementsByClassName(filter)
            for(var j = 0; j < filterChoice.length; j++) {
                filterChoice[j].style.display = "block";;
            }
        }
    }
}
```

#### Clicking the picture
More information - the user wants more information about the image, they can click them image to be transfered to a page with more information about it
Currently the links all lead to the same page but in a fully developed version they would all lead to an individual page about the selected picture

### Contact Features

#### Link to Policies page
At the top of the page under the first header is some text about how we want people to treat each other. 
Under that it suggest that if anyone wants infomation of the etiquette we want or wants to know how the services work, that they should go to the policies page.  

#### A dropdown with all the different artist and the help department
The items on the dropdown hold values that would be taken by the submit and used for the to_email parameter in the EmailJS form template. 
This is set to be required.

#### A name box for the person using it 
The top box of the form has the label full name and it has a name value of from_name. This value allows the EmailJS to use this in the template. 
This is also set to required.

#### The form will have a box that asks for the user's email
It has a box that askes for the users email, this has the value from_email for the EmailJS template. 
Also, underneath this form field it reassures customers that we won't share there email or personal details with anyone.

#### Request area, with example text
The second to last part of the form is the request section, which is taken to the EmailJS as request. 
In this box is a small example of how to politly ask for there request, just to reinforce the point of being nice and friendly to who ever they are contacting.

#### One Issue
This form can't be used because when I enter my id for the initallization it complains that my id is invalded, 
I have double checked it against the one on the site and it is exactly the same so I am unsure what's wrong.

### Policies Features

#### Three boxes with information
These are in the page, but they are filled with lorem at the moment so I can focus on other features. 
If I have time before handin this will be filled with the appropriate information.

#### The last two boxes will link to respective pages
This has been made and the links work, these have been styled and the features I want added.
They still need information adding.

#### The top will download a draft contract
This is linked and works, I downloads the draft-contact.docx held in the [documents](assets/document/draft-contract.docx) folder under assets.

### Footer

#### Links in the footer updated
The links in footer now connect to the pages I want them to.
```html
<div class="col-sm-4">
    <h5 class="footer-hdr">Social</h5>
		<ul class="icon">
			<li>
				<h6 class="footer-text">@AJokerXDArtnCrafts
				<a target="_blank" href="https://www.facebook.com/AJokerXDArtnCraft/">
					<i class="fab fa-facebook" aria-hidden="true"></i>
				</a>
				</h6>
		    </li>
			<li>
				<h6 class="footer-text">@AJokerxd
				<a target="_blank" href="https://twitter.com/AJokerxd">
					<i class="fab fa-twitter" aria-hidden="true"></i>
			    </a>
				</h6>
			</li>
			<li>
				<h6 class="footer-text">ajokerxd
				<a target="_blank" href="https://www.instagram.com/ajokerxd/">
					<i class="fab fa-instagram" aria-hidden="true"></i>
				</a>
				</h6>
			</li>
			<li>
				<h6 class="footer-text">A-JokerXD
				<a target="_blank" href="https://www.youtube.com/channel/UC-Rmhn1NVXVAlxFVGnhR0mA?view_as=">
					<i class="fab fa-youtube" aria-hidden="true"></i>
				</a>
				</h6>
			</li>
			<li>
				<h6 class="footer-text">AJokerXDYouTube
				<a target="_blank" href="https://www.twitch.tv/ajokerxdyoutube">
					<i class="fab fa-twitch"></i>
				</a>
				</h6>
			</li>
		</ul>
	</div>
<h6 class="footer-hdr">For more information see here -
	<ul class="icon">
	    <li>
			<a class="footer-text" href="page/policies.html">Contact Policy</a>
		</li>
		<li>
			<a class="footer-text" href="page/policies/requests.html">Request Policy</a>
		</li>
		<li>
			<a class="footer-text" href="page/policies/services.html">Service Practices</a>
		</li>
	</ul>
<ul class="icon">
	<li>
		<a class="footer-text" href="page/contact.html">Contact Page</a>
	</li>
</ul>
```

#### Info added to the footer
There is a brief description added to the sections in the footer now.
```html
<div class="col-sm-4">
	<h5 class="footer-hdr">Policies, Requests and Services</h5>
	<p class="footer-text">We have a draft contract you can checkout before placing a request order, we also
		have information on how our requests work and how we'd like you and the artist to talk to each
		other. Also, we have a page that talks about our service processes and tells you how busy each
		artist is at the moment.</p>
</div>
<div class="col-sm-4">
	<h5 class="footer-hdr">Help</h5>
	<p class="footer-text">For help you can send a help request to the help department through the contact
		page.
	</p>
</div>
```

### Past Art Feature

#### Will have a picture of the requested art in a grid
This is the same design as the market page with the same filter,
it differs from the market page as it doesn't say the price and has the customers name on it.
Finally, it would differs from the market page because the description would be about the request made,
and less about why the artist made it and their inspiration.
However, this would be in a live version, as this is for my project it is populated with lorem.

#### Example extra info page
This is the same as the market one, 
but again it is differs with the information shown on the page.
It again has simular information about the customers request and the process and less about the artist thought. 

### Basket
#### Append to Div to hold all added items
The user can use the plus button to add an item to the basket at the top of the market page. 
When the plus is clicked it calls the function addBasket with the products name.
```html
<i class="far fa-plus-square" onclick="addBasket('product1')"></i>
```
Then the function takes the product name to grab the product info from a function holding all the product infomation.
```javascript
function addBasket(productInfo){
    var product = products(productInfo)
    var price = product["productPrice"]
```
The function grabs the current total from the div element #total. Then the price variables and the total is added together.
Also, a random number is created for each new basket product to allow targeting later.
```javascript
    var total = document.getElementById('total').textContent
    var prodNum = Math.random()
    total = total.substring(1)
    total = parseInt(total)
    total = total + price
```
Then all this information is added to the page.
```javascript
    $("#basket1").append("<h4 class='body-text " + prodNum + "'>" + product["productName"] + "</h4>")
    $("#basket2").append("<h4 class='body-text " + prodNum + "'>£" + product["productPrice"] + "</h4>")
    $("#basket3").append("<h4 class='body-text " + prodNum + "'><i id='remove' class='far fa-minus-square' data-prodnum=" + prodNum + " data-prod=" + productInfo + " onclick='remove()'></i></h4>")
    $("#total").html("£" + total)
```

#### Items can be removed from the basket
It first grabs the product name form the data-prod, then uses this to get the price of the product. 
And it grabs the product number using the data-prodnum.
```javascript
function remove(){
    var prod = $("#remove").data("prod")
    var prodNum = $("#remove").data("prodnum")
    var total = document.getElementById('total').textContent
    total = total.substring(1)
    var product = products(prod)
    var price = product["productPrice"]
    total = total - price
```
Then it changes the page with the new total and removing the product.
```javascript
$("#total").html("£" + total)
    var removeProd = document.getElementsByClassName(prodNum)
    $(removeProd).empty()
```

## Features Left to Implement

- [Table Of Content](#table-of-content)

### UX Feature
 The UX features I want currently are implemented.

### Home Feature
The Home features I want currently are implemented.

### Market Feature
The Market features I want currently are implemented.

### Policies Features
The Market features I want currently are implemented.

### Contact Features
The Market features I want currently are implemented.

### Past Art Feature
The Home features I want currently are implemented.

### Checkout feature
* Will have all the items in the current basket
* These items will have a ruff description, artist and price
* A total will be displayed, underneath it will be a total without VAT
* A checkout/pay button will be under that
* Finally there will be a link to help page for any queries

## Technologies Used

- [Table Of Content](#table-of-content)

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

- [Table Of Content](#table-of-content)

### Top Bar Testing
Screen Size: I tested its apperance and function using the settings offered by the Chrome inspect feature.\ 
To test how it looked at different screen sizes I changed the device set for the page to display in.\
I also checked this by reducing chrome window width down to a minimum of 320px and slowly slide up in size to see how it looked.\
I also tested the top bar features whilst doing these two methods to check that the buttons could be click and respond as expected.\

Side Navigation: To test this I chose a phone size screen, a tablet size screen and a pc size screen.\ 
I check that when the Open button was clicked that it called the openNav function from the [sideNavMenu.js](assets/js/sideNavMenu.js), 
I also tested the same for the closeNav function.\
Then I tested each link between the pages to test that the link address where correct.
Finally, I tested the transiton a few time to see if I was happy with the timing.

Light/Dark Toggle: I tested to see if it worked correctly, it didn't seem to have any issues.
I also checked the transiton times, to see if I was happy with how it effected the content of the page.

### Calendar on the home page
I origanally made a CSS and HTML calendar, but the space that it took up in the index.html document seemed very unessery to me.
So, I looked for a calendar libary and found FullCalendar to be quite useful.
1. Fist attempt, it hasn't worked, I used jquery to get the element by id but it didn't work. 
I'm going to use normal javascript see if that works
2. It works correctly with the javascript, 
I now need to create one with specific information for each artist and hide all of these till a choice is made
3. With separate ones made for each artist they all display on the page, so I have set them to hide on page loads
4. I have managed to link the one that shows up with the selected choice and hide the previous select if there was one
This works how I want it to now, my only conceren is for each artist the is a large object with all their events in.
This is an issue for me because it makes the sideNavMenu.js very large, in the future I would like to use a database to hold these.

### Market Filter

1. I have created my javascript that hide the divs with the class name passed into the function, this works well
2. After further testing I noticed two things I need to click it on and off to hide things I didn't want and
if I click multiple choices it hide some
3. To fix this I change the code so that it goes through all the divs by class name and removes them from display when the function is called.
Then it take the number of the filter/s selected and grabs the class name from a object in a separate function. 
Then sets the display of all of the divs with the corresponding class name to be shown.
4. I tested this one with multiple combinations of choosen filter selections and it works well, 
it also works for art that has more than one art type. I.e manga portrait will display when either or both are selected

### Footer Resize
I decide to use javascript for this because the css media query wasn't responding how I wanted it to.
It's simple, it checks for the screen size constantly and if it goes below the set size it will hide the normal one and show the phone one.
And once it gets larger than the desired screen size then it hides the small screen one and shows the normal one.
So, to test this I slowly changed the screen size to check it changed at the correct screen size and that it looked okay.
Whilst testing this I had a issue with the social logos displaying in a list no matter what I did.
After some research the fix I found to put them in a list-inline div and add each logo as a list-inline-item.

### Filter selection from dropdown on sideNavMenu
I want users to be able to select what type of art they want display on the market from other pages.
The way I want to do this is with a dropdown that sites next to the market link on the side navigation, 
these will have URL links with parameters for each filter choice.
1. Have managed to add a dropdown using a arrow facing downwards as the logo next to the market, 
these have been tested and work, the url have the parameter on the end as wanted
2. I check that the url parameter could be grabbed, to do this I console.log it till I got the result I needed, 
a few tweaks on how I was retrieving it was done
3. Then I liked them to the filters and click them and call the function linked to the filter choice, 
I tested this by using the dropdown menu from different pages to test all links and the functions functionality

### Basket
I created a function that held all the product prices and names. 
The plus calls the function that calls this information finction and uses this information to append a new item under basket.
The name is appended to the left, price in the middle and a subtract button to the right.
The price is added to current total then replaces the total on the page.
1. Adding item with the plus button - it works fine, the total adds correctly and the information about the item is appended under the last one
2. Remove item with the subtract - it works but if items have the same product name it will remove both and it makes the total wrong
3. In an attmept to fix this each one has a random number, this random number is generated for each new item appended. 
This is used to target the elements that are wanted empty
4. When taking away from the price that works but adding new items adds to the orignal value - to fix this I have set the value of the total in the html div.
Then gotton the value and added to it and updated the html, so the total is always stored and gathered after each add or subtract  
This all works as wanted now, the checkout button isn't linked to anything yet.

## Deployment

- [Table Of Content](#table-of-content)

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:

Different values for environment variables (Heroku Config Vars)?
Different configuration files?
Separate git branch?
In addition, if it is not obvious, you should also describe how to run your code locally.

## Credits

- [Table Of Content](#table-of-content)

### Content
I have used lorem for description text to save time for better development

### Media
The pictures for this page where obtained from Google search\
[paint1.jpg](assets/img/portraits/paint1.jpg) was on [Pinterest](https://www.pinterest.co.uk/pin/327707310359626455/?autologin=true) 
and it says it's by Nikos Gyftakis.\
[paint3.jpg](assets/img/portraits/paint3.jpg) was on [Pinterest](https://www.pinterest.co.uk/pin/216032113352265032/) 
and it says it's by Joshua Miels.\
[paint2.jpg](assets/img/portraits/paint2.jpg) was on [artnet news](https://news.artnet.com/art-world/art-history-through-perfect365-app-321640) 
and it says it's by Brian Boucher.\
[portrait2.jpg](assets/img/portraits/portrait2.jpg) was on [Anna Bregman personal site](https://annabregmanportraits.co.uk/pencil-portraits/) 
and it says it's by Anna Bregman.\
[portrait3.jpg](assets/img/portraits/portrait3.jpg) was on [Pencil Sketch Portraits](https://www.pencilsketchportraits.co.uk/baby-drawings/) 
and it says it's by Angela, no last name stated.\
[manga1.jpg](assets/img/manga-cartoons/manga1.jpg) was on [My Anime List](https://myanimelist.net/featured/2070/The_Top_14_Series_With_The_Best_Manga_Artwork_Ever) 
and it says it's by Takeshi Obata.\
[manga2.jpg](assets/img/manga-cartoons/manga2.jpg) was on [Ebay](https://www.ebay.com/itm/C95-CANVAS-En-Morikura-Doujinshi-Fuyu-no-Onnanoko-/323627641814) 
and I can't tell who it is by.\
[manga3.jpg](assets/img/manga-cartoons/manga3.jpg) was on [Pinterest](https://www.pinterest.co.uk/pin/517984394621954627/) 
and I can't tell who it is by.\
[portrait1.jpg](assets/img/portraits/portrait1.jpg) was on [Rita Kirkman Drawings](https://www.ritakirkmandrawings.com/) 
and it says it's by Rita Kirkman.\
[abstract1.jpg](assets/img/portraits/abstract1.jpg) was on [Pinterest](https://www.pinterest.co.uk/pin/328903579035102913/) 
and it doesn't say who it is by.\
[abstract2.jpg](assets/img/portraits/abstract2.jpg) was on [Fine Art America](https://fineartamerica.com/featured/abstract-portrait-rani-s-manik.html) 
and it says it's by Rani S Manik.\
[abstract3.jpg](assets/img/portraits/abstract3.jpg) was on [Kent Paulette personal page](https://www.kentpaulette.com/product/taylor-swift/) 
and it says it's by Kent Paulette.\
[cartoon1.jpg](assets/img/manga-cartoons/cartoon1.jpg) was on [Clipart Library](http://clipart-library.com/free/cartoon-cat-png.html) 
and it doesn't say who it is by.\
[cartoon3.jpg](assets/img/manga-cartoons/cartoon3.jpg) was on [Fiverr](https://www.fiverr.com/shalemsingh/create-cool-cartoon-avatars) 
and it says it's by shalemsingh(screen name).\
[cartoon2.jpg](assets/img/manga-cartoons/cartoon2.jpg) was on [Pinterest](https://www.pinterest.co.uk/pin/25051341657469044/) 
and it doesn't say who it is by.\
[landscape1.jpg](assets/img/landscapes/landscape1.jpg) was on [My Modern Met](https://mymodernmet.com/polygon-art-landscape-paintings-elyse-dodge/) 
and it says it's by Emma Taggart.\
[landscape2.jpg](assets/img/landscapes/landscape2.jpg) was on [Fiverr](https://www.fiverr.com/tamajoshi/paint-you-a-beautiful-pixel-art-landscape) 
and it says it's by tamajoshi(screen name).\
[landscape3.jpg](assets/img/landscapes/landscape3.jpg) was on [Pinterest](https://www.pinterest.co.uk/pin/467881848786061919/) 
and it says it's by Paintings By Justin.\
[landscape4.jpg](assets/img/landscapes/landscape4.jpg) was on [Pixels](https://www.pexels.com/search/landscape/) 
and it says it's by Pok Rie.\
[picture1.jpg](assets/img/portraits/portrait1.jpg) was on [Pinterest](https://www.pinterest.co.uk/pin/409194316117415873/) 
and it says it's by Steven Saillant.\
[picture2.jpg](assets/img/portraits/portrait2.jpg) was on [techradar](https://www.techradar.com/how-to/photography-video-capture/cameras/77-photography-techniques-tips-and-tricks-for-taking-pictures-of-anything-1320768) 
and it doesn't say who it is by.\
[picture3.jpg](assets/img/portraits/portrait3.jpg) was on [Skylum](https://skylum.com/how-to/how-to-photoshop-someone-into-picture) 
and it doesn't say who it is by.\
[requested-art2.jpg](assets/img/requests/requested-art2.jpg) was on [Template.Net](https://www.template.net/design-templates/art/cool-art/) 
and it doesn't say who it is by.\
[requested-art1.jpg](assets/img/requests/requested-art1.jpg) was on [Funny Junk](https://funnyjunk.com/Cool+art+by+a+friend/funny-pictures/5631723/) 
and I think it's by glasswall but I'm not sure.\
[requested-art3.jpg](assets/img/requests/requested-art3.jpg) was on [Unreality Mag](https://unrealitymag.com/a-cool-but-bizarre-gallery-of-super-mario-bros-fan-art/) 
and it says it is by Madison, no last name is stated.\
[requested-art4.jpg](assets/img/requests/requested-art4.jpg) was on [Ebay](https://www.ebay.co.uk/itm/Watercolor-Pop-Art-Eye-Ball-Zombie-Rainbow-Wet-Paint-Graffiti-Cool-3-Sticker-/113734900026) 
and it doesn't say who it is by.\

Acknowledgements

- [Table Of Content](#table-of-content)
