document.getElementById('rsvp-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const attending = document.getElementById('attending').value;
    const comments = document.getElementById('comments').value;

    // Debug: Log values to ensure they are being captured
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Attending:', attending);
    console.log('Comments:', comments);

    // Send RSVP details using EmailJS
    emailjs.send('service_rlx9gea', 'template_hagm8ck', {
      from_name: name,        
      reply_to: email,        
      attending: attending,   
      comments: comments      
    })
    .then(() => {
      document.getElementById('response-message').textContent = 'Thank you for your RSVP!';
      document.getElementById('rsvp-form').reset();
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      document.getElementById('response-message').textContent = 'Something went wrong. Please try again.';
    });
});
