// ------DataOfObjects------ //
function getClothes() {
    var clothes = [
        
        {clothId: "0",
        img: {
            pics: ["picsTorch/GrimScarf.png",
            "picsTorch/GrimScarf_Pre.jpg",
            "picsTorch/GrimScarf_Pic1.png",
            "picsTorch/GrimScarf_Pic2.jpg"],
            alt: "Scarf&#47;GrimScarf"
        },
        title: "GrimScarf",
        price: "2600",
        brend: "Torch",
        description: `50% акрил 50% шерсть<br>
        Размер 180&#215;20 см`,
        link: "https://torch-fff.com/shop/grimscarf/"},

        {clothId: "1",
        img: {
            pics: ["picsTorch/DMBase.png",
            "picsTorch/DMBase_Pre.jpg"],
            alt: "T-Shirt&#47;DMBase"
        },
        title: "DMBase",
        price: "1500",
        brend: "Torch",
        description: `100% хлопок.<br>
        Размер: S/M/L<br>
        Принтом с вышивкам оверлоком.<br>
        Заниженные плечи, свободный крой.`,
        link: "https://torch-fff.com/shop/dm-base/"},
        
        {clothId: "2",
        img: {
            pics: ["picsTorch/Grief.png",
            "picsTorch/Grief_Pre.jpg",
            "picsTorch/Grief_Pic1.jpg"],
            alt: "Hoodie&#47;Grief"
        },
        title: "Grief",
        price: "3900",
        brend: "Torch",
        description: `Плотность 390 гр/2<br>
        S &ndash; рост 155-165<br>
        M &ndash; рост 165-175<br>
        L &ndash; рост 175-185<br>
        XL &ndash; рост 185-195`,
        link: "https://torch-fff.com/shop/grief/"},

        {clothId: "3",
        img: {
            pics: ["picsTorch/ImpFFF.png",
            "picsTorch/ImpFFF_Pre.png",
            "picsTorch/ImpFFF_Pic1.jpg",
            "picsTorch/ImpFFF_Pic2.jpg"],
            alt: "Long&#47;ImpFFF"
        },
        title: "ImpFFF",
        price: "3500",
        brend: "Torch",
        description: `50% Шерсть 50% Акрил<br>
        S &ndash; на рост до 160<br>
        M &ndash; на рост 160-175<br>
        L &ndash; на рост 175-190`,
        link: "https://torch-fff.com/shop/imp/"}
    ]

    return clothes
}
getClothes()

function getBrends() {
    var brends = [
        {name: "Torch",
        link: "torch.html"},
        {name: "Auromatic Vertical",
        link: "automatic_vertical.html"},
        {name: "Heds",
        link: "heds.html"}
    ]
    return brends
}


// ------Content------ //
function showClothes(clothes) {
    const clothesEl = document.querySelector(".content")

    clothes.forEach(cloth => {
        const clothEl = document.createElement("div")
        clothEl.classList.add("cloth")

        clothEl.innerHTML =
        `<div class="cloth__cover-inner">
            <img src="${cloth.img.pics[0]}" onmouseover="this.src='${cloth.img.pics[1]}'" onmouseout="this.src='${cloth.img.pics[0]}'" alt="${cloth.img.alt}">
        </div>
        <div class="cloth__info">
            <div class="cloth__title">${cloth.title}</div>
            <div class="cloth__price">${cloth.price} &#8381;</div>
            <div class="cloth__id">${cloth.clothId}</div>
        </div>
        </div>`
        
        clothEl.addEventListener("click", () => {showModal(clothes, cloth.clothId)})
        clothesEl.appendChild(clothEl)
  })
}
showClothes(getClothes())


// ------Preloader------ //
window.onload = function() {
    const preloadEl = document.querySelector("#preloader")
    
    preloadEl.classList.add("preloader--hide")

    setInterval(() => {preloadEl.classList.add("preloader-hidden")}, 1600)
}


// ------ScrollUp------ //
const btnUp = document.getElementById('footer-icon-far-left')

btnUp.addEventListener("click", () => {
window.scrollTo({
top: 0,
behavior: "smooth"})
})


// ------Modal------ //
const modalEl = document.querySelector(".modal")

function showModal(clothes, id) {
    modalEl.classList.add("modal--show")
    document.body.classList.add("scroll--remove")

    modalEl.innerHTML =
    `<div class="modal__card">
        <div class="modal__button-close"><img src="/coursework/AggregatorWebsite/pics/close.png"></div>
        <div class="modal__slider"></div>
        <div class="modal__title">${clothes[id].title}</div>
        <div class="modal__price">${clothes[id].price} &#8381;</div>
        <div class="modal__info">
        <p class="modal__brend">Бренд: ${clothes[id].brend}</p>
        <p class="modal__overview">${clothes[id].description}</p>
        <p class="modal__link"><a href="${clothes[id].link}" target="_blank">Купить</a></p>
        </div>
    </div>`

    const btnClose = document.querySelector(".modal__button-close")
    btnClose.addEventListener("click", () => closeModal())

    showSlider(clothes, id)
}

function closeModal() {
    modalEl.classList.remove("modal--show")
    document.body.classList.remove("scroll--remove")
}
window.addEventListener("click", (event) => {
    if (event.target === modalEl) {
        closeModal()
    }
})
window.addEventListener("keydown", (event) => {
    if (event.keyCode === 27) {
        closeModal()
    }
})


