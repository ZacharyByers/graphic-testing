$(document).ready( function() {
  var $usa = $('#usa')
  var $pin1 = $('#pin1')
  var $hoverDisplay = $('#hover-display')

  $usa.on('click', function(data) {
    console.log(data)
  })

  $pin1.on('mouseover', function() {
    console.log('boep')
    $hoverDisplay.append("<p>Hello I have been hovered</p>")
  })

  $pin1.on('mouseout', function() {
    $hoverDisplay.children().remove()
  })
})
