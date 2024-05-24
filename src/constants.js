import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";

const postsData = [
    {
        id: 1,
        dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbiBkMhBMOtv_5tt3LiebQPpIQ0f6dUm5-Xw&s",
        fullName: "Shrimp and Chorizo Paella",
        date: "September 14, 2016",
        postImage: "https://img.delicious.com.au/1DhZnhaT/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg",
        descriptoin: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
    },
    {
        id: 2,
        dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqxRGDxScnshH0TNwWNI-0PKASBEM6nrpcaQ&s",
        fullName: "Samantha Cruz",
        date: "April 15, 1990",
        postImage: "https://images.pexels.com/photos/301703/pexels-photo-301703.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Crafted with care, this mouthwatering paella serves as the ultimate centerpiece for any gathering. Whether it's a lively party or a cozy get-together, cooking this Spanish classic together with your guests adds an extra layer of enjoyment to the occasion."

    },
    {
        id: 3,
        dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUeODHKVq9WCkS9rgndct2-R5gMFER6f_tvw&s",
        fullName: "Alexander Nguye",
        date: "August 27, 1985",
        postImage: "https://images.pexels.com/photos/20192759/pexels-photo-20192759/free-photo-of-rugby-players-during-a-match.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Elevate your hosting game with this sensational paella, guaranteed to steal the show at any soirée. From its rich aroma to its tantalizing taste, cooking this culinary delight alongside your guests transforms mealtime into an unforgettable experience."
    },
    {
        id: 4,
        dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUGkOustinQ05XQ1NonyBj2sYKuxkVA_KZ8g&s",
        fullName: "Olivia Patel",
        date: "September 14, 2016",
        postImage: "https://images.pexels.com/photos/24284368/pexels-photo-24284368/free-photo-of-man-hiking-in-mountains-in-winter.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Embark on a culinary adventure with this sensational paella, perfect for bringing people together and creating lasting memories. As you and your guests join forces in the kitchen, the vibrant colors and enticing aromas"
    },
    {
        id: 5,
        dp: "https://cradlepoint.com/wp-content/uploads/2021/03/Rodeghiero-Paul-sq.jpg",
        fullName: "Elijah Thompson",
        date: "June 8, 1976",
        postImage: "https://images.pexels.com/photos/708440/pexels-photo-708440.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Impress your friends and family with this show-stopping paella, designed to ignite the senses and spark joy with every bite. Whether you're hosting a festive bash or a casual dinner party, cooking this crowd-pleaser together"
    },
    {
        id: 6,
        dp: "https://uefconnect.uef.fi/wp-content/uploads/2019/12/371d8b2d8938359beb25d77642f6ec09_profile_file-500x500.jpg",
        fullName: "Sophia Rodriguez",
        date: "November 3, 2001",
        postImage: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Indulge in the ultimate party fare with this delectable paella, guaranteed to be the talk of the town at your next gathering. As you and your guests come together to create this culinary masterpiece, the shared"
    },
    // {
    //     id: 7,
    //     dp: "https://geo-media.beatsource.com/image_size/500x500/7/b/4/7b450b5f-9432-4ca4-8c76-7207df22d19c.jpg",
    //     fullName: "Daniel Kim",
    //     date: "March 20, 1995",
    //     description: "Unleash your inner chef and delight your guests with this exquisite paella, destined to be the highlight of any social gathering. From its enticing aroma to its flavorful medley of ingredients, cooking this Spanish ",
    //     postImage: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400"
    // },
]

export {
    Navbar,
    Sidebar,
    Rightbar,
    Feed,
    postsData
}