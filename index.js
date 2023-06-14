// console.log('person1: shows ticket');
// console.log('person2: shows ticket');

// const promiseWifeBringingTickits = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve('Tickit');
//   },3000);
// });

// const getPopcon = promiseWifeBringingTickits.then((t)=>{
//   console.log("wife: i have the tickits");
//   console.log(`husband: we should go in`);
//   console.log(`wife: no i am hungry`);
//   return new Promise((resolve,reject)=>{
//     resolve(`${t} popcorn`);
//   })
// });

// const getButter = getPopcon.then((t)=>{
//   console.log("husband: i got some popcorn");
//   console.log(`husband: we should go in`);
//   console.log(`wife: no i need butter on my popcorn `);
//   return new Promise((resolve,reject)=>{
//     resolve(`${t} butter`);
//   })
// });

// getButter.then((t)=>{
//   console.log(t)
// });


// console.log('person4: shows ticket');


// After Async and Await 

console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async() => {

  const promiseWifeBringingTickits = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('ticket');
    },2000);
  });

  const getPopcorn = new Promise((resolve,reject)=>resolve('popcorn'));
  const addButter = new Promise((resolve,reject)=>resolve('butter'));
  const getColdDrinks = new Promise((resolve,reject)=>resolve('cold_drinks'));
  const getCandy = new Promise((resolve,reject)=>resolve('candy'));
  const getCoke = new Promise((resolve,reject)=>resolve('coke'));

  let ticket ;

  try{

    ticket = await promiseWifeBringingTickits;
  } 
  catch(e)
  {
    ticket = 'sad face';
  }


  
 

  

  //  console.log(`wife i have the ${ticket}`);
  //  console.log(`husband: we should go in`);
  //  console.log(`wife: no i am hungry`);

  //  let popcorn = await getPopcorn;
  //  console.log(`husband: i got some ${popcorn}`);
  //  console.log(`husband: we should go in`);
  //  console.log(`wife: no i need butter on my popcorn `);

  //  let butter = await addButter;

  //  console.log(`husband: i got some ${butter}`);
  //  console.log(`husband: anything else darling?`);
  //  console.log(`wife:lets go we are getting late`);
  //  console.log(`husband: thank you for the reminder *grinds*` );

  //  console.log("wife: I want cold Drinks");

   let coldDrinks = await getColdDrinks;

   console.log(`husbandL i got some ${coldDrinks}`);
   console.log(`Thank you dear..!!`);

  let [popcorn,candy,coke] = await Promise.all([getPopcorn,getCandy,getCoke]);

  console.log(`${popcorn},${candy},${coke}`);

  return ticket;
}
// 
// 
// console.log(`wife i have the ${ticket}`);
// console.log(`husband: we should go in`);
// console.log(`wife: no i am hungry`);

preMovie().then((m)=> console.log(`person3 shows ${m}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');




// console.log('person5: shows ticket');



// Task 4
// function deletePost(){
//   return new Promise((resolve,reject)=>{
   
   
//   })
// }


// function createPost(){
//   return new Promise((resolve,reject)=>{
    
//   });
// }



async function maskePost(){
  const createPost = await new Promise((resolve,reject)=>{
    setTimeout(()=>{
      user.push({username:"Aditi"});
      resolve();
     },2000);
    
  })

  const deletePost = await new Promise((resolve,reject)=>{
    
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