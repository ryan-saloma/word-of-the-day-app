# Word of the Day Application

So far I have found two APIs that have WoTD GET methods: [Collins Dictionary API](https://api.collinsdictionary.com/api/v1/documentation/html/#N1029F) and [Wordnik](https://developer.wordnik.com/). 

It is irresponsible to expose API keys, so the front-end of the app should fetch information from an API that I create. That API should in turn fetch information from various other APIs. 

The next step is to design the system. 

## System Design

Given the limited scope of this project, I chose a monolith design. For now, the front-end will use vanilla JavaScript, HTML, and CSS. The backend of the app will use NodeJS. 


## Frontend

First, I'll create a navigation bar. It should be responsive and sticky.

For the styling, I'll use Bootstrap.

### Homepage

The homepage should consist of a navigation bar, which includes links to a page with random word generator, a page with the words of the day from various website, and a page of vocabulary games. It should also include links to Login and Sign Up. The homepage should include a featured word of the day. 