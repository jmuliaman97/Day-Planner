## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

* This was a pretty challenging task. With lots of trials and errors I was able to use the CSS that was given and use it for the HTML and Javascript.
* I first start with the HTML page then moved on to Javascript
* I start inputting the time and date to the jumbotron then I made a function for the total hour from 9-5. Since the values of each row are the same, I had to grab the very first id by using attributes. Since the id was 'hour-#' I had to slice the first 5 words so we're only left with a number string. Since the hours are strings I had to make it an integer by using parseInt(). From there we can start doing if and then statement to get past, present and future. 
* Storing the input text was challenging and I still wasn't able to get the result I wanted.