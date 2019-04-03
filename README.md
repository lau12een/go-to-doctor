# Go To Doctor App

The go to doctor app is designed and created for parents/caregivers raising individuals with autism and Adults diagnosed with autism .

### Working Prototype

https://lau12een.github.io/go-to-doctor-api-capstone/

## Site Map: MVP

( insert designs here )

## User Stories:

**Landing Page**

As a user, I want to understand what the app is so that I can decide if I want to use it .

Landing page will have a hero image, a "submit" button and after clicking on "submit" the landing page will be hidden



**Search Page**

As a user, I want all the imporant information about the list of physicians in one page .

This page will contain an input form at the top and results at the bottom

Within this page will be a "read more" link where the user can click to get more information on the doctor they've selected . Once the "read more" button is selected- it will expand the physician's details

## Designs

![Landing Page](/github-images/landing_page.jpg)
[![Search-page-1.jpg](https://i.postimg.cc/RVNrRLtx/Search-page-1.jpg)](https://postimg.cc/zVZPDWpx)

[![Search-page-2.jpg](https://i.postimg.cc/N0vWQhzQ/Search-page-2.jpg)](https://postimg.cc/Xrx2gPWP)

[![Search-page-3.jpg](https://i.postimg.cc/sXw8PMD2/Search-page-3.jpg)](https://postimg.cc/FdkDNsSt)

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
| **The program takes the user input and puts it in an array** | Input: {"neurologist"}    | Output: All the doctors that specialize in neurology that has experience with autism somewhere in their description                      |
| **The program takes the user input and puts it in an array** | Input: {"95121"} | Output: All the autism centers and doctors in the area that secialize in autism|



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
- Add ability for parents to chat with a live person
- Add favorites feature where they can mark doctors they have visited and would like to recommend
- Add ratings and review feature , so they can review and rate their experience with a doctor
- Add a scheduling feature that user can click on once they've found a doctor they would like to visit


