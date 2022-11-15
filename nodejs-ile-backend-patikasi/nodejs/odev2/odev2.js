const posts = [
	  {
		title:"Post 1",
		detail:"Lorem ipsum"
	  },
	  {
		title:"Post 2",
		detail:"Lorem ipsum"
	  },
];

const listPosts = () => new Promise((resolve, reject) => {
	if (posts){
		console.table(posts);
		resolve(posts);
	}
	else{
		reject("Hata oluştu");
	}
});

const addPost = (title, detail) => new Promise((resolve, reject) => {
		if(title && detail){
			posts.push({title, detail});
			resolve(posts);
		}else{
			reject("Hata oluştu");
		}
});


listPosts().catch((err) => console.log(err));
addPost("Post 3", "Lorem ipsum").catch(err => console.log(err));
listPosts().catch((err) => console.log(err));