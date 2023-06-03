/*
https://imageio.forbes.com/blogs-images/davidthier/files/2019/09/mario-1200x797.jpg?format=jpg&width=1200

https://blog.turtlebeach.com/wp-content/uploads/2022/05/Mario-Kart-9.jpg

https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/mobile/mario-kart-tour-mobile/hero

https://prod.assets.earlygamecdn.com/i

https://gamerview.uai.com.br/wp-content/uploads/2019/10/Mario_Kart_Tour_bg-1000x600.jpg
mages/mario-kart-PC.webp?mtime=1657028922

*/

const form = document.getElementById('cardForm');
const titleInput = document.getElementById('titleInput');
const descriptionInput = document.getElementById('descriptionInput');
const imageInput = document.getElementById('imageInput');
const submitButton = document.getElementById('submitButton');
const cardsContainer = document.getElementById('cardsContainer');
let isTitleValid = false;

form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateForm()) {
      createCard();
      resetForm();
    }
});