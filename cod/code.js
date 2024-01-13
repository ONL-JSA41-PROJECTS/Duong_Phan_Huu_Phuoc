let products = {
    data: [
        {
            productName: "Tóc giải cosplay Scaramouche",
            size:"M-XXL",
            Material:"modacrylic",
            Sex: "Female",
            stock: true,
            Numbers: 15,
            price: "400K",
            image: "https://down-vn.img.susercontent.com/file/sg-11134201-7qvd2-lgiuqyd81fp114"
        },
        {
            productName: "Trang phục cosplay Ei/Makoto Kiemono",
            size:"M-XXL",
            Material:"vải tự nhiên 90%",
            Sex: "Female",
            stock: true,
            Numbers: 5+10,
            price: "1200K",
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-li3hp1ud4n9u59"
        }, 
        {
            productName: "Trang phục cosplay Furina ( có wig + giày)",
            size:"M-XXL",
            Material:"Vải cotton",
            Sex: "Female",
            stock: false,
            Numbers: 0,
            price: "1000K",
            image: "https://down-vn.img.susercontent.com/file/sg-11134201-7qvdx-ljsg0v187klmc5"
        }, 
        {
            productName: "Trang phục cosplay Gouro ( có wig+giày)",
            size:"M-XXL",
            Material:"Vải cotton",
            Sex: "Male",
            stock: false,
            Numbers: 0,
            price: "850K",
            image: "https://down-vn.img.susercontent.com/file/cn-11134207-7qukw-lhaqi10x0yqn5b"
        },
        {
            productName:"Trang phục cosplay Kaedehara Kazuha (full)",
            size:"M-XXL",
            Material:"Vải gốm",
            Sex: "Male",
            stock: true,
            Numbers: 3,
            price: "1800K" ,
            image: "https://down-vn.img.susercontent.com/file/th-11134201-7qukz-lev01badye4x1a"
        }, 
        {
        productName: "Cosplay Wanderer",
        size:"M-XXL",
        Material:"modacrylic",
        Sex: "Male",
        stock: true,
        Numbers:2,
        price:"1700K",
        image:"https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lljfza3czcnc32",
        },
        {
            productName: "Cosplay Wanderer",
            size:"M-XXL",
            Material:"modacrylic",
            Sex: "Male",
            stock: true,
            Numbers:2,
            price:"1700K",
            image:"https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lljfza3czcnc32",
            
        },
        {
            productName: "Cosplay Childe",
            size:"M-XXL",
            Material:"Vải cotton",
            Sex: "Male",
            stock: true,
            Numbers:0,
            price:"930K",
            image:"https://down-vn.img.susercontent.com/file/sg-11134201-7qvf3-li72ndek2o95b0",
        },

        {
            productName: "Gấu bông Yae Miko-mèo",
            size:"M-XXL",
            Material:"",
            Sex: "Unisex",
            stock: true,
            Numbers:1,
            price:"190K",
            image:"https://down-vn.img.susercontent.com/file/e23b4f80d56d3be61118e4807c666c0b",
        },
        {
            productName: "Cosplay Morax",
            size:"M-XXL",
            Material:"Vải gốm",
            Sex: "Male",
            stock: true,
            Numbers:19,
            price:"1200K",
            image:"https://down-vn.img.susercontent.com/file/cn-11134207-7qukw-lffe40b0ntqj89",
        },
        {
            productName: "Đoạn thảo trường đao",
            size:"M-XXL",
            Material:"Nhựa PU",
            Sex: "Unisex",
            stock: true,
            Numbers:0,
            price:"600K",
            image:"https://down-vn.img.susercontent.com/file/vn-11134207-23020-c0ypev9x08mv67",
        },
    ]
};


