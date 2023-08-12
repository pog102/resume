  // Read and process logo links from logos.txt
  fetch('runners/links.html')
    .then(response => response.text())
    .then(data => {
      const logoContainer = document.getElementById('logoContainer');
            // logoContainer.style.marginLeft = '98px'; // Adjust the left margin here
      const logoLinks = data.split('\n');
            // logoContainer.style.max-width = '79%';
            // logoContainer.style.textAlign = 'center';
      for (const link of logoLinks) {
        if (link.trim() !== '') {
          const img = document.createElement('img');
          img.src = `${link}`;
          img.alt = 'Game Logo1';
         img.style.width = '300px'; // Adjust the image size her
        img.style.margin = '10px'; // Adjust the margin space here
         img.style.position = 'relative';
            img.style.zIndex = '1';
                      // img.style.marginLeft = '-100px'; // Adjust the overlap distance here
          logoContainer.appendChild(img);
        }
      }
    })
    .catch(error => {
      console.error('Error fetching and displaying logo links:', error);
    });
