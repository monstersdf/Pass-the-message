// Project Description/Summary: This project challenges you to select the input element's value from the DOM. When you click on the “Submit” button you'll see the message inputted in the box in the “Last Message Delivered” Section.

const userMessage = document.querySelector('.text-box input[type = "text"]')
// console.log(userMessage.value,'hey')
let result = document.querySelector('.result')
console.log(result)
const submitBtn = document.querySelector('.btn')
// console.log(submitBtn)
submitBtn.addEventListener('click',(e)=>{
    e.preventDefault();
// console.log(e.target.classList)
if(e.target.classList.contains('btn-submit')){
    result.innerHTML = userMessage.value
}
userMessage.value = ''
});