function showProductDetails(product) {
    let detailContainer = document.getElementById('detail-container');

    // Hiển thị thông tin chi tiết sản phẩm
    detailContainer.innerHTML = `
        <h2>${product.productName}</h2>
        <p>Giới tính: ${product.Sex}</p>
        <p>Kích cỡ: ${product.size}</p>
        <p>Chất liệu: ${product.Material}</p>
        <p>Số lượng: ${product.Numbers}</p>
        <p>Giá: ${product.price}</p>
    `;

    // Hiển thị chi tiết sản phẩm khi di chuột vào
    detailContainer.style.display = 'block';
}
document.addEventListener('DOMContentLoaded', function () {
    var detailContainer = document.getElementById('detail-container');

    document.addEventListener('mousemove', function (e) {
        var mouseX = e.clientX+10;
        var mouseY = e.clientY+10;

        // Cập nhật vị trí cho detailContainer
        detailContainer.style.left = mouseX + 'px';
        detailContainer.style.top = mouseY + 'px';
    });
});

    // var products = document.getElementById('products');
    // products.addEventListener('mouseover', function (e) {
    //     if (e.target.classList.contains('card')) {
    //         detailContainer.classList.add('active');
    //     }
    // });

    // Khi rời chuột khỏi sản phẩm, ẩn detail-container
    // products.addEventListener('mouseout', function (e) {
    //     if (e.target.classList.contains('card')) {
    //         detailContainer.classList.remove('active');
    //     }
    // });
//});

function hideProductDetails() {
    let detailContainer = document.getElementById('detail-container');

    // Ẩn thông tin chi tiết sản phẩm khi di chuột ra khỏi sản phẩm
    detailContainer.style.display = 'none';
}
function resetLocalStorage() {
    localStorage.removeItem('products');
    localStorage.removeItem('cartItems');
    localStorage.removeItem('userAvatar');
    localStorage.removeItem('users');

    // Reload the page to reset everything
    location.reload();
}


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


// function resetLocalStorage() {
//     localStorage.removeItem('products');
//     localStorage.removeItem('cartItems');
//     localStorage.removeItem('userAvatar');
//     localStorage.removeItem('users');

//     // Reload the page to reset everything
//     location.reload();
// }


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
        card.addEventListener('mouseover', function () {
            showProductDetails(i);
        });

        card.addEventListener('mousemove', function (e) {
            updateDetailContainerPosition(e);
        });

        card.addEventListener('mouseout', hideProductDetails);


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
            addToCartButton.innerText = "Thêm vào giỏ hàng";
            addToCartButton.style.fontSize = "15px";
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

