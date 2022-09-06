const options = {
    margin: 0.5,
    filename: 'michael-l-bangura-resume.pdf',

    image: { 
        type: 'png', 
        quality: 500
    },

    html2canvas: { 
        scale: 1 
    },

    jsPDF: { 
        unit: 'in', 
        format: 'A4', 
        orientation: 'portrait' 
    }
}

document.querySelector('.download').addEventListener('click', () => {
    const element = document.getElementById('resume');
    html2pdf().from(element).set(options).save();
})
