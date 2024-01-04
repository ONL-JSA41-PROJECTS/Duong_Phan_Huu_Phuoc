let products = {
    data: [
        {
            productName: "Tóc giải cosplay Scaramouche",
            stock: true,
            Numbers: 15,
            price: "400K",
            image: "https://down-vn.img.susercontent.com/file/sg-11134201-7qvd2-lgiuqyd81fp114"
        },
        {
            productName: "Trang phục cosplay Ei/Makoto Kiemono",
            stock: true,
            Numbers: 5+10,
            price: "950K",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-li3hp1ud4n9u59"
        }, 
        {
            productName: "Trang phục cosplay Furina ( có wig + giày)",
            stock: false,
            Numbers: 0,
            price: "1000K",
            image: "https://down-vn.img.susercontent.com/file/sg-11134201-7qvdx-ljsg0v187klmc5"
        }, 
        {
            productName: "Trang phục cosplay Gouro ( có wig+giày)",
            stock: false,
            Numbers: 0,
            price: "850K",
            image: "https://down-vn.img.susercontent.com/file/sg-11134201-7qvdx-ljsg0v187klmc5"
        }, 
    ]
};



// Hàm cập nhật dữ liệu sản phẩm và lưu vào localStorage
// Hàm cập nhật dữ liệu sản phẩm và lưu vào localStorage
function updateProductData(itemName, quantity) {
    const product = products.data.find((product) => product.productName === itemName);

    if (product) {
        product.Numbers -= quantity;

        // Kiểm tra nếu số lượng sản phẩm bằng 0
        if (product.Numbers === 0) {
            // Thay đổi phần price.innerText thành "Chưa có hàng"
            const priceElement = document.querySelector('.price');
            priceElement.innerText = "Chưa có hàng";

            // Ẩn nút thêm vào giỏ hàng
            const addToCartButton = document.querySelector(`.card[data-product="${itemName}"] button`);
            if (addToCartButton) {
                addToCartButton.style.display = "none";
            }
        }

        // Lưu thay đổi vào localStorage
        saveProductsToLocalStorage();
    }
}

// Hàm lưu thông tin sản phẩm vào localStorage
function saveProductsToLocalStorage() {
    localStorage.setItem('products', JSON.stringify(products));
}

// Hàm lấy thông tin sản phẩm từ localStorage khi trang được tải
function loadProductsFromLocalStorage() {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
        products = JSON.parse(storedProducts);
    }
}


const savedCartItems = localStorage.getItem('cartItems');
const storedProducts = JSON.parse(localStorage.getItem('products'));
const cartItems = savedCartItems ? JSON.parse(savedCartItems) : {};

function saveCartToLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}
function initializeProductCards() {
    for (let i of products.data) {
        let card = document.createElement("div");
        card.classList.add("card");

        let imgContainer = document.createElement("div");
        imgContainer.classList.add("image-container");

        let image = document.createElement("img");
        image.setAttribute("src", i.image);

        imgContainer.appendChild(image);
        card.appendChild(imgContainer);

        let container = document.createElement("div");
        container.classList.add("container");

        let name = document.createElement("h2");
        name.classList.add("product-name");
        name.innerText = i.productName.toUpperCase();
        container.appendChild(name);

        if (i.Numbers > 0) {
            // Display price and stock on the same line
            let priceStockContainer = document.createElement("div");
            let PriceContainer = document.createElement("div");
            // Display price
            let priceLabel = document.createElement("span");
            priceLabel.style.fontSize=  "medium";
            priceLabel.innerText = "Giá tiền:";
            PriceContainer.appendChild(priceLabel);

            let price = document.createElement("span");
            price.classList.add("price");
            price.innerText = i.price;
            PriceContainer.appendChild(price);
            

            let stockLabel = document.createElement("span");
            stockLabel.innerText = "Kho:";
            priceStockContainer.appendChild(stockLabel);

            let NUMS = document.createElement("span");
            NUMS.innerText = i.Numbers;
            priceStockContainer.appendChild(NUMS);

            container.appendChild(priceStockContainer);
            container.appendChild(PriceContainer);

            let addToCartButton = document.createElement("button");
            addToCartButton.innerText = "Add to Cart";
            addToCartButton.onclick = () => addToCart(i.productName, i.price, i.image);
            container.appendChild(addToCartButton);
        } else {
            // Display "SẮP CÓ HÀNG" for out-of-stock products
            let price = document.createElement("h4");
            price.classList.add(".price");
            price.style.color = "red";
            price.innerText = "SẮP CÓ HÀNG";
            container.appendChild(price);
        }

        card.appendChild(container);
        document.getElementById("products").appendChild(card);
    }
}
// function initializeProductCards() {
//     for (let i of products.data) {
//         let card = document.createElement("div");
//         card.classList.add("card");

