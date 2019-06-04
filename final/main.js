$(document).ready(function(){
// Carousel
$('.carousel').carousel({
    interval: 5400
  })

// Shop Counter--------
    var button = document.getElementById('Buy')
    var number = document.getElementById('output'),
    count = 0;
    button.onclick = function() {
        count += 1;
        number.innerHTML =  count;
    };

    // Shake (Not working)------------
    // $(document).click(function(){
    //    $("#shopIcon").effect( "shake");
    // });

    // Form Validation-------------
    function validateForm() {
        var x = document.forms["#myForm"].value;
        if (x == "") {
            alert("Name must be filled out");
            return false;
        }
    }

    // $('input').on('blur keyup', function(){
    //     if ($("#myForm").valid()) {
    //         $('#confirm').prop('disabled', false);
    //     } else {
    //         $('#confirm').prop('disabled', 'disabled');
    //     }
    // });

    // $('#myForm').validate({
    //     rules: {
    //         email: {
    //             required: true,
    //             email: true
    //         },
    //         password: {
    //             required: true,
    //             minlength: 5
    //         },

    //     }
    // });
});