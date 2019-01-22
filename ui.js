class UI{

    constructor(){
        this.profile=document.getElementById('profile');
    }

   showProfile(user){

    //console.log(user);
    this.profile.innerHTML=`
 <div class='card card-body mb-3'>
 <div class='row'>
  <div class='col-md-3'>
  <image class='img-fluid mb-2' src='${user.avatar_url}'>
  <a href='${user.html_url} target='_blnk' class='btn btn-primary btn-block'>View Profile</a>

  <div class='col-md-9'>
  <span class"badge badge-primary">Public Repos: ${user.public_repos} </span>
  <span class"badge badge-secondary">Public Gists: ${user.public_gists} </span>

  <span class"badge badge-success">Followers:${user.followers}</span>
  <span class"badge badge-info">Following:${user.following}</span>
  <br> </br>
    </div>
    <ul class='list-group'>
    <li class='list-group-item'>Company:${user.company}</li>
    <li class='list-group-item'>Website/blog:${user.blog}</li>
    <li class='list-group-item'>Location:${user.location}</li>
    <li class='list-group-item'>Member Since:${user.created_at}</li>
    </div>
    </div>
    </div>
    <h3 class='page-heading mb-3'></h3>  
    `;
   }
   showAlert(message,className){
       const div =document.createElement('div');
       div.className=className;
       div.appendChild(document.createTextNode(message));
       const container=document.querySelector('.searchContainer');
       const search= document.querySelector('.search');

       container.insertBefore(div,search);
   }
   }



    
    


