

// sidenavbar start
document.getElementById('sidebarButton').addEventListener('click', function() {
    document.getElementById('sidebar').classList.add('active');
  });
  
  document.getElementById('closeButton').addEventListener('click', function() {
    document.getElementById('sidebar').classList.remove('active');
  });
  //sidenavbar end