// window load function
$(window).on('load',function(){

  $('.search-trigger, .close-search').on('click',function(){
    if($('.search-box').hasClass('active')){
      $('.search-box').removeClass('active')
    }
    else{
      $('.search-box').addClass('active')
    }
  })
})

$(window).on('load',function(){

  $('.search-input').keyup(function(){
      var searchField = $(this).val();
      var regex = new RegExp(searchField, "i");
      var output = '';
      var count = 1;
      $.getJSON('http://url4u.in/demo/search-box/scripts/user.json', function(data) {
        $.each(data, function(key, val){
          if ((val.name.search(regex) != -1) || (val.location.search(regex) != -1)) {
            output += '<li>'
            output += '<div class="avatar">'
            output += '<img src="'+val.avatar+'" alt="'+ val.name +'" />';
            output += '</div>'
            output += '<div class="info">'
            output += '<h2>' + val.name + '</h2>';
            output += '<p>' + val.email + '</p>'
            output += '<p>' + val.location + '</p>'
            output += '</div>'
            output += '</li>'
            count++;
          }
          else{
          }
        });
        $('.search-autosuggestion').show().html('<ul>'+ output + '</ul>');
      });
  });
  $(document).on('click','.search-autosuggestion li',function(){
    $('.search-input').val('');
    $('.search-autosuggestion').hide().html('');
    if($('.search-box').hasClass('active')){
      $('.search-box').removeClass('active')
    }
    else{
      $('.search-box').addClass('active')
    }
  })
});
