const $header = $('#message');
const $headerText = $('#message p');

// Click Header to Change Text
$header.on('click', () => {
    $headerText.text('Have a Good Time!');
});

// Use JavaScript to add the Call to Action button
const $main = $('main');
const $callToAction = $('<button>Call to Action</button>');
$main.children().eq(1).after($callToAction);

//Hide the Content Boxes under Call to Action
$callToAction.nextAll().hide();

// Click to Show More Content Boxes
$main.on('click', 'button', function(event){
    $(this).nextAll().show();
});

