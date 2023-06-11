function createPost(){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        user.push({username:"Aditi"});
        resolve();
       },2000);
    });
}

function updateLastUserActivityTime (){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        user.lastactivetime = new Date().getTime();
        resolve( user.lastactivetime);
      },1000);
    })
  }

  function displayPost(){
    return new Promise((resolve,reject)=>{
      user.forEach(element => {
        console.log(element);
        resolve();
       });
    })
   
  }

  function deletePost(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        if(user.length>0){
          const PopedEle = user.pop();
          resolve(PopedEle);
        }
        else{
          reject("ERROR: ARRAY IS EMPTY");
        }
      },2000);
     
    })
  }


const user = [{
    username: "Shubhajit",
    lastactivetime: new Date()
}];

Promise.all([createPost(),updateLastUserActivityTime()])
.then(([createPostresolves,updatelastactivitytimesresolves])=>{
  displayPost().then(()=>{
    console.log("Last Activity time is "+updatelastactivitytimesresolves);
    deletePost().then((delet1)=>{
      console.log("Deleted Item is "+delet1.username);
      displayPost();
    })

  })
  
}).catch((err)=>{
  console.log(err);
})
