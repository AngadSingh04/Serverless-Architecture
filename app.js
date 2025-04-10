document.getElementById("subscribe-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    
    try {
        const response = await fetch('', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email })
        });
        
        if (response.ok) {
            alert('Thank you for subscribing! Check your email.');
            document.getElementById("email").value = ""; 
        } else {
            alert('Subscription failed. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Subscription failed. Please try again.');
    }
});