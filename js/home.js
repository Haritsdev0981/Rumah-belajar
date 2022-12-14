const swiperWrapper = document.querySelector('.container .swiper-wrapper')

const facilities = [
    "Balkon",
    "Gedung depan",
    "Ruang Kelas 1",
    "Ruang kelas 2",
    "Lorong Atas",
    "Depan Kelas",
    "Lorong Bawah",
    "Resepsionis (Samping)",
    "Resepsionis (Depan)",
    "Ruang Acak",
    "Ruang ber-ac 1",
    "Ruang ber-ac 2",
    "Ruang ber-ac 3",
    "Ruang Kasur",
    "Ruang Kosong Luas",
    "Ruang Tamu",
    "Ruang Tengah",
    "Ruang Tangga Turun",
    "Ruang Tangga Naik",
    "Balkon (Tanpa Pagar)",
]

facilities.forEach((facility, idx) => {
    swiperWrapper.innerHTML += `
    <div class="swiper-slide d-grid">
        <img src="./IMG/img-ruang/fasilitas (${idx + 1}).webp" alt="fasilitas ${idx + 1}">
        <h4>${facility}</h4>
    </div>
    `
})

const sections = document.querySelectorAll('section[id]')
window.addEventListener('scroll', scrollActive)

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id')
        //console.log(sectionId)

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav-item a[href*=${sectionId}]`).classList.add('active')
        } else {
            document.querySelector(`.nav-item a[href*=${sectionId}]`).classList.remove('active')
        }
    })
}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    autoplay: {
        delay: 5000,
    },
});