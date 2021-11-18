fetch('https://jsonplaceholder.typicode.com/posts/1')
.then((res)=>{
    return res.json()
})
.then((op)=>{
    console.log(op)
}) 