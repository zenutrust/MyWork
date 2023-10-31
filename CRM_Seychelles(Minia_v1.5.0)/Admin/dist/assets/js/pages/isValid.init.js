var input=document.querySelector("#phone"),errorMsg=document.querySelector("#error-msg"),validMsg=document.querySelector("#valid-msg"),errorMap=["Invalid number","Invalid country code","Too short","Too long","Invalid number"],iti=window.intlTelInput(input,{utilsScript:"../utils.js"}),reset=function(){input.classList.remove("error"),errorMsg.innerHTML="",errorMsg.classList.add("hide"),validMsg.classList.add("hide")};input.addEventListener("blur",function(){var e;reset(),input.value.trim()&&(iti.isValidNumber()?validMsg.classList.remove("hide"):(input.classList.add("error"),e=iti.getValidationError(),errorMsg.innerHTML=errorMap[e],errorMsg.classList.remove("hide")))}),input.addEventListener("change",reset),input.addEventListener("keyup",reset);