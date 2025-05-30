$(document).ready(function () {
    // Toggle slide up/down on click
    $('.settings i').click(function () {
        $('.settings ul').slideToggle();
    });

    // modal

// Open modal (assumes each button targets a modal via data attribute)
$('.open-modal-btn').on('click', function () {
  const target = $(this).data('target'); // e.g., "modal1"
  $('#' + target).addClass('active'); // e.g., <div id="modal1" class="modal-bg">
});

// Close modal
$('.close-modal').on('click', function () {
  $(this).closest('.modal-bg').removeClass('active');
});


    
//        $('.accordion-header').on('click', function() {
//      const item = $(this).parent();
//      if (item.hasClass('active')) {
//        item.removeClass('active');
//      } else {
//        $('.accordion-item').removeClass('active');
//        item.addClass('active');
//      }
//    });
    
    
    $('.accordion-header').on('click', function () {
  const item = $(this).parent();
  const firstFieldsetFirstItem = $('fieldset').first().find('.accordion-item').first();

  if (item.hasClass('active')) {
    // Don't allow removing 'active' from the protected first item
    if (!item.is(firstFieldsetFirstItem)) {
      item.removeClass('active');
    }
  } else {
    // Remove 'active' from all items except the protected one
    $('.accordion-item').not(firstFieldsetFirstItem).removeClass('active');
    item.addClass('active');
  }
});


});