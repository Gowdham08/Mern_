//""//Promise Pending need to learn
//async await need to learn
// need to learn Pending->""

// async function asAw() {
//     var a= 15
//     setTimeout(function () {
//         console.log("hello");
//     },5000);
//     console.log(await a);
// }
// asAw();
// console.log(asAw());
// asAw().then((res)=>{
//     console.log(res);
// })
// .catch((res)=>{
//     console.log(res);
// })

// Instagram  console demo for Post,Like,Comment,Share
// ShareCode=async () =>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("Shared the Post Successfully");
//         },5000);
//     })
// }
CommentCode=async () =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Comment on the Post Successfully");
        },5000);
    })
}

likeCode=async () =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Liked the Post Successfully");
        },5000);
    })
}
async function ShareCode(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Shared the Post Successfully");
        },5000);
    })
}
async function postCode(){
    var post = await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Post created Successfully");
        },5000);
    });
    const [pos,like, comment, share] = await Promise.all([post,likeCode(), CommentCode(), ShareCode()])
    console.log(pos)
    console.log(like)
    console.log(comment)
    console.log(share)

}
postCode()
