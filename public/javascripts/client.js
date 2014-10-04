$(document).ready(bindListeners)

function bindListeners () {
  $('.link-button').on('mouseover', showNavigation)
  $('.navigation-links').on('mouseout', hideNavigation)
  $('body').on('click', '.pdf', appendPdf)
  $('body').on('click', '.close', cancel)
}

function showNavigation () {
  // $('.navigation-links').css('display', 'block')
  $('.navbar').append($('.navigation-links').css('display', 'block'))
}

function hideNavigation () {
  $('.navigation-links').css('display', 'none') 
}

function appendPdf (e) {
  e.preventDefault()
  $('html').append('<div class="shadow"></div>')
  console.log(e.target.pathname)
  $('.body').css('display', 'none')
  $('body').prepend('<div class="inline-pdf"><button class="close">Close</button><iframe src="'+ e.target.pathname +'" class="iframe"></iframe></div>')
  $('.close').one('click', cancel)
}

function cancel () {
  $('.body').css('display', 'block')
  $('.shadow').remove()
  $('.inline-pdf').remove()
}