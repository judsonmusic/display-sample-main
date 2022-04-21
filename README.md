# Display Take-Home

Welcome to the Display take-home interview!

Check out the [prompt](PROMPT.md) to get started.

## How to install.
1. Clone the application
2. run npm install in the root folder.
3. run npm start 
4. go to localhost:4200

## Instructions for use.

You can see the initial data from the json file in the box on the left. It should display a form on the right.
In the left box you can change certain properties like colors etc. Click render. If you like your changes, click save. Refresh the page and your changes will be in session storage.

## README Questions:

The following are some sample questions for you to get started on your README, but feel free to format it in any way you see fit.

## Describe any important assumptions that you have made in your code.

The end user must be able to dynamically generate a look and feel for the login form down to the colors, size etc. I did most of this so we can see it is possible. More can definitely be added. I am however hesistant to allow the config to define which function the submit button on the form should be calling, (left this out) as the config and app should probably use interfaces to defined the functions in case they ever change. Up for discussion.  

## What edge cases have you considered in your code? What edge cases have you yet to handle?

Currently the code will allow you to take the initial file, edit it in the jsonEditor, click render and if you like your changes, save them. The biggest edge case would be writing a validator for the metadata to confirm that it is formed correctly.

## What are some things you would like to do if you had more time?

Due to time constraint I did not do much anything with unit testing, validation (however the alert does work as suggested etc), typings, etc. There are some things i would do better like define models for the response/config etc. I would also allow more configuration options for each field like custom validation messages etc.
In angular the formBuilder could gather the fieldNames dynamically and take care of everything as far as validation etc.

I would also think that having an interface where the user can see the images that they can choose from and copy the paths by clicking on the images would be helpful (like thumbnails). To create a "designer using drag and drop etc" would make for a better experience in the UI as opposed to editing JSON directly. Thats just boring. haha.

## Is there anything you would have to change about the design of your current code to do these things? Give a rough outline of how you might implement these ideas.

For the time spent I am mostly happy with the design, but it could evolve to be better if there is an understanding of if there would be more components, where the data(config) would ultimately be stored etc. Again I would normally create interfaces, models, types etc.

