
//github
const github = new Github;
//ui
const ui = new UI();

//add event listener
const searchUser=document.getElementById('searchUser');

searchUser.addEventListener('keyup',(e)=> {
    const userText=e.target.value;
    if(userText!=''){
        github.getUser1(searchUser.value)
        .then(data => {
          //console.log(data);
            if(data.message === 'Not Found'){
     //show alert
ui.showAlert('User Not Found','alert alert-danger');
            }else{
                //show profile
          ui.showProfile(data)
           
            }
        })
    
    }else{
  // clear the profile

    }
});