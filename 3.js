const btn = document.getElementById('btn');
        const imageHorror = document.getElementById('image-horror');

        btn.addEventListener('click', () => {
            imageHorror.style.display = 'flex'; 
            setTimeout(() => {
                imageHorror.style.display = 'none';
            }, 100000);
        });

        // imageHorror.addEventListener('click', () => {
        //     imageHorror.style.display = 'none'; 
        // });