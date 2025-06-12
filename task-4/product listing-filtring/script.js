const products = [
      {
        name: "Wireless Earbuds",
        image: "https://images.unsplash.com/photo-1512499617640-c2f999098c1e?auto=format&fit=thumb&w=300",
        category: "Electronics",
        price: 29.99,
        rating: 4.2
      },
      {
        name: "Yoga Mat",
        image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=thumb&w=300",
        category: "Sports",
        price: 19.99,
        rating: 4.7
      },
      {
        name: "Running Shoes",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=thumb&w=300",
        category: "Fashion",
        price: 59.99,
        rating: 4.5
      },
      {
        name: "Bluetooth Speaker",
        image: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=thumb&w=300",
        category: "Electronics",
        price: 49.99,
        rating: 4.8
      },
      {
        name: "Water Bottle",
        image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=thumb&w=300",
        category: "Sports",
        price: 9.99,
        rating: 4.1
      },
      {
        name: "Casual T-shirt",
        image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=thumb&w=300",
        category: "Fashion",
        price: 14.99,
        rating: 3.9
      }
    ];

    // Get unique categories to populate filter dropdown
    function getCategories(products) {
      const categories = products.map(p => p.category);
      return Array.from(new Set(categories));
    }

    function renderCategoryOptions() {
      const categoryFilter = document.getElementById("categoryFilter");
      const categories = getCategories(products);
      categories.forEach(cat => {
        const option = document.createElement("option");
        option.value = cat;
        option.textContent = cat;
        categoryFilter.appendChild(option);
      });
    }

    function renderProducts(filteredProducts) {
      const productList = document.getElementById("productList");
      productList.innerHTML = "";
      if (filteredProducts.length === 0) {
        productList.innerHTML = "<p>No products found matching your filters.</p>";
        return;
      }
      filteredProducts.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <div class="category">${product.category}</div>
          <div class="price">$${product.price.toFixed(2)}</div>
          <div class="rating">⭐ ${product.rating}</div>
        `;
        productList.appendChild(card);
      });
    }

    function filterAndSortProducts() {
      const category = document.getElementById("categoryFilter").value;
      const priceMax = parseFloat(document.getElementById("priceFilter").value);
      const sortBy = document.getElementById("sortBy").value;

      let filtered = products.filter(product => {
        let pass = true;
        if (category !== "all" && product.category !== category) pass = false;
        if (!isNaN(priceMax) && product.price > priceMax) pass = false;
        return pass;
      });

      if (sortBy === "rating-desc") {
        filtered.sort((a, b) => b.rating - a.rating);
      } else if (sortBy === "rating-asc") {
        filtered.sort((a, b) => a.rating - b.rating);
      } else if (sortBy === "price-asc") {
        filtered.sort((a, b) => a.price - b.price);
      } else if (sortBy === "price-desc") {
        filtered.sort((a, b) => b.price - a.price);
      }

      renderProducts(filtered);
    }

    // Event listeners
    document.addEventListener("DOMContentLoaded", () => {
      renderCategoryOptions();
      renderProducts(products);

      document.getElementById("categoryFilter").addEventListener("change", filterAndSortProducts);
      document.getElementById("priceFilter").addEventListener("input", filterAndSortProducts);
      document.getElementById("sortBy").addEventListener("change", filterAndSortProducts);
    });