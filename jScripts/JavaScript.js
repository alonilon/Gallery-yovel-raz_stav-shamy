//התמונה הראשונה שמופיע היא 1
var slideIndex = 1;



//מופעלת כאשר לוחצים על הכפתורים בגלריה
//תפקידה לשלוח לפונקציה לאיזה מספר תמונה להעביר
//n=-1\1 according to the button
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides");//התמונות הגדולות
    var smallPic = document.getElementsByClassName("demo"); //תמונות קטנות

    if (n > slides.length) { slideIndex = 1 }// מאפס ל1
    if (n < 1) { slideIndex = slides.length }//מקפיץ לשקופית האחרונה

    //משנה את הנראות של כל התמונות במחלקה ללא מוצגות
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    //הפונקציה הופכת את התמונות מפעילות ללא פעילות
    for (i = 0; i < smallPic.length; i++) {
        smallPic[i].className = smallPic[i].className.replace("active", "");
    }

    //הפונקציה הופכת את התמונה במספר שנשלח אל הפונקציה לפעיל
    slides[slideIndex - 1].style.display = "block";
    smallPic[slideIndex - 1].className += " active";
}

// בלחיצה על תמונה, הפוקנציה שולחת לפונקציה על איזה מספר תמונה לפעול
function currentSlide(n) {
    showSlides(slideIndex = n);
}