//         let imgContainer = document.createElement("div");
//         imgContainer.classList.add("image-container");

//         let image = document.createElement("img");
//         image.setAttribute("src", i.image);

//         imgContainer.appendChild(image);
//         card.appendChild(imgContainer);

//         let container = document.createElement("div");
//         container.classList.add("container");

//         let name = document.createElement("h2");
//         name.classList.add("product-name");
//         name.innerText = i.productName.toUpperCase();
//         container.appendChild(name);
            
//         if (i.Numbers>0){
//             let priceLabel = document.createElement("h4");
//             priceLabel.innerText = "Giá tiền:";
//             container.appendChild(priceLabel);
//             let price = document.createElement("span");
//             price.classList.add("price");
//             price.innerText = i.price;
//             container.appendChild(price);
//             let stockLabel = document.createElement("h5");
//             stockLabel.innerText = "Kho:";
//             container.appendChild(stockLabel);

//             let NUMS = document.createElement("h5");
//             NUMS.innerText = i.Numbers;
//             container.appendChild(NUMS);

//             let addToCartButton = document.createElement("button");
//             addToCartButton.innerText = "Add to Cart";
//             addToCartButton.onclick = () => addToCart(i.productName, i.price, i.image);
//             container.appendChild(addToCartButton);
            
//         }
//         else{
//             let price = document.createElement("h4");
//             price.classList.add(".price");
//             price.style.color = "red";
//             price.innerText = "SẮP CÓ HÀNG";
//             container.appendChild(price);
//         }

//             card.appendChild(container);
//             document.getElementById("products").appendChild(card);
//     }
// }
function searchProducts() {
    let searchInput = document.getElementById("search-input").value.toUpperCase();
    let cards = document.querySelectorAll(".card");
    let productsName = document.querySelectorAll(".product-name");

    productsName.forEach((items, index) => {
        if (items.innerText.toUpperCase().includes(searchInput)) {
            cards[index].style.display = "block";
        } else {
            cards[index].style.display = "none";
        }
    });
    
}


function addToCart(itemName, price, image) {
    const product = storedProducts.data.find((product) => product.productName === itemName);

    if (!product || product.Numbers <= 0) {
        alert("Đã hết hàng");
        return;
    }

    if (cartItems[itemName]) {
        if (cartItems[itemName].quantity < product.Numbers) {
            cartItems[itemName].quantity++;
        } else {
            alert("Số lượng sản phẩm trong giỏ hàng đã đạt đến giới hạn của kho. Vui lòng đợi thêm 3-7 ngày nữa để có hàng.");
        }
    } else {
        cartItems[itemName] = {
            quantity: 1,
            price: parseFloat(price),
            image: image
        };
    }

    // Cập nhật giá trị sản phẩm và lưu vào localStorage
    updateProductData(itemName, 1);

    // Cập nhật giỏ hàng và lưu vào localStorage
    updateCart();
    saveCartToLocalStorage();
}

function removeFromCart(itemName,quantity) {
    if (quantity >1){
        if (cartItems[itemName]) {
            cartItems[itemName].quantity -= quantity;
            if (cartItems[itemName].quantity === 0) {
                delete cartItems[itemName];
            }
        }
    }
    else{
        if (cartItems[itemName]) {
            cartItems[itemName].quantity --;
            if (cartItems[itemName].quantity === 0) {
                delete cartItems[itemName];
            }
        }
    }
    updateCart();
    saveCartToLocalStorage();
}

function updateCart() {
    const cartList = document.getElementById('cart-items');
    cartList.innerHTML = '';

    for (const item in cartItems) {
        const li = document.createElement('li');
        li.innerHTML = `
            <img src="${cartItems[item].image}" alt="${item}" width="50"><br>
            ${item}x ${cartItems[item].quantity}
            <br> 
            ${cartItems[item].price * cartItems[item].quantity}K
        `;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Xoá món hàng';
        removeButton.onclick = () => removeFromCart(item);
        const Checkout = document.createElement('button');
        Checkout.textContent = 'Thanh toán';
        let amount = cartItems[item].quantity*cartItems[item].price;
        let img = cartItems[item].image;
        let qty = cartItems[item].quantity
        Checkout.onclick= () => openOneItemCheckoutModal(item, amount,img,qty);
        li.appendChild(removeButton);
        cartList.appendChild(li);
        li.appendChild(Checkout);
        cartList.appendChild(li);
    }
}

