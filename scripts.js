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




const loginform = document.querySelector('#loginform')

loginform.addEventListener('submit',function(e){
    e.preventDefault();

    const username = document.querySelector('#userName').value.trim();
    const password = document.querySelector('#Password').value.trim();
    const errorContainer = document.querySelector('#errorMessage');
  
    const user
   // if(!username || !password){
   //     errorContainer.textContent ='Please fill in all fields';
   // }else{
   //     errorContainer.textContent = '';
    //}
})