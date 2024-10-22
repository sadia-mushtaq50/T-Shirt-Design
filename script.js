function changeColor(color) {
    console.log(color);
    const shirt = document.getElementById('shirt');
    shirt.src = `/public/shirt-${color}.png`; 
}


// from here coding for text styler has been start

// const textArea = document.getElementById('text-area');

// textArea.addEventListener('input', () => {
//     document.getElementById("textOnShirt").innerHTML = textArea.value;
// });

document.addEventListener("DOMContentLoaded", () => {
    const textArea = document.getElementById('text-area');
    const textOnShirt = document.getElementById("textOnShirt");
    textArea.addEventListener('input', () => {
        textOnShirt.innerHTML = textArea.value;
    });
    
    const colorPicker = document.getElementById('color-picker');
    const boldBtn = document.getElementById('bold-btn');
    const italicBtn = document.getElementById('italic-btn');
    const leftAlignBtn = document.getElementById('left-align-btn');
    const centerAlignBtn = document.getElementById('center-align-btn');
    const rightAlignBtn = document.getElementById('right-align-btn');
    const increaseBtn = document.getElementById('increase-btn');
    const decreaseBtn = document.getElementById('decrease-btn');
    const sizeInput = document.getElementById('size-input');
    const updateSizeBtn = document.getElementById('update-size-btn');

    // Change text color
    colorPicker.addEventListener('input', (e) => {

        textOnShirt.style.color=e.target.value;
        // document.execCommand('foreColor', false, e.target.value);
    });

    // Bold text
    boldBtn.addEventListener('click', () => {
        textOnShirt.style.fontWeight = textOnShirt.style.fontWeight === 'bold' ? 'normal' : 'bold';
        // document.execCommand('bold');
    });

    // Italic text
    italicBtn.addEventListener('click', () => {
        textOnShirt.style.fontStyle = textOnShirt.style.fontStyle === 'italic' ? 'normal' : 'italic';
        // document.execCommand('italic');
    });

    // Align text
    leftAlignBtn.addEventListener('click', () => {
        // document.execCommand('justifyLeft');
        textOnShirt.style.textAlign = 'left';
    });

    centerAlignBtn.addEventListener('click', () => {

        textOnShirt.style.textAlign = 'center';

        // document.execCommand('justifyCenter');
    });

    rightAlignBtn.addEventListener('click', () => {
        textOnShirt.style.textAlign = 'right';

        // document.execCommand('justifyRight');
    });

    // Adjust text size
    const adjustTextSize = (delta) => {
        const currentSize = parseInt(window.getComputedStyle(textOnShirt).fontSize);
        const newSize = Math.max(1, Math.min(currentSize + delta, 72)); // Limit size between 1 and 72
        textOnShirt.style.fontSize = newSize + 'px';
    };

    increaseBtn.addEventListener('click', () => {
        adjustTextSize(2); // Increase size by 2
    });

    decreaseBtn.addEventListener('click', () => {
        adjustTextSize(-2); // Decrease size by 2
    });

    // Update font size from input
    updateSizeBtn.addEventListener('click', () => {
        const newSize = sizeInput.value;
        if (newSize) {
            textOnShirt.style.fontSize = newSize + 'px';

    // increaseBtn.addEventListener('click', () => {
    //     const currentSize = parseInt(window.getComputedStyle(textArea).fontSize);
    //     document.execCommand('fontSize', false, '7'); // Set to a larger size
    //     const newSize = Math.min(currentSize + 2, 72); // Limit to max size
    //     textArea.style.fontSize = newSize + 'px';
    // });

    // decreaseBtn.addEventListener('click', () => {
    //     const currentSize = parseInt(window.getComputedStyle(textArea).fontSize);
    //     document.execCommand('fontSize', false, '2'); // Set to a smaller size
    //     const newSize = Math.max(currentSize - 2, 1); // Limit to min size
    //     textArea.style.fontSize = newSize + 'px';
    // });

    // // Update font size from input
    // updateSizeBtn.addEventListener('click', () => {
    //     const newSize = sizeInput.value;
    //     if (newSize) {
    //         textArea.style.fontSize = newSize + 'px';

        }
    });
});

