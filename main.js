// JavaScript code to simulate looping typing animation with different words and colors
function typeLoopAnimation(element, wordsWithColors, delay = 1000) {
    let index = 0;

    function typeNextWord() {
        const { word, color } = wordsWithColors[index];
        typeAnimation(element, word, color, () => {
            setTimeout(eraseText, delay);
        });
        index = (index + 1) % wordsWithColors.length;
    }

    function eraseText() {
        const text = element.textContent;
        if (text.length === 0) {
            setTimeout(typeNextWord, delay);
        } else {
            setTimeout(() => {
                element.textContent = text.slice(0, -1);
                eraseText();
            }, 50);
        }
    }

    typeNextWord();
}

// Function for typing animation with color
function typeAnimation(element, text, color, callback, delay = 100) {
    let index = 0;
    const intervalId = setInterval(() => {
        if (index < text.length) {
            element.innerHTML += `<span style="color: ${color};">${text.charAt(index)}</span>`;
            index++;
        } else {
            clearInterval(intervalId);
            if (callback) callback();
        }
    }, delay);
}

// Call the function to start looping typing animation
const typingElement = document.getElementById('typing');
const wordsToTypeWithColors = [
    { word: 'Web Developer', color: 'red' },
    { word: 'Web Engineer', color: 'orange' },
    { word: 'UI/UX Designer', color: 'pink' }
]; // Add more words with colors as needed
typeLoopAnimation(typingElement, wordsToTypeWithColors);





// Smooth scroll to the target section
function smoothScroll(target) {
    const section = document.getElementById(target);
    window.scroll({
      top: section.offsetTop,
      behavior: 'smooth'
    });
  }
  
  // Add animation to the target section
  function animateSection(target) {
    const section = document.getElementById(target);
    section.style.opacity = '0';
    setTimeout(() => {
      section.style.opacity = '1';
    }, 300); // Adjust animation duration as needed
  }
  
  // Add click event listeners to navigation links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault(); // Prevent default link behavior
      const targetId = link.getAttribute('href').substring(1); // Get target section ID
      smoothScroll(targetId); // Smoothly scroll to the target section
      animateSection(targetId); // Animate the target section
    });
  });
  

  document.addEventListener('DOMContentLoaded', function() {
    var welcomeOverlay = document.getElementById('welcomeOverlay');
    var welcomeMessage = document.getElementById('welcomeMessage');

    // Show the overlay and welcome message
    welcomeOverlay.style.opacity = '1';
    welcomeOverlay.style.pointerEvents = 'auto'; // Enable clicks
    welcomeMessage.style.opacity = '1';

    // Hide the welcome message after 3 seconds
    setTimeout(function() {
      welcomeOverlay.style.opacity = '0';
      welcomeOverlay.style.pointerEvents = 'none'; // Disable clicks
      welcomeMessage.style.opacity = '0';
    }, 3000); // 3 seconds
  });