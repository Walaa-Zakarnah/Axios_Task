function getDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    if (!productId) {
        console.error('Product ID is missing in the URL');
        return;
    }

    axios.get(`https://dummyjson.com/products/${productId}`)
        .then(response => {
            const product = response.data;
            const productV = `
                <h2>${product.title}</h2>
                <img src="${product.images[0]}" height="100px" />
                <p>${product.description}</p>
            `;

            // Insert the HTML into the correct container
            document.querySelector("div").innerHTML = productV;
        })
        .catch(err => console.error(err));
}

// Call the function to load product details
getDetails();
