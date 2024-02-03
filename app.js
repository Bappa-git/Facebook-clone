let storyData=[{
    id:"1",
    image:"./images/profile.jpg",
    name:"Bappa"

},
{
    id:"2",
    image:"./images/story2.jpg",
    name:"Eshita"
},
{
    id:"3",
    image:"./images/story3.jpg",
    name:"James"
},
{
    id:"4",
    image:"./images/story4.jpg",
    name:"William"
},
{
    id:"3",
    image:"./images/story3.jpg",
    name:"James"
},
// {
//     id:"3",
//     image:"./images/story3.jpg",
//     name:"James"
// },
// {
//     id:"3",
//     image:"./images/story3.jpg",
//     name:"James"
// },
// {
//     id:"3",
//     image:"./images/story3.jpg",
//     name:"James"
// },
// {
//     id:"3",
//     image:"./images/story3.jpg",
//     name:"James"
// },
];

let mainDiv=document.querySelector(".storyflx");

storyData.forEach(myfunction);


function myfunction(item){
  
    let childDiv=document.createElement('div');
    childDiv.classList.add("story");
    mainDiv.appendChild(childDiv);
    childDiv.innerHTML=`<img src="${item.image}"><h5>${item.name}</h5>`;
    
   
   
};








let allPost=[
 { 
    id:"1",
    name:"Bappa",
    image:"./images/post1_n.jpg",
    massg:"Lorem ipsum dolor sit amet consectetur,",
 },
 {  
    id:"2",
    name:"Kunal",
    image:"./images/post2.jpg",
    massg:"Lorem ipsum dolor sit amet consectetur,",
 },
 {  
    id:"3",
    name:"Binay",
    image:"./images/post3.jpg",
    massg:"Lorem ipsum dolor sit amet consectetur,",
 },
 {  
    id:"4",
    name:"Probal",
    image:"./images/post4_n.jpg",
    massg:"Lorem ipsum dolor sit amet consectetur,",
 },
 {  
    id:"4",
    name:"Mistu",
    image:"./images/post4_n.jpg",
    massg:"Lorem ipsum dolor sit amet consectetur,",
 },
 {  
    id:"4",
    name:"Rethtik",
    image:"./images/post4_n.jpg",
    massg:"Lorem ipsum dolor sit amet consectetur,",
    
 }
];

let postDiv= document.querySelector(".postrap");
allPost.forEach(myfun);

function myfun(item,ind){
    let newDiv=document.createElement('div');
    newDiv.classList.add("post");
   
    newDiv.innerHTML= `
    <div class="postflx">
                        <div class="postlogo"><img src="./images/profile.jpg" alt=""></div>
                        <div class="postlogo">
                            <h5>${item.name}</h5>
                            <h6>about one hour ago</h6>
                        </div>
                        <div class="postlogo"></div>
                    </div>
                    <div class="bio">
                        <h4> ${item.massg}<br> adipisicing elit. Saepe dicta numquam, sed
                            maiores explicabo nostrum ab <br> et delectus asperiores inventore nam voluptate porro animi
                            cupiditate <br>in vitae accusamus non cum rem <br> maxime eius! Molestiae.</h4>
                    </div>
                    <div class="pstbanner">
                        <img src="${item.image}" alt="">
                    </div>
                    <div class="like">
                        <div class="likeflx">
                            <div class="flx"><i class="fa-regular fa-thumbs-up"></i>
                                <h3>Like</h3>
                            </div>
                            <div class="flx"><i class="fa-regular fa-comment"></i>
                                <h3>Comment</h3>
                            </div>
                            <div class="flx"><i class="fa-solid fa-share"></i>
                                <h3>Share</h3>
                            </div>
                        </div>

                    </div>

                    <div class="upcon_flx">
                        <div class="logoup"><img src="./images/profile.jpg" alt=""></div>
                        <div class="textup"><input type="text" placeholder="Write a comment"></div>
                    </div>`
    postDiv.appendChild(newDiv);


   
}






