// window load function
$(window).on('load',function(){
  hidePageLoader();
})

// show page loader function.
function showPageLoader(){
  $('.loader').show();
}
// hide page loader function
function hidePageLoader(){
  $('.loader').hide();
}
