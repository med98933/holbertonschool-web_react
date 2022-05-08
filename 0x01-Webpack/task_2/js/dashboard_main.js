const $ = require('jquery');
const _ = require('lodash');

$('body').append(
  $('<p>').text('Holberton Dashboard'),
  $('<p>').attr('id', 'count'),
  $('<p>').text('Copyright - Holberton School'),
  $('<p>').text('Dashboard data for the students'),
  $('<button>').text('Click here to get started'),
)

function updateCounter() {
  let countTag = $('#count');
  let count = parseInt(countTag.attr('click_count')) || 0;

  $('button').click(function () {
    countTag.text(`${++count} clicks on the button`);
    countTag.attr('click_count', count);
  });
}

_.debounce(updateCounter, 500);
updateCounter();