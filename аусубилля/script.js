const catalog = [
    {
        name: 'АК-47',
        img: 'https://m.economictimes.com/thumb/msid-49710738,width-1600,height-900,resizemode-4,imgsize-133841/ak-47-maker-in-talks-for-joint-venture-in-india-to-manufacture-weapons.jpg',
        price: 500,
        oldPrice: 1000,
        currency: '$',
        description: 'Школьные пренодлежности',

    },
    {
        name: 'Magnum357',
        img: 'https://cdn.webshopapp.com/shops/347401/files/434531903/1280x1000x3/smith-wesson-smith-wesson-686-distinguished-combat.jpg',
        price: 500,
        oldPrice: 1000,
        currency: '$',
        description: 'Школьные пренодлежности',

    },
    {
        name: 'M249',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSydUju-pPci6Gxg8B7avc1uaWJQZ0OaBdsfg&s',
        price: 5000,
        oldPrice: 7000,
        currency: '$',
        description: 'Школьные пренодлежности',

    },
    {
        name: 'Desert eagle',
        img: 'https://cdn11.bigcommerce.com/s-7wt79uwele/product_images/uploads/2018/12/Desert-eagle-new-wtp5-1.jpg',
   price: 700,
        oldPrice: 1300,
        currency: '$',
        description: 'Школьные пренодлежности',

    },
    {
        name: 'MP-9',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdjcXFt_vJOzzkQ0aX36UdnvrJ1TFJGkKy2g&s',
    price: 450,
        oldPrice: 900,
        currency: '$',
        description: 'Школьные пренодлежности',

    },

]


const cards = document.querySelector('.cards')

catalog.forEach(card => {
 cards.innerHTML += `
     <div class="card">
            <img src=${card.img} alt="">
            <h3>${card.name}</h3>
            <p>${card.description}</p>
            <s>${card.oldPrice} ${card.currency}</s>
            <h4>${card.price} ${card.currency}</h4>
            <button>Купить<button>
        </div>  
 `
}
)