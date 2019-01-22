class Github{

constructor(){
 this.client_id='e08f108439636147c8f2';
 this.client_secret='27b2aa537c3582b4c971612018b0bc4453cd15cf';
}  

async getUser1(user){
const profileResponse1= await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret},lashman`);
console.log(profileResponse1);
const profile= await profileResponse1.json();

return profile;


}
 

}
profile.textContent='';
profile.style.color='red'
document.body.style.backgroundColor='';