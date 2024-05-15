// $(document).ready(function() {
//     $('#list').click(function(event){event.preventDefault();$('#products .item').addClass('list-group-item');});
//     $('#grid').click(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item');$('#products .item').addClass('grid-group-item');});
// });



// // JavaScript code to show and hide the pop-up modal
// document.getElementById('popup-btn').addEventListener('click', function() {
//     document.getElementById('popup').style.display = 'block';
// });

// document.querySelector('.close').addEventListener('click', function() {
//     document.getElementById('popup').style.display = 'none';
// });





function openPopup(popupId) {
    document.getElementById(popupId).style.display = "block";
  }
  
  function closePopup(popupId) {
    document.getElementById(popupId).style.display = "none";
  }
  
  