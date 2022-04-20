# Designing a Login System

A login is a screen that is presented to users to get them into our app but also to authenticate them in some way with our api. Our product team wants to be able to make updates to the content, layout, and login options **without making new releases of our apps**. Your goal is to implement a system that will let them render the login of their dreams.

## Product Requirements
- Your login system should have the capacity to render **at least** the layout for display. A simple (username | email), password and login button.

## Display
  - We are providing you with the image assets that you can use to make your layout look better or show changes.
  - You are given an incomplete example of a login response in _scripts/display/response.json_. This JSON is a base for simple username and password login. You can use this JSON and expand it as needed, or choose to create an entirely different schema instead. What's here is intended to help you, but it does not restrict you.
  - Your login should handle user input fields and clicking login.
  - When a user clicks the log in button, your application should present an alert with the message: `"Logged In"` as long as all of the fields are valid.
  - When the product team modifies the JSON payload a simple refresh of the webpage should update the layout, handling invalid JSON is up to you, BUT one way or another a user should always have a way to login to our platform.

## Submission Requirements
  - Add a Git repository and use it to make commits while you work.
  - There is a [README](README.md) template with questions for you to answer about your submission.
  - You should submit a link to your public git repo for this sample project.

## Timing
  - We want to respect your time and we ask that you please try to spend around 2 hours to complete your submission. You will not be penalized if you spend more or less time on this project.
  - We are more interested in seeing you write good, clear code than seeing you "finish" the exercise.
  - Focus on the requirements you think are the most important. Document the unfinished parts of your project in the README.
  - We **will** review your code.
  - We understand that 2 hours is probably not enough time to finish the requirements laid out in this document. You can expect this code to be discussed and expanded on during the interview.

## Serving the Login

We've provided a [script](scripts/serve.sh) to get a file server running. This script requires Python (version 2 comes installed on your Mac but the script supports version 2 or 3).

If you prefer to run some other file server feel free to do so, but it should serve the `scripts/display` folder at `localhost:8000`. To run the script, call `sh serve.sh display` which will serve the display folder.
