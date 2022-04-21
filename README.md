# Display Take-Home

Welcome to the Display take-home interview!

Check out the [prompt](PROMPT.md) to get started.

## README Questions:

The following are some sample questions for you to get started on your README, but feel free to format it in any way you see fit.

## Describe any important assumptions that you have made in your code.

The end user must be able to dynamically generate a look and feel for the login form down to the colors, size etc. I did most of this so we can see it is possible. More can definitely be added. I am however hesistant to allow the config to define which function the submit button on the form should be calling, (left this out) as the config and app should probably use interfaces to defined the functions in case they ever change. Up for discussion.  

## What edge cases have you considered in your code? What edge cases have you yet to handle?

Currently the code will allow you to take the inital file, edit it in the jsonEditor, click render and if you like your changes, save them. The biggest edge case would be writing a validator for the metadata to confirm that it is formed correctly.

## What are some things you would like to do if you had more time?

Due to time constraint I did not do much anything with unit testing, validation, typings, etc. There are some things i would do better like define models for the response/config etc. I would also allow more configuration options for each field like custom validation messages etc.

## Is there anything you would have to change about the design of your current code to do these things? Give a rough outline of how you might implement these ideas.

For the time spent I am mostly happy with the design, but it could evolve to be better if there is an understanding of if there would be more components, where the data(config) would ultimately be stored etc. Again I would normally create interfaces, models, types etc.

