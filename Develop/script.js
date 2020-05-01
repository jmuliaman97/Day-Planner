$(document).ready(function () {

  // grab current day id and input time and date
  $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm a'))

  // make variable for current hour
  let currentHour = moment().hours()
  let savedHours = []
  let savedText = []
  
  // do a function for the total hours
  function totalHours() {

    // make a function for each time block to display color coded past, present or future based on the time
    $('.time-block').each(function () {

      // since the row values are the same, use attr to grab first 'id' element
      let hourElem = $(this).attr('id')
      // find out what 'this' is by console logging
      console.log(this)
      // remove 'hour-' from the 'id' by using slice() and it does the same throughout the entire length of the element 
      let dayHours = hourElem.slice(5, hourElem.length)
      // use parseInt() to parse string and return it as an integer
      let dayHoursInt = parseInt(dayHours)
      let currentHourInt = parseInt(currentHour)

      // if the hour is equal to the current hour remove past and future and show present
      if (dayHoursInt === currentHourInt) {
        $(this).removeClass('past')
        $(this).removeClass('future')
        $(this).addClass('present')
        // if hour is less than current hour it means that it has passed so show past and remove present and future
      } else if (dayHoursInt < currentHourInt) {
        $(this).removeClass('present')
        $(this).removeClass('future')
        $(this).addClass('past')
        // if hour is more than current hour means that current hour hasn't reached the time yet so show future
      } else if (dayHoursInt > currentHourInt) {
        $(this).removeClass('past')
        $(this).removeClass('present')
        $(this).addClass('future')
      }

    })

  }
  totalHours()

  // make a function to save the hour
  function savedHour() {
    // check browser support
    if (typeof Storage !== 'undefined') {
      // store saved hours to local storage
      localStorage.setItem('savedHours', currentHour)
    }
  }

  // make a function to save the text
  function saveText() {
    let plans = document.querySelector('.description').value
    // check browser support
    if (typeof Storage !== 'undefined') {
      // store saved text to local storage
      localStorage.setItem('savedText', plans)
    }
    savedHour()
  }
  
})