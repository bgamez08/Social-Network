$(document).ready(function() {
   
   //On click signup, hide login and show regristration form
   $('#signup').click(function() {
        $('#first').slideUp('slow', function() {
            $('#second').slideDown('slow');      
        });
   });
   
      //On click signup, hide regristration form and show login
   $('#signin').click(function() {
        $('#second').slideUp('slow', function() {
            $('#first').slideDown('slow');      
        });
   });
});