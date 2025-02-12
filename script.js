function changeLanguage(lang) {
    const translatableElements = document.querySelectorAll('[data-th][data-en]'); // เลือก elements ที่มีทั้ง data-th และ data-en

    translatableElements.forEach(element => {
        const thaiText = element.getAttribute('data-th');
        const englishText = element.getAttribute('data-en');

        if (lang === 'th') {
            element.textContent = thaiText;
        } else if (lang === 'en') {
            element.textContent = englishText;
        }
    });
}

// ตั้งค่าภาษาเริ่มต้น (ถ้าต้องการ) เช่น ภาษาไทยเมื่อโหลดหน้าเว็บครั้งแรก
document.addEventListener('DOMContentLoaded', () => {
    changeLanguage('th'); // หรือ 'en' หากต้องการเริ่มต้นด้วยภาษาอังกฤษ
});
let slideIndex = 1; // ตัวแปรเก็บ index ของสไลด์ปัจจุบัน
showSlides(slideIndex); // แสดงสไลด์แรกเมื่อหน้าเว็บโหลด

// ฟังก์ชันเลื่อนสไลด์ (ปุ่ม next/prev)
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// ฟังก์ชันกำหนดสไลด์ปัจจุบัน (จุด indicator)
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide"); // ดึง elements ที่มี class "slide"
  let dots = document.getElementsByClassName("dot"); // ดึง elements ที่มี class "dot"
  if (n > slides.length) {slideIndex = 1} // วนกลับไปสไลด์แรกหากเกินสไลด์สุดท้าย
  if (n < 1) {slideIndex = slides.length} // ไปสไลด์สุดท้ายหากกด "ก่อนหน้า" จากสไลด์แรก
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // ซ่อนสไลด์ทั้งหมด
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", ""); // เอา class "active" ออกจากจุด indicator ทั้งหมด
  }
  slides[slideIndex-1].style.display = "block"; // แสดงสไลด์ปัจจุบัน (index - 1 เนื่องจาก index array เริ่มที่ 0)
  slides[slideIndex-1].classList.add("fade"); // เพิ่ม animation fade in
  dots[slideIndex-1].className += " active"; // เพิ่ม class "active" ให้จุด indicator ของสไลด์ปัจจุบัน
}

// ฟังก์ชันเปลี่ยนภาษา (ยังคงเหมือนเดิม)
function changeLanguage(lang) {
    const translatableElements = document.querySelectorAll('[data-th][data-en]');

    translatableElements.forEach(element => {
        const thaiText = element.getAttribute('data-th');
        const englishText = element.getAttribute('data-en');

        if (lang === 'th') {
            element.textContent = thaiText;
        } else if (lang === 'en') {
            element.textContent = englishText;
        }
    });
}

// ตั้งค่าภาษาเริ่มต้น (ถ้าต้องการ) เช่น ภาษาไทยเมื่อโหลดหน้าเว็บครั้งแรก
document.addEventListener('DOMContentLoaded', () => {
    changeLanguage('th'); // หรือ 'en' หากต้องการเริ่มต้นด้วยภาษาอังกฤษ
});
slideshowInterval = setInterval(function(){
    plusSlides(1);
  }, 3000);
  