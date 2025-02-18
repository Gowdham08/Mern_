// Promise -> (Syntax) new Promise((resolve,reject)=>{})
    //location Finder
    //1.Promise (LocFound,LocNotFound)
    //2.chennai -> 2000
    function locationFinder(loc, time) {
        var location= new Promise((Locationfound, Locationnotfound) => {
            setTimeout(() => {
                if (isLocationfound(loc,time)) {
                    Locationfound("Location found: "+loc);
                } else {
                    Locationnotfound("Location not found: "+loc);
                }
            }, time);
        });
        location.then((Locationfound)=>{
            console.log(Locationfound);
        })
        .catch((Locationnotfound)=>{
            console.log(Locationnotfound);
        })
    }
    isLocationfound =((loc,time)=>
        {
        location1 = "chennai";
        time1 = 1000;
        if(time1<=time && loc == location1){
            return true;
        }
        else{
            return false;
        }
    })
    locationFinder("chennai", 2000);

    
// function PromiseEg(value) {
//     // 1.direct method
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (value)resolve("The Promise is resolved")
//             else reject("The Promise is rejected")
            
//         }, 2000);

//     })
// }
 // "then" method how it works
// PromiseEg(false)
// .then((res) => {
//     console.log(res);
// })
// .catch((res) =>{
//     console.log(res);
// });
// //praticing promise
// function promisePracticing(Like) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(Like) resolve("I have liked this");
//             else reject("I have not liked this");
//         },1000)
//     })
// }
// promisePracticing(false)
// .then((a) =>{
//     console.log(a);
// })
// .catch((a) =>{
//     console.log(a);
// });