// ------Slider------ //
function showSlider(clothes, id) {
    const sliderEl = document.querySelector(".modal__slider")

    sliderEl.innerHTML = '<div class="modal__slide"></div>'

    sliderEl.innerHTML +=
    `<a class="modal__button-prev">&#10094</a>
    <a class="modal__button-next">&#10095</a>
    <br>`

    const dotEl = document.createElement("div")
    dotEl.classList.add("modal__dots")

    for(let i = 0; i < clothes[id].img.pics.length; i++) {
        dotEl.innerHTML +=
        `<span class="modal__dot"></span>
        </div>`
    }

    sliderEl.appendChild(dotEl)
    switchSlides(clothes, id)
}

function switchSlides(clothes, id) {
    let i = 0
    const slideEl = document.querySelector(".modal__slide")
    const prevBtn = document.querySelector(".modal__button-prev")
    const nextBtn = document.querySelector(".modal__button-next")
    const dots = document.querySelectorAll(".modal__dot")

    slideEl.innerHTML += `<img src="${clothes[id].img.pics[i]}" alt="${clothes[id].img.alt}">`
    dots[0].className = "active-dot"

    prevBtn.addEventListener("click", () => {
        if(i == 0) {
            i = clothes[id].img.pics.length - 1
            slideEl.innerHTML = `<img src="${clothes[id].img.pics[i]}" alt="${clothes[id].img.alt}">`
            dots[0].className = "modal__dot"
            dots[i].className = "active-dot"
        } else {
            i += -1
            slideEl.innerHTML = `<img src="${clothes[id].img.pics[i]}" alt="${clothes[id].img.alt}">`
            dots[i + 1].className = "modal__dot"
            dots[i].className = "active-dot"
        }
    })

    nextBtn.addEventListener("click", () => {
        if(i == clothes[id].img.pics.length - 1) {
            i = 0
            slideEl.innerHTML = `<img src="${clothes[id].img.pics[i]}" alt="${clothes[id].img.alt}">`
            dots[clothes[id].img.pics.length - 1].className = "modal__dot"
            dots[i].className = "active-dot"
        } else {
            i += 1
            slideEl.innerHTML = `<img src="${clothes[id].img.pics[i]}" alt="${clothes[id].img.alt}">`
            dots[i - 1].className = "modal__dot"
            dots[i].className = "active-dot"
        }
    })

    for(let j = 0; j < dots.length; j++) {
        dots[j].addEventListener("click", () => {
            dots.forEach(dot => {
                dot.className = "modal__dot"
            });
            i = j
            dots[i].className = "active-dot"
            slideEl.innerHTML = `<img src="${clothes[id].img.pics[i]}" alt="${clothes[id].img.alt}">`
        })
    }
}


// ------Sort------ //
function dataInsertBefore(prevEl) {
    const contentEl = document.querySelector(".content")
    contentEl.remove()
    const currEl = document.createElement("div")
    currEl.classList.add("content")
    prevEl.parentNode.insertBefore(currEl, prevEl.nextSibling)
}

function sortCloth(clothes) {
    const btnSortDown = document.querySelector("#button--sortDown")
    const btnSortUp = document.querySelector("#button--sortUp")
    const btnNoSort = document.querySelector("#button--noSort")
    const prevEl = document.querySelector(".sort-cloth")
    let tmpId
    let tmpClo

    btnSortDown.addEventListener("click", () => {
        for(let i = clothes.length - 1; i > 0; i--) {
            for(let j = 0; j < i; j++) {
                if(clothes[j].price > clothes[j + 1].price) {
                    tmpId = clothes[j].clothId
                    clothes[j].clothId = clothes[j + 1].clothId
                    clothes[j + 1].clothId = tmpId
                    
                    tmpClo = clothes[j]
                    clothes[j] = clothes[j + 1]
                    clothes[j + 1] = tmpClo
                }
            }
        }
        dataInsertBefore(prevEl)
        showClothes(clothes)
    })
    
    btnSortUp.addEventListener("click", () => {
        for(let i = clothes.length - 1; i > 0; i--) {
            for(let j = 0; j < i; j++) {
                if(clothes[j].price < clothes[j + 1].price) {
                    tmpId = clothes[j].clothId
                    clothes[j].clothId = clothes[j + 1].clothId
                    clothes[j + 1].clothId = tmpId
                    
                    tmpClo = clothes[j]
                    clothes[j] = clothes[j + 1]
                    clothes[j + 1] = tmpClo
                }
            }
        }
        dataInsertBefore(prevEl)
        showClothes(clothes)
    })

    btnNoSort.addEventListener("click", () => {
        dataInsertBefore(prevEl)
        showClothes(getClothes())
    })
}
sortCloth(getClothes())


// ------Dropdown------ //
function menuBrend(brends) {
    const btnMenu = document.querySelector(".dropdown__toggle")

    const menuEl = document.createElement("div")
    menuEl.classList.add("dropdown__menu")

    menuEl.innerHTML += `<a href="aggregator/index.html" class="dropdown__link">Все бренды &#11119;</a>`

    brends.forEach(brend => {
        menuEl.innerHTML += `<a href="${brend.link}" class="dropdown__link">${brend.name}</a>
        </div>`
    });

    btnMenu.appendChild(menuEl)
 
    btnMenu.addEventListener("click", () => {
        if(menuEl.classList.contains("dropdown__menu--show")){
            menuEl.classList.remove("dropdown__menu--show")
        } else
            menuEl.classList.add("dropdown__menu--show")
    })

    window.addEventListener("click", (event) => {
        if(!menuEl.contains(event.target) && !btnMenu.contains(event.target)) {
            menuEl.classList.remove("dropdown__menu--show")
        }
    })
}
menuBrend(getBrends())