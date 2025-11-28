let prc=document.getElementById("price");
let disc=document.getElementById("discount");
let coup=document.getElementById("coupon");
let discamt=document.getElementById("discountAmount");
let finamt=document.getElementById("finalPrice");
let savamt=document.getElementById("savings");
let err=document.getElementById("error");
document.getElementById("registerBtn").addEventListener("click", applydiscount())

function applyDiscount(){
    let prcorg=parseInt(prc.value);
    let price=parseInt(prc.value);
    let discount=parseInt(disc.value);
    let coupon=coup.value;
    let dis=price*(discount/100);
    price-=(dis);
    if(coupon=="SAVE10"){
        discamt.textContent=(dis).toString();
        price-=(prcorg*0.1);
        finamt.textContent=price.toString();
        savamt.textContent=(prcorg-price).toString();
        return;
    }
    else if(coupon=="MEGA25"){
        discamt.textContent=(dis).toString();
        price-=(prcorg*0.25);
        finamt.textContent=price.toString();
        savamt.textContent=(prcorg-price).toString();
        return;
    }
    else if(coupon=="FLAT50"){
        discamt.textContent=(dis).toString();
        price-=50;
        finamt.textContent=price.toString();
        savamt.textContent=(prcorg-price).toString();
        return;
    }
    else if(coupon=="FIRSTBUY"){
        discamt.textContent=(dis).toString();
        price-=(prcorg*0.15);
        finamt.textContent=price.toString();
        savamt.textContent=(prcorg-price).toString();
        return;
    }
    else if(coupon==""){
        discamt.textContent=(dis).toString();
        finamt.textContent=price.toString();
        savamt.textContent=(prcorg-price).toString();
        return;
    }
    else{
        discamt.textContent="0.00";
        finamt.textContent="0.00";
        savamt.textContent="0.00";
        err.textContent="Error Occured!! Please check input and Try again"

    }

}