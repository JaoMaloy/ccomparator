let filesUploaded = 0;
let i = 0;
const leftButton = document.getElementById("leftButton");
const rightButton = document.getElementById("rightButton");
var scrollButton = document.getElementById('scrollBot');
var body = document.getElementById("body");

function init()
{
    console.log("hello there");

    var xhr = new XMLHttpRequest();
    if (xhr.upload)
    {
        leftButton.addEventListener('change', imageSelectHandler, false);
        rightButton.addEventListener('change', imageSelectHandler, false);
    }
}

function imageSelectHandler()
{
    console.log("imageSelectHandler");

    if (this.files) {
        [].forEach.call(this.files, storeImage);
    }

    var check = document.createElement("i");
    check.classList.add("fas");
    check.classList.add("fa-check-circle");
    this.parentElement.appendChild(check);
    filesUploaded++;

    if(filesUploaded == 2)
    {
        console.log("locallenght", sessionStorage.length);
        for (i=0;i<sessionStorage.length;i++) 
        {
            var key = sessionStorage.key(i);
            console.log("localkey:", sessionStorage.key(i));
            if(key != null) 
            {
                var value = sessionStorage.getItem(key); 
                console.log("value", value);
            }
        }

        scrollButton.classList.toggle("hidden");

        var viewSection = document.createElement("section");
        viewSection.setAttribute("id", "view");

        var container = document.createElement("div");
        container.className = "base-container container-fluid view";

        var leftImageContainer = document.createElement("div");
        leftImageContainer.className = "container container-lg panel";
        var leftlocalstorage = localStorage.getItem(localStorage.key(0));
        // console.log(localStorage.key(0));
        // console.log("leftstorage", leftlocalstorage);

        var leftimg = document.createElement("img");
        leftimg.style.width = '100%'
        leftimg.style.height = 'auto';
        leftimg.src = "data:image/png;base64," + leftlocalstorage;

        leftImageContainer.appendChild(leftimg);

        var middleContainer = document.createElement("div");
        middleContainer.className = "container container-lg between";

        var vsText = document.createElement("h1");
        vsText.classList.add("display-4");
        vsText.innerHTML = "vs";

        middleContainer.appendChild(vsText);

        var rightImageContainer = document.createElement("div");
        rightImageContainer.className = "container container-lg panel";
        var rightlocalstorage = localStorage.getItem(localStorage.key(1));
        // console.log(localStorage.key(1));
        // console.log("rightstorage", rightlocalstorage);

        var rightimg = document.createElement("img");
        rightimg.style.width = '100%'
        rightimg.style.height = 'auto';
        rightimg.src = "data:image/png;base64," + rightlocalstorage;

        rightImageContainer.appendChild(rightimg);

        container.appendChild(leftImageContainer);
        container.appendChild(middleContainer);
        container.appendChild(rightImageContainer);
        viewSection.appendChild(container);
        body.appendChild(viewSection);
    }
}


function storeImage (image)
{
    // Make sure `file.name` matches our extensions criteria
    if (!/\.(jpe?g|png|gif)$/i.test(image.name)) {
        return alert(image.name + " is not an image");
    } // else...

    var reader = new FileReader();

    reader.addEventListener("load", function() {
        var thisImage = new Image();
        thisImage.title = image.name;
        thisImage.src = this.result;

        imgData = getBase64Image(thisImage);
        console.log("this is the imgData", imgData);

        sessionStorage.setItem(thisImage.title, thisImage);
    });

    reader.readAsDataURL(image);
}

function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

function getElementY(query) {
    return window.pageYOffset + document.querySelector(query).getBoundingClientRect().top;
}

function doScrolling(element, duration) {
    var startingY = window.pageYOffset;
    var elementY = getElementY(element);
  // If element is close to page's bottom then window will scroll only to some position above the element.
    var targetY = document.body.scrollHeight - elementY < window.innerHeight ? document.body.scrollHeight - window.innerHeight : elementY;
    var diff = targetY - startingY;
    // Easing function: easeInOutCubic
    // From: https://gist.github.com/gre/1650294
    var easing = function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 };
    var start;

    if (!diff) return;

    // Bootstrap our animation - it will get called right before next frame shall be rendered.
    window.requestAnimationFrame(function step(timestamp) {
            if (!start) start = timestamp
            // Elapsed miliseconds since start of scrolling.
            var time = timestamp - start
                // Get percent of completion in range [0, 1].
            var percent = Math.min(time / duration, 1)
            // Apply the easing.
            // It can cause bad-looking slow frames in browser performance tool, so be careful.
            percent = easing(percent)

            window.scrollTo(0, startingY + diff * percent)

                // Proceed with animation as long as we wanted it to.
            if (time < duration) {
                window.requestAnimationFrame(step)
            }
        }
    )
}

// Apply event handlers. Example of firing the scrolling mechanism.
scrollButton.addEventListener('click', doScrolling.bind(null, '#view', 800));

// Or simply:
//doScrolling('#mytarget', 1000)

function putInCanvas()
{

}

function createView()
{

}

init();