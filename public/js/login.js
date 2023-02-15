const loginFormHandler = async (event) => {
    event.preventDefault();


const email = document.querySelector('#email-login').value.trim();
const password = document.querySelector('#pass-login').value.trim();
if (email && password) {
    // fetching the /api/users/login url
    const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({email, password}),
        headers: {'Content-Type': 'application/json'},
        
    });
    // if everything is goes well, it will move on to the homepage
    if(response.ok){
        document.location.replace('/');
    } else {
       alert('Failed to log in');
    }
  }
};


const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    
    if (email && password) {
         // fetching the /api/users/login url
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({username, email, password}),
            headers: {'Content-Type': 'application/json'},
            
        });
         // if everything is goes well, it will move on to the homepage
        if(response.ok){
            const userData = await response.json();
            document.location.replace('/');
        } else {
           alert(response.statusText);
        }
      }
    };

document
    .querySelector('.loginContainer')
    .addEventListener('submit', loginFormHandler);

    document
    .querySelector('.signupContainer')
    .addEventListener('submit', signupFormHandler);