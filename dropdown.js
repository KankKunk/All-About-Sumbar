document.addEventListener("DOMContentLoaded", function() {
    var dropdowns = document.querySelectorAll('.dropdown');
  
    dropdowns.forEach(function(dropdown) {
      dropdown.querySelector('.dropbtn').addEventListener('click', function() {
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === 'block') {
          dropdownContent.style.display = 'none';
        } else {
          dropdowns.forEach(function(item) {
            if (item !== dropdown) {
              item.querySelector('.dropdown-content').style.display = 'none';
            }
          });
          dropdownContent.style.display = 'block';
        }
      });
    });
  
    document.addEventListener("click", function(event) {
      dropdowns.forEach(function(dropdown) {
        var dropdownContent = dropdown.querySelector('.dropdown-content');
        if (!dropdown.contains(event.target) && dropdownContent.style.display === 'block') {
          dropdownContent.style.display = 'none';
        }
      });
    });
  });
  