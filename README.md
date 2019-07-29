# Milestone project 2 for Code Institute - Interactive Frontend Development Module.
## infoCountry app.  Usefull information about World countries in one place.

.....This project is still under development....

The main goal of the project is to display world countries related informations in one place.Free data displayed on the website are loaded from external servers.

Informations on website displayed for the users:
* Country flag
* Country name
* Country Capital
* Country Region
* Country Subregion
* Country Population
* Country Timezone(s)
* Country Currency
* Actual wheather in country capital
* Latest news from selected country
* Country with borders on the map 

Additional informations might be added in the future.

## Live page
Live version of the website hosted on github pages can be found [here](https://mariourban83.github.io/Milestone-Project-2/).

![Alt text](assets/images/preview.png?raw=true "infoCountry app")

## User Experience Design

Website was designed to be easy to understand and navigate.All text is clear and visible as for now. The white text contrasts well to the darker background image chosen.
At the moment, website is providing only one option for user to choose from, to pick the country. After country selection by the user, country relevant informations are displayed in a simple, clear and readable manner.User Geolocation option is not available at the moment.

### 1. Landing view section

After landing on the webpage, user are immediately presented with the option to choose the country for which the data are going to be displayed.
The option for users to try geolocate therselfs will be implemented in near future.

After selecting country, JSON data are loaded from external servers, processed and displayed to the webpage.
Not all of the data are presented at the moment.

### 2. Leaflet map section
After user country selection, selected country boundaries will be displayed on the Leaflet JS map. An option to choose between boundaries, streets or satelite view will be available soon.
The map is interactive and will also display selected country capital with the marker( or icon).
Map options and marker are not available at the moment.

## Technologies used 
1. HTML
2. CSS
3. Bootstrap (4.3)
4. Javascript
5. Leaflet JS library


## API's used in the project
1. Restcountries API
2. Darksky Wheather API
3. Google News API

## Features
The css code with pulsing effect is used for highlighting option to select.

## Testing
The website was tested during and after development on multiple devices accross three major browsers, Chrome, Safari and Firefox.
The devices used for testing where mobile phones such as Samsung Galaxy S4, Apple iPhone SE, Sony Experia, Amazon 7" Fire tablet, HP 14" laptop with medium screen resolution and 23" size full hd screen on desktop pc. 
Chrome dev tools and Firefox dev tools were also used for testing responsivness of the website.

At the moment, one bug is present when displaying data for Country timezone. If there is more values present, data are displayed outside its container.

Elements and sections were adjusted during development stage to respond and adapt to different screen sizes.
Also, Galaxy S4 ADB with Google Chrome inspection tool was used during development stage.

The website is fully responsive as for now, flag images and map scale properly.

## To be implemented:

* data like wheather, news, county currencies, country neighbours and possibly more
* map options for displaying different layers
* option to display data based on user location (geolocation option)

## Deployment
This site is hosted on GitHub pages, deployed directly from the master branch. It updates  automatically upon new commits to the master branch. In order for the site to display correctly on GitHub pages, the landing page is named `index.html`.

To run this repo locally, you can clone this repository directly by pasting `https://github.com/mariourban83/Milestone-Project-2.git` into your terminal and open it in the code editor of your choice.

## Credits

### Content
All text content on the website was written by me. 

### Media
Background picture and illustrated favicon are free from https://pixabay.com. 
Pictures for country flags are fetched directly from restcountries API and are free to use.

#### For educational use.