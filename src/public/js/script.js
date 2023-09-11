const contenedor = document.getElementById('container-row');
const btnCrear = document.getElementById('btn-new');
const myModal = new bootstrap.Modal(document.getElementById('myModal'));
const btnSave = document.getElementById('btn-save');
const form = document.getElementById('formulario');


let html = ''
let option = ''
let idForm = ''

const inputTitle = document.getElementById('inputTitle')
const inputContent = document.getElementById('inputContent')
const inputImage = document.getElementById('inputImage')

btnCrear.addEventListener('click', () => {
    option = "new"
    btnSave.textContent = "Postear"
    inputTitle.value = ""
    inputContent.value = ""
    inputImage.value = ""
    myModal.show()
});

document.addEventListener('click', (event) => {
    if(event.target.matches('#btn-delete')) {
       const article = event.target.closest('.col-4')
       const idArticle = article.dataset.id

       Swal.fire({
            title: 'Estás seguro?',
            text: "No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'black',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borralo!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/api/foro/${idArticle}`, {
                    method: 'DELETE'
                }).then(res => {
                    if (res.ok) {
                        article.remove()
                    }
                }).catch(err => {
                    console.error(err)
                })
                Swal.fire(
                    'Borrado!',
                    'Su posteo fue borrado.',
                    'Exito'
                )
            }
        })

        
    }
});

document.addEventListener('click', (event) => {
    if(event.target.matches('#btn-edit')) {
       const article = event.target.closest('.col-4');

       const idArticle = article.dataset.id;
       const urlImageEdit = article.children[0].children[0].src;
       const titleEdit = article.children[0].children[1].children[0].textContent;
       const contentEdit = article.children[0].children[1].children[1].textContent;

       idForm = idArticle;
       inputTitle.value = titleEdit;
       inputContent.value = contentEdit;
       inputImage.value = urlImageEdit;       
       option = "edit";
       btnSave.textContent = "Editar"
       myModal.show();
    }
});

form.addEventListener("submit", (event) => {
   event.preventDefault();

    if(option === "new") {
        const newPost = {
            title: inputTitle.value,
            content: inputContent.value,
            image: inputImage.value,
        };
        
        fetch('http://localhost:3000/api/foro', {
            method: 'POST',
            headers: { 
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPost),
        }).then((res) => {
           if (res.ok) { 
            alert("Posteo creado correctamente");
            myModal.hide();
            location.reload();
            }
        });
    }   

    if(option === "edit") {
       const newPost = {
            title: inputTitle.value,
            content: inputContent.value,
            image: inputImage.value,
        };
        
        fetch(`http://localhost:3000/api/foro/${idForm}`, {
            method: 'PUT',
            headers: { 
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPost),
        }).then(res => {
           if(res.ok){
            alert('Posteo editado correctamente');
            myModal.hide();
            location.reload();
           } 
        })
    }
});
    


