const guichardIT = {
    cours: " javascript",
    email: "webguichard@gmail.com",
    etudiant: [],

    login(nom, prenom) {
        console.log(`${nom} ${prenom} you are in ${this.cours}
         your email is ${this.email}`)
        this.etudiant.push(`${nom} ${prenom}`)

    }
}


guichardIT.login("Guichard","Jean Louis")
console.log(guichardIT.etudiant)


const utiliser = guichardIT.login /*valeur par reference*/

const jeanIT = {
    cours: "html",
    email: "guydrum7@gmail.com",
    etudiant: [],
} 

utiliser.call(jeanIT, "jean","guy")
console.log(jeanIT.etudiant)

