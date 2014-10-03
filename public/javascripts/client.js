$(document).ready(bindListeners)

function bindListeners () {
  $('.link-button').on('mouseover', showNavigation)
  $('.link-button').on('mouseout', hideNavigation)
}

function showNavigation () {
  // $('.navigation-links').css('display', 'block')
  $('.navbar').append($('.navigation-links').css('display', 'block'))
}

function hideNavigation () {
  $('.navigation-links').css('display', 'none') 
}