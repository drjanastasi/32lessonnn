let users=[]
function adduser (){
   let name = document.querySelector('#name').value
    //console.log(name)
    let age = document.getElementById('age').value 
    //console.log(age)
    let user ={
        name: name,
        age
    }
   // console.log(user)
    users.push(user)
    //console.log(users)
    let userlist=document.querySelector('.spisok')
    userlist.insertAdjacentHTML('beforeend',`
        <li>
            <div class='name'>${user.name}</div>
            <div class='age'>${user['age']}</div>
        </li>
    
    `)
    localStorage.setItem('username', user.name)
    console.log(localStorage)
}