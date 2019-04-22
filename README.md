#  The Right Doctor App

The Right Doctor app is designed and created for individuals with autism or other related disorders.
Whether you are the person with the diagnosis or you are caring for someone
who has the diagnosis, it is important to know that the physician knows how to treat someone with a developmental disorder.
Other practical uses are to see if there are options in your area . Since doctors whom have experience with treating individuals
with autism are few and far between, you may be interested in moving to another state that carries a high population of autism-knowledgable physicians.

### Working Prototype

https://lau12een.github.io/go-to-doctor-api-capstone/

## Site Map: MVP

![Landing Page](/read-me-images/landing_page.png)
![Search-page-1](/read-me-images/Search_page_1.png)
![Search-page-2.jpg](/read-me-images/Search_page_2.png)
![Search-page-3.jpg](/read-me-images/Search_page_3.png)

## User Stories:

### Typical Users ###

**Landing Page**

As a user, I want to understand what the app is so that I can decide if I want to use it .

Landing page will have a hero image, a "submit" button and after clicking on "submit" the landing page will be hidden



**Search Page**

As a user, I want all the imporant information about the list of physicians in one page .

This page will contain an input form at the top and results at the bottom

Within this page will be a "read more" link where the user can click to get more information on the doctor they've selected . Once the "read more" button is selected- it will expand the physician's details

### Users with Disabilities ###


**Landing Page**

*Keyboard-Only User*

As keyboard-only user, I want to be able to reach the the button on the landing page so I can start my search.
I want the ability to use the enter key to open the selected button so it can lead me to the search page.

*Screen Reader User*

As a screen reader user, I want to hear every word that is said on the page.
I want to understand the purpose of each button so I can start my search.

*User with Low-Vision*

As a user who has trouble reading due to low vision, I want to be able to make the text larger on the screen so that I can read it.

*User with Color-blindness*

As a user who is color blind, I want to links to be distinguishable on the page so that I can find the links and navigate the site.

*Hearing Impaired User*

As a user who is hearing-impaired, I want a transcript of the spoken audio so that I can have access to all information provided in audio clips.

**Search Page**

*Keyboard-Only User*

As keyboard-only user, I want to be able to reach the the buttons on the search page so I can resume my search.

I want the ability to use the enter key to open the selected button so it can lead me to the search page.

I want the ability to reach all links (buttons), form controls and page functions, so that I can perform an action or navigate to the place I choose.

I want the ability to use the enter key to open the selected link so that every link on a page is accessible using a keyboard as it would be with a left mouse click.

I want to know where I am on the screen at all times so that I know what I can do and how to do it.


*Screen Reader User*

As a screen reader user, I want to hear the text equiavlent for each image.

I want to understand the purpose of each button so I can start my search.

I want to know what each form label is for each form field so that I can effectively enter the correct information in the form.

I want to know what the column and row headers for each table cell so that I can understand the meaning of the data.

*User with Low-Vision*

As a user who has trouble reading due to low vision, I want to be able to make the text larger on the screen so that I can read it.

*User with Color-blindness*

As a user who is color blind, I want to links to be distinguishable on the page so that I can find the links and navigate the site.

As a user who is color blind, I want to know what fields are required so that I can fill out the form.

*Hearing Impaired User*

As a user who is hearing-impaired, I want a transcript of the spoken audio so that I can have access to all information provided in audio clips.

## User Flow
![User Flow](/read-me-images/user_flow.png)

## Designs

![Landing Page](/website-images/final_landing_page.png)
![Search-page-1](/website-images/live_search_page_1.png)
![Search-page-2](/website-images/live_search_page_2.png)
![Search-page-3](/website-images/live_search_page_3.png)

## Setup/Installation Requirements

- Clone this repository
- Run npm install
- API_KEY="(insert API key here)"
- Open Webpage
- User submits the input
- The user will get back the match results from the input.
- If no input is found it will say none are found

### Specs

| Spec                                                         | Input             | Output                                                                          |
| :----------------------------------------------------------- | :---------------- | :------------------------------------------------------------------------------ |
| **The program takes the user input and puts it in an array** | Input: {"neurologist"}    | Output: A list of doctors' whose specialty is neurology                 |
| **The program takes the user input and puts it in an array** | Input: {"autism"} | Output: All the doctors who have "autism" in their bio|
| **The program takes the user input and puts it in an array** | Input: {"California"} | Output: All the doctors who have "autism" in their bio of whom are located in California|



## Technical

go to doctor app was built with :

#### Front End

*HTML

*CSS

*JavaScript

*jQuery

### Responsive
This app is built to be responsive to smaller screen sizes using a flex-box and media screen width breakpoint of 600px for smaller screen sizes

## Development Road Map
Features for future iterations include:
- Add drop down menus for State and city instead to ease search experience or user input zipcode
-create a button to close the details
- Add ability for parents to chat with a live person
- Add favorites feature where they can mark doctors they have visited and would like to recommend
- Add ratings and review feature , so they can review and rate their experience with a doctor
- Add a scheduling feature that user can click on once they've found a doctor they would like to visit


