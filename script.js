// Like button toggle using Font Awesome icons
function toggleLike(btn) {
  const icon = btn.querySelector("i");
  icon.classList.toggle("fa-regular");
  icon.classList.toggle("fa-solid");
  icon.classList.toggle("liked");
}

// Navigate to dynamic product page with ID
function viewProduct(productId) {
  window.location.href = `product.html?id=${productId}`;
}

// Dynamically load product details
document.addEventListener("DOMContentLoaded", () => {
  const detailContainer = document.getElementById("product-detail");
  if (detailContainer) {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");

    const products = {
      "gold-necklace": {
        name: "Gold Necklace",
        price: "$299",
        description: "A luxurious handcrafted 24K gold necklace.",
        image: "images/necklace.jpg",
      },
      "gold-bracelet": {
        name: "Golden Bracelet",
        price: "$399",
        description: "Elegant golden bracelet for timeless beauty.",
        image: "images/let.jpg",
      },
      "elegant-bracelet": {
        name: "Elegant Bracelet",
        price: "$199",
        description: "A fine bracelet to add charm to your wrist.",
        image: "images/bracelet.jpg",
      },
      rings: {
        name: "Ring Collection",
        price: "$159",
        description: "Classic rings for a sophisticated look.",
        image: "images/rings.jpg",
      },
    };

    const product = products[productId];

    if (product) {
      detailContainer.innerHTML = `
        <div class="product-card">
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.price}</p>
          <p>${product.description}</p>
          <button class="like-btn" onclick="toggleLike(this)">
            <i class="fa-regular fa-heart"></i>
          </button>
        </div>
      `;
    } else {
      detailContainer.innerHTML = `<p>Product not found.</p>`;
    }
  }
});
// featured products slide effect

document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.getElementById("scrolling-wrapper");
  const cards = Array.from(wrapper.children);

  // Duplicate the content to simulate infinite scroll
  cards.forEach((card) => {
    const clone = card.cloneNode(true);
    wrapper.appendChild(clone);
  });
});
