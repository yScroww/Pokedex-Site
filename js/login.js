async function logar(e) {
  e.preventDefault()
  console.log("Tentando logar...")
  const req = await fetch('http://localhost:1337/api/auth/local', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          "identifier": document.getElementById("email").value,
          "password": document.getElementById("password").value,


      }),
  }).then(async (response) => {
      if (response.status === 200) {
          console.log("Logado com sucesso!")
          const data = await response.json()
          console.log(data)
          const req = await fetch('http://localhost:1337/api/users/me?populate=role', {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer ' + data.jwt,
              },
          })
          const udata = await req.json()
          console.log(udata)



          const info = {
              email: data.user.email,
              username: data.user.username,
              id: data.user.id,
              jwt: data.jwt,
              img: data.user.img,
              role: udata.role.name,
          }


          
          if (document.getElementById("remember-me").checked) localStorage.setItem('user', JSON.stringify(info));
          window.location.href="../index.html"

      } else {
          console.log('Erro desconhecido')
      }
  });


}
document.getElementById("login").addEventListener("click", logar)