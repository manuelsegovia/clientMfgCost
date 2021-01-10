const mainUrl = 'https://mfg-cost.herokuapp.com/'
const mainForm = document.querySelector('form');

mainForm.addEventListener('submit', async (e)=>{
  e.preventDefault();
  const userId = mainForm.userId.value;
  const password = mainForm.password.value;
  const route = mainForm.user.value
  console.log(route);
  const urlTemination = route;
  const tipo = mainForm.tipo.value;
 try {
   const response = await fetch(`${mainUrl}${urlTemination}`,{method: 'POST',
   body: JSON.stringify({userId,
    password,
    tipo,}),
    headers: { 'Content-Type': 'application/json' }, 
   })
   const data = await response.json()
   console.log(data);
 } catch (error) {
   console.log(error)
 }

})