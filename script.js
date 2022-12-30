// ------DataOfObjects------ //
function getClothes() {
    var clothes = [
        
        {clothId: "0",
        img: {
            pics: ["brands/picsTorch/GrimScarf.png",
            "brands/picsTorch/GrimScarf_Pre.jpg",
            "brands/picsTorch/GrimScarf_Pic1.png",
            "brands/picsTorch/GrimScarf_Pic2.jpg"],
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
            pics: ["brands/picsTorch/DMBase.png",
            "brands/picsTorch/DMBase_Pre.jpg"],
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
            pics: ["brands/picsA-V/LuxePunk.jpg",
            "brands/picsA-V/LuxePunk_Pre.jpg"],
            alt: "Hoodie&#47;LuxePunk"
        },
        title: "LuxePunk",
        price: "6500",
        brend: "Automatic Vertical",
        description: `Технология окрашивания "Washed out"<br>
        Нашивки выполнены из канваса с нанесением прямой печати<br>
        Плотность 390 гр/2<br>
        S &ndash; рост 155-165<br>
        M &ndash; рост 165-175<br>
        L &ndash; рост 175-185<br>
        XL &ndash; рост 185-195`,
        link: "https://automaticvertical.ru/brand_new_site/tproduct/458361970-789780550301-luxe-punk"},
        
        {clothId: "3",
        img: {
            pics: ["brands/picsA-V/GrungeSafari.jpg",
            "brands/picsA-V/GrungeSafari_Pre.jpg",
            "brands/picsA-V/GrungeSafari_Pic1.jpg",
            "brands/picsA-V/GrungeSafari_Pic2.jpg"],
            alt: "Hoodie&#47;GrungeSafari"
        },
        title: "GrungeSafari",
        price: "6500",
        brend: "Automatic Vertical",
        description: `Футтер 3#215; нитка петля 370 гр/м 2<br>
        Металическая Молния<br>
        100% хлопок<br>
        Нашивки из хлопка с прямой печатью<br>
        Оверсайз крой<br>
        S &ndash; 155-165 см<br>
        M &ndash; 165-175 см<br>
        L &ndash; 175-185 см<br>
        XL &ndash; 185-195 см`,
        link: "https://automaticvertical.ru/tproduct/1-705800569501-grunge-safari"},
        
        {clothId: "4",
        img: {
            pics: ["brands/picsA-V/PresionVision.png",
            "brands/picsA-V/PresionVision_Pre.jpg",
            "brands/picsA-V/PresionVision_Pic1.jpeg"],
            alt: "Shirt&#47;PresionVision"
        },
        title: "PresionVision",
        price: "4000",
        brend: "Automatic Vertical",
        description: `Сатин 200 гр/м2 100% хлопок<br>
        Рулонная запечатка<br>
        Горловина обработана бархатной лентой<br>
        Добавлена кокетка<br>
        M &ndash; на рост до 180<br>
        L &ndash; на рост от 180`,
        link: "https://automaticvertical.ru/brand_new_site/tproduct/458361970-310381065191-person-vision"},
        
        {clothId: "5",
        img: {
            pics: ["brands/picsA-V/SpaceOdyssey.jpg",
            "brands/picsA-V/SpaceOdyssey_Pre.jpg",
            "brands/picsA-V/SpaceOdyssey_Pic1.jpg"],
            alt: "Scarf&#47;SpaceOdyssey"
        },
        title: "SpaceOdyssey",
        price: "1800",
        brend: "Automatic Vertical",
        description: `50% акрил 50% шерсть<br>
        Размер 180#215;20 см`,
        link: "https://automaticvertical.ru/tproduct/1-524781489911-space-odyssey"},
        
        {clothId: "6",
        img: {
            pics: ["brands/picsTorch/Grief.png",
            "brands/picsTorch/Grief_Pre.jpg",
            "brands/picsTorch/Grief_Pic1.jpg"],
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

        {clothId: "7",
        img: {
            pics: ["brands/picsTorch/ImpFFF.png",
            "brands/picsTorch/ImpFFF_Pre.png",
            "brands/picsTorch/ImpFFF_Pic1.jpg",
            "brands/picsTorch/ImpFFF_Pic2.jpg"],
            alt: "Long&#47;ImpFFF"
        },
        title: "ImpFFF",
        price: "3500",
        brend: "Torch",
        description: `50% Шерсть 50% Акрил<br>
        S &ndash; на рост до 160<br>
        M &ndash; на рост 160-175<br>
        L &ndash; на рост 175-190`,
        link: "https://torch-fff.com/shop/imp/"},

        {clothId: "8",
        img: {
            pics: ["brands/picsHeds/Sweater_BOO-BOO.png",
            "brands/picsHeds/Sweater_BOO-BOO_Pre.jpg",
            "brands/picsHeds/Sweater_BOO-BOO_Pic1.jpg",
            "brands/picsHeds/Sweater_BOO-BOO_Pic2.jpg"],
            alt: "Sweater&#47;BOO-BOO"
        },
        title: 'Sweater "BOO-BOO"',
        price: "4900",
        brend: "Heds",
        description: `Внешние швы<br>
        Изображение: нашивка<br>
        Размер M/L<br><br>
        Параметры размера М<br>
        Длина &ndash; 70 см<br>
        Ширина &ndash; 58<br>
        Рукав &ndash; от Горловины`,
        link: "https://heds.site/tproduct/368166866-693485345451-sweater-boo-boo"},

        {clothId: "9",
        img: {
            pics: ["brands/picsHeds/SCARF_USSR.jpg",
            "brands/picsHeds/SCARF_USSR_Pre.jpeg"],
            alt: "Sweater&#47;BOO-BOO"
        },
        title: "SCARF USSR",
        price: "2100",
        brend: "Heds",
        description: `Тёплый и массивный шарф<br>
        Пряжа: полушерсть<br><br>
        Длина: 2 метра<br>
        Ширина: 35 см`,
        link: "https://heds.site/tproduct/368166866-924631564911-scarf-sssr"}
    ]

    return clothes
}
getClothes()

function getBrends() {
    var brends = [
        {name: "Torch",
        link: "brands/torch.html"},
        {name: "Auromatic Vertical",
        link: "brands/automatic_vertical.html"},
        {name: "Heds",
        link: "brands/heds.html"}
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
        <div class="modal__button-close">&#10006;</div>
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
function sortInsertBefore(prevEl) {
    const contentEl = document.querySelector(".content")
    contentEl.remove()
    const currEl = document.createElement("div")
    currEl.classList.add("content")
    prevEl.parentNode.insertBefore(currEl, prevEl.nextSibling)
}

function sortClothes(clothes) {
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
        sortInsertBefore(prevEl)
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
        sortInsertBefore(prevEl)
        showClothes(clothes)
    })

    btnNoSort.addEventListener("click", () => {
        sortInsertBefore(prevEl)
        showClothes(getClothes())
    })
}
sortClothes(getClothes())


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