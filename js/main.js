
    window.onload = function() {
      var node = document.getElementById('blinking-text');
      setInterval(function() {
        visibility = node.style.visibility;
        if (visibility == "") {
          node.style.visibility = "hidden";
        } else {
          node.style.visibility = "";
        }
      }, 800);
    }
