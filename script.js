
  <script>
    // Disable right-click
    document.addEventListener('contextmenu', event => event.preventDefault());

    // Disable inspect element and Ctrl+U
    document.addEventListener('keydown', event => {
      if (event.ctrlKey && event.shiftKey && event.keyCode === 73) {
        event.preventDefault();
      }
    });

    // Disable text highlighting
    document.addEventListener('selectstart', event => event.preventDefault());

    // Disable clipboard copying
    document.addEventListener('copy', event => {
      event.preventDefault();
      alert('Copying content from this page is not allowed');
    });
  </script>

  <script> window.addEventListener('resize', function() {
    const borderWidth = window.outerWidth - window.innerWidth;
    const topBorderWidth = window.outerHeight - window.innerHeight - borderWidth;
    const bottomBorderWidth = borderWidth - topBorderWidth;
    const outerWidth = window.outerWidth;
  
    if (borderWidth > 200 || topBorderWidth > 200 || bottomBorderWidth > 200 || outerWidth > 200) {
      location.replace("https://www.far0ffgames.github.io/404.html"); //trust it takes to 404
    }
  });
    </script>
