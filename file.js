function toggleMenu() {
    let menu = document.getElementById("navLinks");
    menu.style.right = (menu.style.right === "0px") ? "-200px" : "0px";
}

/* Scroll animations */
const scrollElements = document.querySelectorAll(".scroll-animate");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("scroll-visible");
        }
    });
});

scrollElements.forEach(el => observer.observe(el));

/* Animate numbers */
function animateValue(id, start, end, duration) {
    let obj = document.getElementById(id);
    let range = end - start;
    let current = start;
    let step = range / (duration / 16);

    let timer = setInterval(() => {
        current += step;
        if ((step > 0 && current >= end) || (step < 0 && current <= end)) {
            current = end;
            clearInterval(timer);
        }
        obj.innerText = current.toFixed(2);
    }, 16);
}

/* Discount Calculator */
function applyDiscount() {

    let price = parseFloat(document.getElementById("price").value) || 0;
    let discount = parseFloat(document.getElementById("discount").value) || 0;
    let couponCode = document.getElementById("coupon").value.trim().toUpperCase();
    let couponMsg = document.getElementById("couponMsg");

    let extra = 0;
    let flat = 0;

    switch(couponCode) {
        case "SAVE10": extra = 10; couponMsg.textContent="SAVE10 applied! +10% off"; couponMsg.style.color="lightgreen"; break;
        case "MEGA25": extra = 25; couponMsg.textContent="MEGA25 applied! +25% off"; couponMsg.style.color="lightgreen"; break;
        case "FLAT50": flat = 50; couponMsg.textContent="FLAT50 applied! $50 off"; couponMsg.style.color="lightgreen"; break;
        case "FIRSTBUY": extra = 15; couponMsg.textContent="Welcome! +15% off"; couponMsg.style.color="lightgreen"; break;
        case "": couponMsg.textContent=""; break;
        default: couponMsg.textContent="Invalid coupon!"; couponMsg.style.color="red"; break;
    }

    let totalPercent = discount + extra;
    let discountAmount = (price * totalPercent / 100) + flat;
    if (discountAmount > price) discountAmount = price;

    let finalPrice = price - discountAmount;

    animateValue("discountAmount", 0, discountAmount, 700);
    animateValue("finalPrice", 0, finalPrice, 700);
    animateValue("savings", 0, discountAmount, 700);

    addHistory(price, finalPrice, discountAmount);
}

/* History system */
function addHistory(price, finalPrice, savings) {
    const list = document.getElementById("historyList");

    const item = document.createElement("li");
    item.textContent = Original: $${price} → Final: $${finalPrice.toFixed(2)} (Saved $${savings.toFixed(2)});

    list.prepend(item);
}