window.onload = () => {
    loadProductsFromLocalStorage();
    saveProductsToLocalStorage(); // Lưu trữ một lần nữa để đảm bảo dữ liệu mới nhất
    initializeProductCards();
    // updateProductData()
    if (Object.keys(cartItems).length > 0) {
        updateCart();
    }
};
function checkoutAll() {
    const cartList = document.getElementById('cart-items');
    if (cartList.childElementCount === 0) {
        alert('Giỏ hàng của bạn đang trống.');
        return;
    }

    const totalAmount = calculateTotalAmount();
    openItemCheckoutModal('Tất cả sản phẩm', totalAmount);
}

function calculateTotalAmount() {
    let totalAmount = 0;

    for (const item in cartItems) {
        totalAmount += cartItems[item].price * cartItems[item].quantity;
    }

    return totalAmount;
}
function openOneItemCheckoutModal(itemName, amount, img, qty) {
    let itemCheckoutDetails = document.getElementById('item-checkout-details');
    itemCheckoutDetails.innerHTML = generateCheckoutDetailsHTML(itemName, amount, img, qty);

    document.getElementById('customer-name').value = '';
    document.getElementById('customer-phone').value = '';
    document.getElementById('customer-email').value = '';
    document.getElementById('customer-address').value = '';

    document.getElementById('item-checkout-modal').classList.add('show');

    function generateCheckoutDetailsHTML(item, amount, img, qty) {
        let html = `<h3>${item}</h3>`;
        html += `
            <div>
                <img src="${img}" alt="${item}" width="50"><br>
                ${item} x ${qty}
            </div>
            <div>
                <h4>Tổng tiền cần thanh toán: ${amount}K</h4>
            </div>
            <div>
                <button onclick="confirmItemPayment('${item}', ${amount}, '${img}', ${qty})">Thanh toán</button>
            </div>
        `;
        return html;
    }
    confirmItemPayment(item, amount, img, qty);
}

function openItemCheckoutModal(itemName, totalAmount) {
    const itemCheckoutDetails = document.getElementById('item-checkout-details');
    itemCheckoutDetails.innerHTML = generateCheckoutDetailsHTML(itemName, totalAmount);

    document.getElementById('customer-name').value = '';
    document.getElementById('customer-phone').value = '';
    document.getElementById('customer-email').value = '';
    document.getElementById('customer-address').value = '';

    document.getElementById('item-checkout-modal').classList.add('show');
}

function generateCheckoutDetailsHTML(itemName, totalAmount) {
    let html = `<h3>${itemName}</h3>`;
    for (const item in cartItems) {
        html += `
            <div>
                <img src="${cartItems[item].image}" alt="${item}" width="50"><br>
                ${item} x ${cartItems[item].quantity} - ${cartItems[item].price * cartItems[item].quantity}K
            </div>
        `;
    }
    html += `
        <div>
            <h4>Tổng tiền cần thanh toán: ${totalAmount}K</h4>
        </div>
        <div>
            <button onclick="confirmItemPaymentALL('${itemName}', ${totalAmount})">Thanh toán</button>
        </div>
    `;
    return html;
    
}

function updateProductNumbers(itemName, quantity) {
    const product = products.data.find((product) => product.productName === itemName);
    if (product) {
        product.Numbers -= quantity;
    }
    saveProductsToLocalStorage()
}

function confirmItemPayment(itemName, amount, image, quantity) {
    const customerName = document.getElementById('customer-name').value;
    const customerPhone = document.getElementById('customer-phone').value;
    const customerEmail = document.getElementById('customer-email').value;
    const customerAddress = document.getElementById('customer-address').value;
    if (CheckInformation(customerName, customerPhone, customerEmail, customerAddress)){
        closeItemCheckoutModal();
        removeFromCart(itemName, quantity);
        updateProductNumbers(itemName, quantity);
        updateCart();
        saveCartToLocalStorage();
        saveProductsToLocalStorage(); // Lưu sự thay đổi số lượng sản phẩm vào localStorage
    }
    else {
        alert("Vui lòng nhập đủ thông tin")
    }

}

