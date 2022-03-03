let alph = ['a','b','c','d','e','f','g','h','i', 'j','k','l','m','n','o','p','q','r','x','t','u','v','w','x','y','z']
// let alph = 'abcdefghijklmonpqrxtuvwxyz'
let cipheredPhrase = ''
let realPhrase = ''

function cipher(str) {
    str = str.toLowerCase();

    str.split('').forEach(letter => {
        if (alph.includes(letter)){
          let newLetter = (alph.indexOf(letter) + 4) % alph.length
          
            cipheredPhrase +=  alph[newLetter]
        }else{
            cipheredPhrase += (letter);
        }
    })
      console.log(cipheredPhrase)
  cipheredPhrase.split('').forEach(letter => {
    if (alph.includes(letter)){
          let newLetter = ((alph.indexOf(letter) - 4) + alph.length) % alph.length
          
            realPhrase +=  alph[newLetter]
        }else{
            realPhrase += (letter);
        }
  })
  console.log(realPhrase)
}


cipher('I love cryptography!')