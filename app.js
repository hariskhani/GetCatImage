
const generateBtn = document.getElementById('clickBtn');
// const image =document.querySelector('.img')
// console.log(image);
const catName = document.getElementById('catName')
const image = document.getElementById('catImg')
const description = document.getElementById('desc')
const wikiurl = document.getElementById('wikiurl')

// console.log(catName)
// console.log(image)
// console.log(description);




let apiKey = `live_M4GVkstZPuNUlvJtU8Mt3uHdBEOLE8Ksf3ET3pXyQfXdmuvIsrnagviVHDTRJ4GZ`
let newApi = `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=${apiKey}`;
let cats;

window.addEventListener('DOMContentLoaded', function () {
    getImage();

})

function getImage() {
    generateBtn.addEventListener('click', function (e) {
        e.preventDefault();
        let randomize = Math.ceil(Math.random() * 10)
        fetch(newApi)
            .then((response) => response.json())
            .then((data) => {
                // console.log(data)
                catName.innerHTML = data[randomize]['breeds'][0]['name'];
                image.src = data[randomize].url;
                // console.log(image.src)
                description.innerHTML = data[randomize]['breeds'][0]['description']
                wikiurl.href = data[randomize]['breeds'][0]['wikipedia_url']

            })
    })
}














