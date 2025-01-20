const products = {
    products: [{
        id: 0,
        name: "Cartographers: A Roll Player Tale (sv. regler) ",
        price: 255.0,
        description: "I Cartographers tävlar spelare om att få mest poäng som samlas in under fyra säsonger.",
        type: "brädspel"
    },
    {
        id: 1,
        name: "SETI: Search for Extraterrestrial Intelligence (eng. regler) ",
        price: 769.0,
        description: "Utforska planeter och månar genom att skicka ut sonder från jorden, och fatta strategiska beslut om du ska landa för att samla prover eller stanna i omloppsbana för bredare undersökningar.",
        type: "brädspel"
        },
    {
        id: 2,
        name: "Kingdom Legacy: Feudal Kingdom",
        price: 139,
        description: "Kingdom Legacy is a unique solo campaign full of exploration delight and adventure: Discover new cards and learn how to use them to your advantage and how to survive hardships.",
        type: "brädspel"
        },
    {
        id: 3,
        name: "Slay the Spire (Standard Edition, eng. regler) ",
        price: 1399,
        description: "Slay the Spire: The Board Game is a co-operative deck-building adventure. Craft a unique deck, encounter bizarre creatures, discover relics of immense power, and finally become strong enough to slay the Spire!",
        type: "brädspel"
        },
    {
        id: 4,
        name: "Codenames (eng. regler)",
        price: 229,
        description: "Two rival spymasters know the secret identities of 25 agents. Their teammates know the agents only by their CODENAMES.",
        type: "brädspel"
        },
    {
        id: 5,
        name: "7 Wonders Duel (sv. regler) ",
        price: 299,
        description: "Each player starts with four wonder cards, and the construction of a wonder provides its owner with a special ability. Only seven wonders can be built, though, so one player will end up short.",
        type: "brädspel"
        },
    {
        id: 6,
        name: "MtG: Modern Horizons 3 Play Booster Pack",
        price: 119,
        description: "Modern Horizons 3 brings a heaping helping of exciting new cards to Modern, one of Magic's most celebrated formats. Whether your players haven't picked up a set in a while or are card-slinging veterans, there's something for everyone to love",
        type: "kortspel"
        },
    {
        id: 7,
        name: "MtG: Duskmourn: House of Horrors Play Booster Pack ",
        price: 69,
        description: "When you’re trapped in the endless halls of Duskmourn, the only way out is through. Band together with plucky survivors and battle your way to the heart of the House.",
        type: "kortspel"
        },
    {
        id: 8,
        name: "MtG: Duskmourn: Outlaws of Thunder Junction Play Booster Pack",
        price: 69,
        description: "",
        type: "kortspel"
        },
    {
        id: 9,
        name: "Star Wars: Edge of the Empire: Core Rulebook",
        price: 579,
        description: "The heart and soul of Edge of the Empire is the 448-page Core Rulebook. It includes everything players and GMs need to start their Star Wars roleplaying campaign.",
        type: "rollspel"
        },
    {
        id: 10,
        name: "Dungeons & Dragons: Player's Handbook 2024",
        price: 449,
        description: "This revised and expanded Player’s Handbook contains rules for character creation and advancement, exploration, combat, equipment, spells, and much more.",
        type: "rollspel"
        },
    {
        id: 11,
        name: "Fantasy Age: Core Rulebook (2nd ed)",
        price: 599,
        description: "",
        type: "rollspel"
        },
    ]
    
    
};



function createProductCard(product) {
    return `
        <div class="col">
            <div class="card background-main" style="width: 18rem;">
                <img src="img/products/${product.id}.png" id="product-img" class="card-img-top" style="display:flex;justify-content:center;padding:15px" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title" id="product-title">${product.name}</h5>
                    <p class="card-text" id="product-desc">${product.description}</p>
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <h5 id="product-price">${product.price} kr</h5>
                            </div>
                            <div class="col">
                                <button onclick="addToCart(${product.id})" class="btn btn-primary">Lägg till</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
}

const cart = [];

let addToCart = function (value) {
    console.log(value);
    cart.push(products.products[value].id);
    localStorage.setItem("cart", cart);
    console.log(cart);
};

function renderProducts() {
    const container = document.getElementById('products-container');
    let filteredProducts = products.products.filter((w) => (w.type == localStorage.getItem("filter")) || localStorage.getItem("filter") == "");
    console.log(filteredProducts);
    container.innerHTML = filteredProducts.map(createProductCard).join('');
}

let setFilterTab = function (value) {
    setFilter(value);
    renderProducts();
};

let setFilter = function (value) {
    if (value == "all") localStorage.setItem("filter", "");
    else localStorage.setItem("filter", value);
};

function testPrint() {
    console.log(localStorage.getItem("cart"));
}

const triggerEl = document.getElementById("all-tab");

const triggerFirstTabEl = document.querySelector("#all-tab-button");


let navigateWithFilter = function (value) {
    setFilter(value);
    window.location.href = "/products.html?filter=" + value;
};

// Call the function to render the products on page load
document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM har laddats");
    renderProducts();
});