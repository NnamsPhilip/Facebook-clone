// -----------------SEARCH BOX------------------
const searchBox = document.querySelector('.search-box');
const searchContainer = document.querySelector('.search-container');
const backArrow = document.querySelector('.back-arrow');

searchBox.addEventListener("click", function () {
    searchContainer.style.display = "block";
})

backArrow.addEventListener("click", function () {
    searchContainer.style.display = "none";
})


// -----------------SETTINGS SEEMORE------------------
const seeMoreOption = document.querySelector('.see-more-option');
const seeLessOption = document.querySelector('.see-less-option');
const seeMoreContent = document.querySelector('.see-more-content');

seeMoreOption.addEventListener("click", function () {
    seeMoreContent.classList.remove("see-more-content");
    seeMoreOption.parentElement.style.display = 'none';
})

seeLessOption.addEventListener("click", function () {
    seeMoreContent.classList.add("see-more-content");
    seeMoreOption.parentElement.style.display = 'block';
})

// ---------------------STORIES----------------------
const allStories = [];

function StoryBlock(userProfile, story, userName) {
    this.userProfile = userProfile;
    this.story = story;
    this.userName = userName;
}

const storyOne = new StoryBlock(
    "images/img-1.png",
    "images/img-2.png",
    "Jessica Moore"
);
allStories.push(storyOne);

const storyTwo = new StoryBlock(
    "images/img-2.png",
    "images/img-4.png",
    "Estee"
);
allStories.push(storyTwo);

const storyThree = new StoryBlock(
    "images/img-3.png",
    "images/img-6.png",
    "Obi Emmanuel"
);
allStories.push(storyThree);

allStories.forEach((e)=>{
    const stories = document.querySelector(".cards");

    const userStory = document.createElement("img");
    userStory.setAttribute("src", e.story);
    
    const story = document.createElement("div");
    story.classList.add("card");
    story.style.background = userStory;

    const userProfile = document.createElement("img");
    userProfile.setAttribute("src", e.userProfile);
    userProfile.classList.add("user");
    story.append(userProfile);
    
    const userName = document.createElement("paragraph");
    userName.textContent = e.userName;
    story.append(userName);
    
    stories.append(story);
})


// ---------------------POST-SECTION----------------------
const SectionBox = document.querySelectorAll(".section-box");
const Reels = document.querySelector(".reels");
const Rooms = document.getElementsByClassName("rooms");

SectionBox.forEach(function (value) {
    value.addEventListener("click", () => {
        SectionBox.forEach((p) => {
            p.classList.remove('active')
        });
        value.classList.toggle("active")
    })
})

const card = document.querySelector(".card")
const storyPage = document.querySelector(".storyPage");

// const imgDiv = document.querySelector(".custom-preview");
// const imgFile = document.getElementById("image-file");
// const customImg = document.getElementById("custom-image");

const closeStoryPage = document.querySelector("#closeStory");
const nav = document.getElementById("nav");
const navMiddle = document.querySelector(".middle");
const navLeft = document.querySelector(".left");
const messanger = document.querySelector(".Messanger");
const storyPrivacy = document.querySelector("#storyPrivacy");
const customStory = document.querySelector(".custom-story");
const CustomList = document.querySelectorAll(".custom-story .middle li");
const cancelCustom = document.getElementById("cancel-custom");

card.addEventListener("click", () => {
    storyPage.style.display = "block";
    closeStoryPage.classList.add("storyPageClose");
    nav.classList.add("storyPageNav");
    navMiddle.classList.add("storyPageMiddle");
    navLeft.classList.add("storyPageLeft");
    messanger.classList.add("storyPageMessanger");
    searchBox.classList.add("storyPageSearch");
    customStory.classList.remove("ActiveCustomStory");
})

closeStoryPage.addEventListener("click", () => {
    storyPage.style.display = "none";
    closeStoryPage.classList.remove("storyPageClose");
    nav.classList.remove("storyPageNav");
    navMiddle.classList.remove("storyPageMiddle");
    navLeft.classList.remove("storyPageLeft");
    navLeft.style.background = "var(--color-white)";
    messanger.classList.remove("storyPageMessanger");
    searchBox.classList.remove("storyPageSearch");
})

const previewUpload = document.querySelector(".previewUpload");
const imgFile = document.getElementById("image-file");
const customImg = document.getElementById("custom-image");
const confirmStory = document.querySelector(".confirm-story");
const confirmStoryDiscard = document.querySelector(".confirm-story .discard");
const confirmStoryShare = document.querySelector(".confirm-story .share");

imgFile.addEventListener("change", function () {
    const choosefile = this.files[0]

    if (choosefile) {
        const reader = new FileReader();
        reader.addEventListener("load", function () {
            customImg.setAttribute('src', reader.result);
        });

        reader.readAsDataURL(choosefile);
        confirmStory.style.display = "flex";
        previewUpload.style.display = "flex";
    }
})

confirmStoryDiscard.addEventListener("click", () => {
    if (confirmStory.style.display == "flex" && previewUpload.style.display == "flex") {
        confirmStory.style.display = "none";
        previewUpload.style.display = "none";
    } else { }
});

storyPrivacy.addEventListener("click", () => {
    customStory.style.display = "flex";
    navLeft.style.background = "var(--fds-gray-10)";
})

cancelCustom.addEventListener("click", () => {
    customStory.style.display = "none";
    navLeft.classList.add("white");
})

CustomList.forEach(function (active) {
    active.addEventListener("click", () => {
        CustomList.forEach((a) => {
            a.classList.remove('active-custom')
        });
        active.classList.add("active-custom")
    })
})



const uploadPicture = document.getElementById("upload");
const postTextArea = document.querySelector("textarea");
const createPost = document.querySelector(".create-post");
const closeCreatePost = document.getElementById("close-Post");

uploadPicture.addEventListener("click", () => {
    createPost.classList.add("activeCreatePost");
})

closeCreatePost.addEventListener("click", () => {
    createPost.classList.remove("activeCreatePost");
})

postTextArea.addEventListener("keyup", e => {
    // textarea.style.height = "20px";
    let autoHeight = e.target.scrollHeight;
    textarea.style.height = `${autoHeight}px`;
})

