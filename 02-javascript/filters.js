const filter = document.querySelector ('#filter-location');
const mensaje = document.querySelector ('#filter-selected-value')


filter.addEventListener('change', ()=> {
    const jobs = document.querySelectorAll ('.job-listing-card')
    
    const selectedValue = filter.value;

    if (selectedValue) {
        mensaje.textContent = `Has seleccionado: ${selectedValue}`
    }
    else {
        mensaje.textContent = ''
    }

    jobs.forEach (job => {
        const modalidad = job.dataset.modalidad
        /* const atrivute = job.getAttribute('data-modalidad')  Otra forma de conseguir el atrivuto */

        // if (selectedValue === '' || selectedValue === modalidad ) {
        //     job.classList.remove ('is-hidden');

        // } else {
        //     job.classList.add('is-hidden');
        // }

        const isShown = selectedValue === '' || selectedValue === modalidad
        job.classList.toggle('is-hidden', !isShown) /* otra forma de cambiar los filtros */
    })

});