function updateDetailContainerPosition(e) {
    var mouseX = e.clientX+10;
    var mouseY = e.clientY+10;

    // Cập nhật vị trí cho detailContainer
    detailContainer.style.left = mouseX + 'px';
    detailContainer.style.top = mouseY + 'px';
}

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
        alert("Đã hết hàng hoặc không có trong kho");
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

    updateProductData(itemName, 1);
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
    saveProductsToLocalStorage();
    initializeProductCards();
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

    if (CheckInformation(customerName, customerPhone, customerEmail, customerAddress)) {
        closeItemCheckoutModal();
        removeFromCart(itemName, quantity);
        updateProductNumbers(itemName, quantity);
        updateCart();
        saveCartToLocalStorage();
        saveProductsToLocalStorage();
    } else {
        alert("Vui lòng nhập đủ thông tin");
    }
}
function confirmItemPaymentALL(itemName, totalAmount) {
    const customerName = document.getElementById('customer-name').value;
    const customerPhone = document.getElementById('customer-phone').value;
    const customerEmail = document.getElementById('customer-email').value;
    const customerAddress = document.getElementById('customer-address').value;

    if (CheckInformation(customerName, customerPhone, customerEmail, customerAddress)) {
        closeItemCheckoutModal();
        clearAllCart();
        for (const item in cartItems) {
            updateProductNumbers(item, cartItems[item].quantity);
        }
        updateCart();
        saveCartToLocalStorage();
        saveProductsToLocalStorage();
    } else {
        alert("Vui lòng nhập đủ thông tin");
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
// Function to show success message
function showSuccessMessage(message) {
    alert(message);
}

if (typeof Storage !== "undefined") {
    var users = JSON.parse(localStorage.getItem("users")) || [];

    function saveUserData() {
        localStorage.setItem("users", JSON.stringify(users));
    }

    function register() {
        var registerEmail = document.getElementById("register-email").value;
        var registerUsername = document.getElementById("register-username").value;
        var registerPassword = document.getElementById("register-password").value;

        if (registerUsername !== '' && registerPassword !== '' && registerEmail !== '') {
            var existingUser = users.find(user => user.username === registerUsername || user.email === registerEmail);
            
            if (existingUser) {
                alert("Tên đăng ký hoặc email đã tồn tại. Vui lòng chọn tên đăng ký hoặc email khác.");
                return;
            }

            var newUser = { username: registerUsername, password: registerPassword, email: registerEmail };
            users.push(newUser);

            saveUserData();
            clearRegistrationForm();
            handleSuccessfulLogin(registerUsername);
            alert("Đăng ký thành công!");
            closeRegisterForm();
        } else {
            alert("Vui lòng nhập đầy đủ thông tin");
        }
    }

    function login() {
        var loginUsername = document.getElementById("login-username").value;
        var loginPassword = document.getElementById("login-password").value;

        if (loginUsername !== '' && loginPassword !== '') {
            var authenticatedUser = users.find(user => user.username === loginUsername && user.password === loginPassword);

            if (authenticatedUser) {
                alert("Đăng nhập thành công!");
                handleSuccessfulLogin(loginUsername);
                clearLoginForm();
                closeLoginForm();
            } else {
                alert("Tên đăng nhập hoặc mật khẩu không đúng. Vui lòng thử lại.");
            }
        } else {
            alert("Vui lòng nhập đầy đủ thông tin");
        }
    }

    function showSuccessMessage(message) {
        // Đặt mã HTML hoặc sử dụng các phương thức khác để hiển thị thông báo thành công
        console.log(message);
        // Ví dụ: hiển thị thông báo trong một phần tử có id là "success-message"
        var successMessageElement = document.getElementById("success-message");
        if (successMessageElement) {
            successMessageElement.innerHTML = message;
        }
    }

} else {
    alert("Trình duyệt của bạn không hỗ trợ localStorage.");
}



function clearRegistrationForm() {
    document.getElementById("register-username").value = "";
    document.getElementById("register-password").value = "";
    document.getElementById("register-email").value = "";
}

function clearLoginForm() {
    document.getElementById("login-username").value = "";
    document.getElementById("login-password").value = "";
}

function handleSuccessfulLogin(username) {
    // Tắt bảng đăng nhập và đăng ký
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'none';

    // Tắt các nút đăng nhập và đăng ký trên thanh điều hướng
    document.getElementById('LOG').style.display = 'none';
    document.getElementById('SIGU').style.display = 'none';

    // Hiển thị thông tin người dùng
    const userInfo = document.getElementById('user-info');
    const userAvatar = document.getElementById('user-avatar');
    const userName = document.getElementById('user-name');

    // Đối với mục đích minh họa, bạn có thể đặt một ảnh đại diện mặc định
    const defaultAvatarUrl = 'https://example.com/default-avatar.jpg';

    // Lấy ảnh đại diện người dùng từ localStorage hoặc đặt một ảnh mặc định
    const userAvatarUrl = localStorage.getItem('userAvatar') || defaultAvatarUrl;

    userInfo.style.display = 'flex';
    userAvatar.src = userAvatarUrl;
    userName.innerText = username;

    // Hiển thị nút giỏ hàng và thanh toán
    document.getElementById('cart-container').style.display = 'block';
    document.getElementById('checkout-all-button').style.display = 'block';
    updateUserInterface(); // Update UI after successful login
}

function logout() {

    localStorage.removeItem('userAvatar');
    localStorage.removeItem('cartItems');
    localStorage.removeItem('users');

    // Reload the page to reset everything
    location.reload();
    updateUserInterface(); // Update UI after logout
    let Checkbutton = document.getElementById('Checkoutnutton');
    Checkbutton.style.display = 'none';
    let ClearButton = document.getElementById('ClearAllCartButton');
    ClearButton.style.display ='none';
}

function handleSuccessfulLogin(username) {
    // Tắt bảng đăng nhập và đăng ký
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'none';
    // Tắt các nút đăng nhập và đăng ký trên thanh điều hướng
    document.getElementById('LOG').style.display = 'none';
    document.getElementById('SIGU').style.display = 'none';

    // Hiển thị thông tin người dùng
    const userInfo = document.getElementById('user-info');
    const userAvatar = document.getElementById('user-avatar');
    const userName = document.getElementById('user-name');

    // Đối với mục đích minh họa, bạn có thể đặt một ảnh đại diện mặc định
    const defaultAvatarUrl = 'https://example.com/default-avatar.jpg';

    // Lấy ảnh đại diện người dùng từ localStorage hoặc đặt một ảnh mặc định
    const userAvatarUrl = localStorage.getItem('userAvatar') || defaultAvatarUrl;

    userInfo.style.display = 'flex';
    userAvatar.src = userAvatarUrl;
    userName.innerText = username;

    // Hiển thị nút giỏ hàng và thanh toán
    document.getElementById('cart-container').style.display = 'block';
    document.getElementById('checkout-all-button').style.display = 'block';
}