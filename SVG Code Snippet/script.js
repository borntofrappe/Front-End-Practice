// identify the app container and the nested svg
const app = document.querySelector('.app');
const svg = app.querySelector('svg');

// the idea is to create a copy of the svg, overlay it on top of the existing element and use the viewBox attribute to zoom in on a particular section
// by using a clip-path it is then possible to crop the zoomed-in area as to show the normally-zoomed code behind

// copy the svg
const clone = svg.cloneNode(true);

// include in the cloned svg a clipPath element
// wrap the cloned svg in a group element which then uses the defined clip
// ! alter the viewBox attribute to focus on a particular section of the code

clone.innerHTML = `
<defs>
    <clipPath
        id="clip">

        <circle
            cx="18"
            cy="25"
            r="12">
        </circle>
    </clipPath>
</defs>
<svg viewBox="0 10 90 30" clip-path="url(#clip)">${clone.innerHTML}</svg>
`;

// absolute position the zoomed and clipped svg on top of the existing one
app.style.position = 'relative';
clone.style.position = 'absolute';
clone.style.top = '0';
clone.style.left = '0';
clone.style.filter = 'drop-shadow(0 0 5px #d1d5da)';

app.appendChild(clone);
