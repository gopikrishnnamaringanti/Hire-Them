let showpass = document.getElementById("password")
let showpass1 = document.getElementById("password1")
let locked = document.getElementById("lockimg")
let locked1 = document.getElementById("lockimg-1")
let loginpage = document.getElementsByClassName("login")
let register = document.getElementById("reglin")
let registerpage=document.getElementsByClassName("register")
let logi=document.getElementById("log")
let em=document.getElementById("email")
let submit=document.getElementById("submit")
function showpassword() {

   if (showpass.type === "password") {
      showpass.type = "text"
      locked.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAASxJREFUSEvtloEJAjEMRf9Nom6im+gk6iTqJLqJOonyoAflTK/pWSyKAVHMcS/5aZJ2amRdI66mgueS1pJu4XMpTaAUvJR0NiAEcJK08wZQAibDQ+bFey/cC44zJTsAR0lIjm8bfuPbSMpK7wUjLwBsEeoaJ08A1/AH0FVOci/4EV40JiX1JXOyJrhR84BjmZERiS3rJcfHcwSQtFIwEmbrl8sW/x88PKn07ixMKXzU9+6RMjxDnc0zkZLaMyy8fLMTUmB6kt6sYWZ7pcB939YAm4f468D9OuSb85CzlwSnZhwPknhOpwKoAqY9GImxxUvEglcBW9uHPT0meRXwcOd+TGqkjLPOyVy1nX4PXHNkFkndbEkQJVcZTuw7y4KeN69AnhtIbhxO8jcDPwGAGEkfRL4phAAAAABJRU5ErkJggg=="
   }
   else {
      showpass.type = "password"
      locked.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAASRJREFUSEvtlo0JwjAQhV8nUTfRTXQSdRJ1Et1EnUT5IIXT5remLYoHgjQlX9673F0bTRTNRFz1Bc8lrSXd3O9SKqAUvJR09kA4wEnSLvcAJWAUHhIb73PhuWCrFHUAjpKwnLWt+8/aRlLS+lww9gIgFi6vVjwHuLoHQFcpy3PBD7dRzEryi3JUc7ho5ICtzdiIxb6w76E4ancpOLbhH9zb6rY7zVyXIq/k9x7Ise89Lpr3ToRynNMsUhe3XfdWQghMTaK4RnjLKwRu67YGmD06nK8Ekzt7oWLuVFNsG4nt0yF4FTDlQeu0wbikEgYF+6bPKOD3mTua1dhpVdtZPajVvwmu2TKLOtdkQ4JT8kXBjf1kWFDzVEEncj59ag2Kl30mAz8BwelPH63+IBgAAAAASUVORK5CYII="
   }
}
function showpassword1() {
   if (showpass1.type === "password") {
      showpass1.type = "text"
      locked1.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAASxJREFUSEvtloEJAjEMRf9Nom6im+gk6iTqJLqJOonyoAflTK/pWSyKAVHMcS/5aZJ2amRdI66mgueS1pJu4XMpTaAUvJR0NiAEcJK08wZQAibDQ+bFey/cC44zJTsAR0lIjm8bfuPbSMpK7wUjLwBsEeoaJ08A1/AH0FVOci/4EV40JiX1JXOyJrhR84BjmZERiS3rJcfHcwSQtFIwEmbrl8sW/x88PKn07ixMKXzU9+6RMjxDnc0zkZLaMyy8fLMTUmB6kt6sYWZ7pcB939YAm4f468D9OuSb85CzlwSnZhwPknhOpwKoAqY9GImxxUvEglcBW9uHPT0meRXwcOd+TGqkjLPOyVy1nX4PXHNkFkndbEkQJVcZTuw7y4KeN69AnhtIbhxO8jcDPwGAGEkfRL4phAAAAABJRU5ErkJggg=="

   }
   else {
      showpass1.type = "password"
      locked1.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAASRJREFUSEvtlo0JwjAQhV8nUTfRTXQSdRJ1Et1EnUT5IIXT5remLYoHgjQlX9673F0bTRTNRFz1Bc8lrSXd3O9SKqAUvJR09kA4wEnSLvcAJWAUHhIb73PhuWCrFHUAjpKwnLWt+8/aRlLS+lww9gIgFi6vVjwHuLoHQFcpy3PBD7dRzEryi3JUc7ho5ICtzdiIxb6w76E4ancpOLbhH9zb6rY7zVyXIq/k9x7Ise89Lpr3ToRynNMsUhe3XfdWQghMTaK4RnjLKwRu67YGmD06nK8Ekzt7oWLuVFNsG4nt0yF4FTDlQeu0wbikEgYF+6bPKOD3mTua1dhpVdtZPajVvwmu2TKLOtdkQ4JT8kXBjf1kWFDzVEEncj59ag2Kl30mAz8BwelPH63+IBgAAAAASUVORK5CYII="

   }
}