function confirmItemPaymentALL(itemName, totalAmount) {
    const customerName = document.getElementById('customer-name').value;
    const customerPhone = document.getElementById('customer-phone').value;
    const customerEmail = document.getElementById('customer-email').value;
    const customerAddress = document.getElementById('customer-address').value;
    if (CheckInformation(customerName, customerPhone, customerEmail, customerAddress)){
        closeItemCheckoutModal();
        clearAllCart();
        for (const item in cartItems) {
            updateProductNumbers(item, cartItems[item].quantity);
        }
        updateCart();
        saveCartToLocalStorage();
        saveProductsToLocalStorage(); // Lưu sự thay đổi số lượng sản phẩm vào localStorage
    }
    else {
        alert("Vui lòng nhập đủ thông tin")
    }

}

function saveProductsToLocalStorage() {
    localStorage.setItem('products', JSON.stringify(products));
}

function closeItemCheckoutModal() {
    document.getElementById('item-checkout-modal').classList.remove('show');
}


function clearAllCart() {
        for (const item in cartItems) {
            delete cartItems[item];
        }
        updateCart();
        saveCartToLocalStorage();
}
function showLoginForm() {
    document.getElementById("login-form").style.display = "block";
}

function closeLoginForm() {
    document.getElementById("login-form").style.display = "none";
}

function showRegisterForm() {
    document.getElementById("register-form").style.display = "block";
}

function closeRegisterForm() {
    document.getElementById("register-form").style.display = "none";
}


function CheckInformation(name,number,mail,address) {
    if (name !== '' && number !== '' && mail !== '' && address !== '') {
        return true;
    }
}
function showLoginForm() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
}

function showRegisterForm() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
}


// Check if the browser supports localStorage
if (typeof(Storage) !== "undefined") {
    // Retrieve user data from localStorage, if available
    var users = JSON.parse(localStorage.getItem("users")) || [];

    // Function to save user data to localStorage
    function saveUserData() {
        localStorage.setItem("users", JSON.stringify(users));
    }

    // Function to handle user registration
    function register() {
        var registerEmail = document.getElementById("register-email").value;
        var registerUsername = document.getElementById("register-username").value;
        var registerPassword = document.getElementById("register-password").value;
        if (registerUsername !== '' && registerPassword !== '' && registerEmail !== '') {
            // Check if username already exists
            var existingUser = users.find(user => user.username === registerUsername || user.email === registerEmail);
            if (existingUser) {
                alert("Tên đăng ký hoặc email đã tồn tại. Vui lòng chọn tên đăng ký hoặc email khác.");
                return;
            }
        
            // Add new user to the array
            var newUser = { username: registerUsername, password: registerPassword, email: registerEmail };
            users.push(newUser);
        
            // Save user data to localStorage
            saveUserData();
        
            // Clear registration form
            document.getElementById("register-username").value = "";
            document.getElementById("register-password").value = "";
            document.getElementById("register-email").value = "";
        
            handleSuccessfulLogin(loginUsername);
        } else {
            alert("Vui lòng nhập đầy đủ thông tin");
        }

    }
    // Function to handle user login
    function login() {
        var loginUsername = document.getElementById("login-username").value;
        var loginPassword = document.getElementById("login-password").value;

        if (loginUsername !== '' && loginPassword !== '') {
            // Check if username and password match
            var authenticatedUser = users.find(user => user.username === loginUsername && user.password === loginPassword);
            if (authenticatedUser) {
                handleSuccessfulLogin(loginUsername);
                document.getElementById("login-username").value = "";
                document.getElementById("login-password").value = "";
            } else {
                alert("Tên đăng nhập hoặc mật khẩu không đúng. Vui lòng thử lại.");
            }
            
        } else {
            alert("Vui lòng nhập đầy đủ thông tin");
        }

    }
}
else {
    alert("trình duyệt của bn kh hỗ trơ localSTR");
}

function handleSuccessfulLogin(username) {
    // Hide login and register forms
    
    document.getElementById('LOG').style.display = 'none';
    document.getElementById('SIGU').style.display = 'none';
    // Show user information
    const userInfo = document.getElementById('user-info');
    const userAvatar = document.getElementById('user-avatar');
    const userName = document.getElementById('user-name');

    // For demonstration purposes, you can set a default avatar
    const defaultAvatarUrl = 'https://example.com/default-avatar.jpg';

    // Fetch user's avatar from localStorage or set a default one
    const userAvatarUrl = localStorage.getItem('userAvatar') || defaultAvatarUrl;

    userInfo.style.display = 'flex';
    userAvatar.src = userAvatarUrl;
    userName.innerText = username;

    // Show the cart and checkout buttons
    document.getElementById('cart-container').style.display = 'block';
    document.getElementById('checkout-all-button').style.display = 'block';
}