export default class InterfaceUsuario {

    url = 'http://localhost:4000/usuarios/';
    templateTable = document.getElementById('template-table').content;
    fragment = document.createDocumentFragment();
    tabla = document.getElementById('t-body')

    



    buscarData() {

        console.log(this.templateTable)
        console.log(this.fragment)
        console.log(this.tabla)
        
        axios.get(this.url)
            .then(({
                data
            }) => {
                data.forEach(usuarios => {
                    const {
                        nombre,
                        apellido,
                        correo,
                        id
                    } = usuarios

                    this.templateTable.getElementById('t-id').textContent = id
                    this.templateTable.getElementById('t-nombre').textContent = nombre
                    this.templateTable.getElementById('t-apellido').textContent = apellido    
                    this.templateTable.getElementById('t-email').textContent = correo

                    const clone = this.templateTable.cloneNode(true)
                    this.fragment.appendChild(clone)

                })

                this.tabla.appendChild(this.fragment)
            })


            .catch(console.warn)
    }
}