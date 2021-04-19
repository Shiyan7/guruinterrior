import noUiSlider from "nouislider";

const sliders = document.querySelectorAll('.slider');

if(sliders) {
    sliders.forEach(slider => {
        noUiSlider.create(slider, {
            start: [100, 5000],
            connect: true,
            tooltips: true,
            
            range: {
                'min': 100,
                'max': 8000
            },
            
            format: {
                from: function(value) {
                    return parseInt(value);
                },
                to: function(value) {
                    return parseInt(value);
                }
            }
        });
    })
}
