"use strict"

const btn = document.getElementById('btn')
const emailInput = document.querySelector('input')
const container = document.querySelector('.container')
const contentDiv = document.querySelectorAll(".divs")
const error = document.querySelector(".error")
const emailRegex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');



btn.addEventListener('click',()=>{
    if(emailRegex.test(emailInput.value) == true){
        error.innerHTML = ""
       contentDiv.forEach((e)=>{
        container.removeChild(e)
       })
       container.style.flexDirection ="column"
       let DesktopW = window.matchMedia("(max-width: 930px)")
       if(DesktopW.matches){
        container.style.width = "100vw"
        container.style.height = "100vh"
        container.style.alignItems ="flex-start"
        
       }else{
        container.style.width = "30em"
        container.style.height = "35em"
       }

       let imgThanksPage = document.createElement('img')
       let h1ThanksPage = document.createElement('h1')
       let pThanksPage = document.createElement('p')

       imgThanksPage.src = '/assets/images/icon-success.svg'
       h1ThanksPage.innerHTML = "Thanks for subscription"
       pThanksPage.innerHTML= `A confirmation email has been sent to ${emailInput.value}. Please open it and click the button inside to confirm your subscription`
       btn.textContent = 'Dismiss message'

       container.appendChild(imgThanksPage)
       container.appendChild(h1ThanksPage)
       container.appendChild(pThanksPage)
       container.appendChild(btn)
       
    }else{
        error.innerHTML = 'valid email required'
        emailInput.value = ''
    }
    
 })