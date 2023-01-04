  window.onload = rotate;

var theAd = 0;
var adImages = ["./images/desktop-image-hero-1.jpg", "./images/desktop-image-hero-2.jpg","./images/desktop-image-hero-3.jpg"]

var headerChange = 0;
var headerType = ['Discover innovative ways to decorate', 'We are available all across the globe','Manufactured with the best materials']

var paragraphChange = 0;
var paragraphType = ['We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love','With stores all over the world, its easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Do not hesitate to contact us today.','Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of  experience in this industry, we understand what customers want for their home and office.']

function rotate(){
    theAd++;
    if (theAd == adImages.length) {
        theAd = 0;
    }
    document.getElementById("imgid").style.backgroundImage=`url(${adImages[theAd]})`
    setTimeout(rotate, 6 * 1000),

    headerChange++;
    if (headerChange == headerType.length) {
        headerChange = 0;
    }
    document.getElementById('change').innerHTML = `${headerType[headerChange]}`,

    paragraphChange++;
    if (paragraphChange == paragraphType.length){
        paragraphChange = 0;
    }
    document.getElementById('paragraph').innerHTML = `${paragraphType[paragraphChange]}`
}
function changeScr(){
    theAd++;
    if (theAd == adImages.length) {
        theAd = 0;
    }
    document.getElementById("imgid").style.backgroundImage=`url(${adImages[theAd]})`

    headerChange++;
    if (headerChange == headerType.length) {
        headerChange = 0;
    }
    document.getElementById('change').innerHTML = `${headerType[headerChange]}`

     paragraphChange++;
    if (paragraphChange == paragraphType.length){
        paragraphChange = 0;
    }
    document.getElementById('paragraph').innerHTML = `${paragraphType[paragraphChange]}`
}
function revChange(){
    theAd--;
    if (theAd < adImages.length) {
        theAd = 0;
    }
    document.getElementById("imgid").style.backgroundImage=`url(${adImages[theAd]})`

     headerChange--;
    if (headerChange < headerType.length) {
        headerChange = 0;
    }
    document.getElementById('change').innerHTML = `${headerType[headerChange]}`

     paragraphChange--;
    if (paragraphChange < paragraphType.length){
        paragraphChange = 0;
    }
    document.getElementById('paragraph').innerHTML = `${paragraphType[paragraphChange]}`
}
hamburger = document.querySelector('.hamburger');
shut = document.querySelector('.shut');
modalContainer = document.querySelector('.modal-container');
hamburger.addEventListener('click', () =>{
    modalContainer.classList.remove('none')
})
shut.addEventListener('click', () =>{
    modalContainer.classList.add('none')
})