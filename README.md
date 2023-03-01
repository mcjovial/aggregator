## News Aggregator Take Home Challenge
The challenge is to build a news
aggregator website that pulls articles from various sources and displays them in a clean,
easy-to-read format

### Requirements:
1. User authentication and registration: Users should be able to create an account and
log in to the website to save their preferences and settings.

2. Article search and filtering: Users should be able to search for articles by keyword
and filter the results by date, category, and source.

3. Personalized news feed: Users should be able to customize their news feed by
selecting their preferred sources, categories, and authors.

4. Mobile-responsive design: The website should be optimized for viewing on mobile
devices.


## Instrunctions

The only requirements to run this app is docker

- clone the github repository with `git clone git@github.com:mcjovial/aggregator.git`

### Running the Laravel server

- `cd backend`
- `./vendor/bin/sail up`

the api will be accessible on `http://backend.test/api/`

### Running the Frontend React App
- change back to the root directory (aggregator)
- `cd frontend`
- `docker-compose up`

the client app will be accessible on `localhost:3000`

