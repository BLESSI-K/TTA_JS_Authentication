const users = [
    {
        username:'admin',
        password: 'admin123',
        role:'admin'
    },
    {
        username:'editor',
        password: 'editor123',
        role:'editor'
    },
    {
        username:'viewer',
        password: 'viewer123',
        role:'viewer'
    }
]

document.addEventListener('DOMContentLoaded', () =>{
    const savedRole = localStorage.getItem('userRole');
    if(savedRole){
        displayContent(savedRole);
    }
})


const loginform = document.querySelector('#loginform')

loginform.addEventListener('submit',function(e){
    e.preventDefault();

    const username = document.querySelector('#userName').value.trim();
    const password = document.querySelector('#Password').value.trim();
    const errorContainer = document.querySelector('#errorMessage');
    const successContainer = document.querySelector('#successMessage');
    
    

    if(!username || !password){
        errorContainer.textContent ='Please fill in all fields';
       }else{
        const user = users.find(user => user.username === username && user.password === password);
        if(user){
            errorContainer.textContent = '';
            successContainer.textContent=`Welcome ${user.role}`;
            localStorage.setItem('userRole',user.role);
            displayContent(user.role);
           //alert(`Welcome ${user.role}`);
        }else{
            errorContainer.textContent = 'Invalid username or password';
        }
       }
   

  

})

function displayContent(role){
    const loginConctainer = document.querySelector('.login-container');
    loginConctainer.style.display = 'none';
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'content';

    if(role === 'admin'){
        contentDiv.innerHTML =`
        <h2> Welcome ${role}</h2>
         <button class= >create</button>
         <button>view</button>
         <button>Edit</button>
         <button>Delete</button>`
           
    }else if(role ==='editor'){
         contentDiv.innerHTML =`
        <h2> Welcome ${role}</h2>
        `
    }else if(role === 'viewer'){
         contentDiv.innerHTML =`
        <h2> Welcome ${role}</h2>
        </p>`
    }

   const logoutButton = document.createElement('button');
   logoutButton.textContent = 'Logout';
   logoutButton.classList.add('logout-button');

   logoutButton.addEventListener('click',logout);

   contentDiv.appendChild(logoutButton);
    
    document.body.appendChild(contentDiv);
}
const logout = () => {
    localStorage.removeItem('userRole');
    location.reload();
}

