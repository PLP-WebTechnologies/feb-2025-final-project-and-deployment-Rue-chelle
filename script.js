// Like button toggle using Font Awesome icons
function toggleLike(btn) {
  const icon = btn.querySelector('i');
  icon.classList.toggle('fa-regular');
  icon.classList.toggle('fa-solid');
  icon.classList.toggle('liked');
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
        image: "images/necklace.jpg"
      },
      "diamond-earrings": {
        name: "Diamond Earrings",
        price: "$399",
        description: "Elegant diamond earrings for timeless beauty.",
        image: "images/earrings.jpg"
      },
      "elegant-bracelet": {
        name: "Elegant Bracelet",
        price: "$199",
        description: "A fine bracelet to add charm to your wrist.",
        image: "images/bracelet.jpg"
      },
      "pearl-ring": {
        name: "Pearl Ring",
        price: "$159",
        description: "Classic pearl ring for a sophisticated look.",
        image: "images/ring.jpg"
      }
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
window.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.getElementById("scrolling-wrapper");
  const cards = Array.from(wrapper.children);

  // Clone all cards and append
  cards.forEach(card => {
    const clone = card.cloneNode(true);
    wrapper.appendChild(clone);
  });
});

