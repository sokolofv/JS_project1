const openCourseBtn = document.querySelector('.course__button'); 
const openTiketBtn = document.querySelector('.assembly__button');   
const modalCourse = document.querySelector('#modal_course');
const modalTiket = document.querySelector('#modal_tiket');

if (openTiketBtn && modalTiket) {
    openTiketBtn.addEventListener('click', () => {
        modalTiket.style.display = 'flex'
})
}

if (openCourseBtn && modalCourse) {
openCourseBtn.addEventListener('click', () => {
        modalCourse.style.display = 'flex'
})
}

if (modalTiket) {
    modalTiket.addEventListener('click',(event) => {
        const modalContent = event.target.closest('.modal__inner')

        if (!modalContent){
            modalTiket.style.display = ''
        } 
    } )
}
if (modalCourse) {
    modalCourse.addEventListener('click',(event) => {
        const modalClos = event.target.closest('.modal__close')
    
        if (modalClos){
            modalCourse.style.display = ''
        } 
    } )
    }
