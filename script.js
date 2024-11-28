document.getElementById('rsvp-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const attending = document.getElementById('attending').value;
  
    // Send RSVP details using EmailJS
    emailjs.send('service_rlx9gea', 'template_hagm8ck', {
      from_name: name,  // Match template variable
      reply_to: email,  // Match template variable
      attending: attending
    })
      document.getElementById('response-message').textContent = 'Thank you for your RSVP!';
      document.getElementById('rsvp-form').reset();
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      document.getElementById('response-message').textContent = 'Something went wrong. Please try again.';
    });

