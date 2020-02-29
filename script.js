function init() {
    console.log("Upload Initialised");

    var fileSelect = document.getElementById('file-upload');
    var fileDrag = document.getElementById('file-drag');

    fileSelect.addEventListener('change', fileSelectHandler, false);

    // Is XHR2 available?
    var xhr = new XMLHttpRequest();
    if (xhr.upload) {
        // File Drop
        fileDrag.addEventListener('dragover', fileDragHover, false);
        fileDrag.addEventListener('dragleave', fileDragHover, false);
        fileDrag.addEventListener('drop', fileSelectHandler, false);
    }
}

function fileDragHover(e) {
    var fileDrag = document.getElementById('file-drag');

    e.stopPropagation();
    e.preventDefault();

    fileDrag.className = (e.type === 'dragover' ? 'hover' : 'modal-body file-upload');
}

function fileSelectHandler(e) {
    // Fetch FileList object
    var files = e.target.files || e.dataTransfer.files;

    // Cancel event and hover styling
    fileDragHover(e);

    // Process all File objects
    for (var i = 0, f; f = files[i]; i++) {
        previewFile(f);
        uploadFile(f);
    }
}

function previewFile(file) {
    console.log(file.name);

    // var fileType = file.type;
    // console.log(fileType);
    var imageName = file.name;

    if (!/\.(jpe?g|png|gif)$/i.test(imageName)) {
      return alert(imageName + " is not an image");
    }

    document.getElementById('start').classList.add("hidden");
    // Thumbnail Preview
    var reader = new FileReader();

    reader.addEventListener("load", function() {
        // var div = document.createElement('div');
        var image = new Image();
        image.title  = file.name;
        image.src    = this.result;
        image.alt    = "Responsive image";
        image.classList.add("img-fluid");
        // div.setAttribute("id", "preview");
        // div.classList.add("col align-self-center");
        document.getElementById('preview').appendChild(image);
    });

    reader.readAsDataURL(file);
}

function uploadFile(file) {
    var xhr = new XMLHttpRequest(),
    fileInput = document.getElementById('class-roster-file'),

    fileSizeLimit = 1024; // In MB
    if (xhr.upload) {
        // Check if file is less than x MB
        if (file.size <= fileSizeLimit * 1024 * 1024) {

            // File received / failed
            xhr.onreadystatechange = function(e) {
                if (xhr.readyState == 4) {
                // Everything is good!

                // progress.className = (xhr.status == 200 ? "success" : "failure");
                // document.location.reload(true);
                }
            };

            // Start upload
            xhr.open('POST', document.getElementById('file-upload-form').action, true);
            xhr.setRequestHeader('X-File-Name', file.name);
            xhr.setRequestHeader('X-File-Size', file.size);
            xhr.setRequestHeader('Content-Type', 'multipart/form-data');
            xhr.send(file);
        } else {
            output('Please upload a smaller file (< ' + fileSizeLimit + ' MB).');
        }
    }
}

// Check for the various File API support.
if (window.File && window.FileList && window.FileReader) {
    Init();
} else {
    document.getElementById('file-drag').style.display = 'none';
}

Init();
previewFile();