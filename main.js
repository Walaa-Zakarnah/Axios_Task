function getProducts() {
    axios.get('https://dummyjson.com/products')
        .then(response => {
            const products = response.data.products.map(product => {
                return `
                <div class="product">
                <h2>${product.title}</h2>
                <img src="${product.images[0]}"; height=100px;/>
                <div class="paras">
                    <p>${product.price}</p>
                    <p>${product.availabilityStatus}</p>
                </div>
                </div>
            <button><a href="details.html?id=${product.id}">Details</a></button>
                `;
            });
            document.querySelector('.products').innerHTML = products.join('');
        })
        .catch(err => console.error(err));
}
getProducts();