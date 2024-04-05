function carregar() {
    let mgs = document.getElementById('msg')
    let img = document.getElementById('img')  
    
    let data = new Date()
    let hora = data.getHours()  
    mgs.innerHTML = `Agora são ${hora} horas,`

    if (hora >=0 && hora < 12) {
        mgs.innerHTML += ` Bom dia!`
        img.src = 'image/FotoManha.png'
        document.body.style.background = '#e2cd9f'
    } else if ( hora >= 12 && hora <= 18) {
        mgs.innerHTML += ` Bom tarde!`
        img.src = 'image/FotoTarde.png'
        document.body.style.background = '#b9846f'
    } else {
        mgs.innerHTML += ` Bom Noite!`
        img.src = 'image/FotoNoite.png'
        document.body.style.background = '#515154'
    }

}



