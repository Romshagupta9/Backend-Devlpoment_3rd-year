//function to get a comment data
console.log(axios);
// function getComment(URL) {
//     //how to send get request using axios
//     axios.get(URL).then((data)=>{
//         console.log(data);
//     })
//     .catch(err=>
//         console.log(err))
// }
//now do the same with async await
async function getCommentAsync(URL) {
    try {
        let response = await axios.get(URL);
        console.log(response);
    } catch (err) {
        console.log(err);
    }
}
//call the function
getCommentAsync("https://jsonplaceholder.typicode.com/comments");

// getComment("https://jsonplaceholder.typicode.com/comments");
// function to add new blog
addBlog("http://localhost:3300/blog", "My First Blog", "This is the content of my first blog.");
async function addBlog(URL, title, content) {
    try {
        let newBlog = {
        title: title,
        content: content
    }
    let response = await axios.post(URL, newBlog)
    console.log(response);
    } 
    catch (error) {
        console.error(error);
    }
}