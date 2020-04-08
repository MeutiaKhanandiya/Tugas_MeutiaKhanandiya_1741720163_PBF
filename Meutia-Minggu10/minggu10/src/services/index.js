const domainPath = 'http://localhost:3000/posts';
const GetAPI = (path) => {
    const promise = new Promise ((resolve, reject) => {
        fetch(`${domainPath}/${path}`)
        .then(response => response.json())
        .then((result) => {
            resolve(result);
        }, (err) => {
            reject(err);
        })
    })
    return promise;
}


const promise = new Promise((resolve, reject) => {
    fetch(`${domainPath}/${path}`, {
        method: 'post',
        headers: {
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then((result) => {
        resolve(result);
    }, (err) => {
        reject(err);
    })
})
return promise;


const getNewsBlog = () => GetAPI('posts?_sort=id8_order=desc');
const postNewsBlog = (dataYgDikirim) => PostAPI('posts', dataYgDikirim);

const API = {
    getNewsBlog,
    postNewsBlog
}

export default API;