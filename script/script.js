var buttonFinishForm = document.querySelector(".form-finish");
var DownloadFormInput = document.querySelector(".download-form-input")
var DownloadFormComplete = document.querySelector(".download-form .download-form-complete")


buttonFinishForm.addEventListener("click", function(e) {
    console.log("clicked!!");
    // DownloadFormComplete.classList.add("download-form-complete-in");
    DownloadFormComplete.classList.add("download-form-complete-add");
});


DownloadFormComplete.addEventListener("transitionend", function() {
    console.log("Animation complete!");
    DownloadFormComplete.classList.add("download-form-complete-show");
})

// var emailInput = document.getElementById("ename");
// var form = document.querySelector('form');


// emailInput.addEventListener("input", function(e){
//     if (FormData.checkValidity()) {
//         console.log()
//     }

// })

