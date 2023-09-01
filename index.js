const allvalue=`<div class="container-fluid">
        <div class="row" style="background-color: green;">
            <div class="col-md-12">
                <img id="sidebar-button" style="cursor: pointer;" width="50" height="50"
                    src="https://img.icons8.com/ios/50/menu--v7.png" alt="menu--v7" />
            </div>
        </div>
        <div class="row position-fixed w-100 h-100">
            <div class="col-md-4 " id="left-sidebar">
                <div class="card h-100">
                    <div class="card-header">
                        <ul class="nav nav-tabs card-header-tabs" role="tablist">
                            <li class="nav-item"><a id="item-1-1-tab" class="nav-link active" role="tab"
                                    aria-controls="item-1-1" aria-selected="true" href="#item-1-1"
                                    data-bs-toggle="tab">Blocks</a></li>
                            <li class="nav-item"><a id="item-1-2-tab" class="nav-link" role="tab"
                                    aria-controls="item-1-2" aria-selected="false" href="#item-1-2"
                                    data-bs-toggle="tab">Image/Video</a></li>
                            <li class="nav-item"><a id="item-1-3-tab" class="nav-link" role="tab"
                                    aria-controls="item-1-3" aria-selected="false" href="#item-1-3"
                                    data-bs-toggle="tab">Others</a></li>
                        </ul>
                    </div>
                    <div class="card-body overflow-auto">
                        <div id="nav-tabContent" class="tab-content">
                            <div id="item-1-1" class="tab-pane fade show active" role="tabpanel"
                                aria-labelledby="item-1-1-tab">
                                <h4>First Item Title</h4>
                                <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac
                                    facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.
                                </p><button class="btn btn-primary" type="button">Button</button>
                            </div>
                            <div id="item-1-2" class="tab-pane fade" role="tabpanel" aria-labelledby="item-1-2-tab">
                                <div class="input-group mb-3">
                                    <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload">
                                    <button class="btn btn-primary" type="button" id="inputGroupFileAddon04">Upload Img</button>
                                  </div>
                                <div class="container-fluid">
                                    <!-- image upload part -->
                                    <h4>Image Upload</h4>
                                    <div class="row border border-1 rounded p-3">
                                        <div class="col-md-4 mt-2">
                                            <img src="https://picsum.photos/id/237/200/300" alt="" width="50"
                                                height="50" draggable="true" class="draggableItem" data-manu="manu">
                                        </div>
                                        <div class="col-md-4 mt-2">
                                            <img src="https://picsum.photos/id/237/200/300" alt="" width="50"
                                                height="50" draggable="true" class="draggableItem" data-manu="manu">
                                        </div>
                                        <div class="col-md-4 mt-2">
                                            <img src="https://picsum.photos/id/237/200/300" alt="" width="50"
                                                height="50" draggable="true" class="draggableItem" data-manu="manu">
                                        </div>
                                        
                                    </div>
                                    
                                    <!-- video upload part -->
                                    <h4 class="mt-2">Video Upload</h4>
                                    <div class="row border border-1 rounded p-3">
                                        <div class="col-md-4 mt-2">
                                            <img src="https://picsum.photos/id/237/200/300" alt="" width="50"
                                                height="50" draggable="true" class="draggableItem" data-manu="manu">
                                        </div>
                                        <div class="col-md-4 mt-2">
                                            <img src="https://picsum.photos/id/237/200/300" alt="" width="50"
                                                height="50" draggable="true" class="draggableItem" data-manu="manu">
                                        </div>
                                        <div class="col-md-4 mt-2">
                                            <img src="https://picsum.photos/id/237/200/300" alt="" width="50"
                                                height="50" draggable="true" class="draggableItem" data-manu="manu">
                                        </div>
                                        
                                    </div>
                                    <!-- video upload part -->
                                    <h4 class="mt-2">Video Upload</h4>
                                    <div class="row border border-1 rounded p-3">
                                        <div class="col-md-4 mt-2">
                                            <img src="https://picsum.photos/id/237/200/300" alt="" width="50"
                                                height="50" draggable="true" class="draggableItem" data-manu="manu">
                                        </div>
                                        <div class="col-md-4 mt-2">
                                            <img src="https://picsum.photos/id/237/200/300" alt="" width="50"
                                                height="50" draggable="true" class="draggableItem" data-manu="manu">
                                        </div>
                                        <div class="col-md-4 mt-2">
                                            <img src="https://picsum.photos/id/237/200/300" alt="" width="50"
                                                height="50" draggable="true" class="draggableItem" data-manu="manu">
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div id="item-1-3" class="tab-pane fade" role="tabpanel" aria-labelledby="item-1-3-tab">
                                <h4>Third Item Title</h4>
                                <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac
                                    facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.
                                </p><button class="btn btn-primary" type="button">Button</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- second sidebar -->
            <div class="col-md-8" id="right-sidebar">

                <!-- main container start here -->

                <div class="container-fluid">
                    <div class="row overflow-auto">

                        <div class="col-md-6 bg-white border border-1 ">
                            <div class="container-fluid">
                                <div class="row">
                                    <div
                                        class="col-md-12 border border-1 rounded mt-2 p-3 d-flex justify-content-between">
                                        <h4>Code start here</h4>
                                        <button class="btn btn-primary" id="upload">Upload code</button>
                                    </div>
                                </div>
                                <div class="row">
                                    <textarea id="codeInput" rows="25" cols="10"
                                        style="border: none;outline: none;"></textarea>
                                </div>
                            </div>
                        </div>

                        <!-- output frame -->
                        <div class="col-md-6">
                            <div class="container-fluid">
                                <div class="row">
                                    <div
                                        class="col-md-12 bg-danger border border-1 rounded mt-2 p-3 d-flex justify-content-center">
                                        <h4>Output Code </h4>
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <iframe id="outputFrame"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <audio id="clickSound" preload="auto" class="visually-hidden">
        <source src="./sidebar_sound.wav" type="audio/mpeg">
        <!-- Add more source elements for different audio formats if needed -->
    </audio>`;
    
    document.body.innerHTML=allvalue;
    const draggableItems = document.querySelectorAll('.draggableItem');
    const droppableContainer = document.getElementById('codeInput');

    draggableItems.forEach(item => {
        item.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', item.src);
            e.dataTransfer.setData('text/manu', item.getAttribute("data-manu"));
            console.log("drag start");
        });
    });

    droppableContainer.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    droppableContainer.addEventListener('drop', (e) => {
        e.preventDefault();
        const droppedData = e.dataTransfer.getData('text/plain');
        const droppedData1 = e.dataTransfer.getData('text/manu');
        if (droppedData1 === 'manu') {
            const currentText = droppableContainer.value;
            const newImage = `<img src="${droppedData}" alt="image name"/>`
            droppableContainer.value = `${currentText}\n${newImage}`
        } else {
            alert("textarea is not contains self images");
        }
    });


    const htmlCode = document.getElementById("codeInput");
    const outputFrame = document.getElementById('outputFrame');
    htmlCode.addEventListener("input", () => {
        var html = `<h4>Code start here</h4>`;
        const code = htmlCode.value;
        outputFrame.srcdoc = code;

    });


    let splitor1=document.getElementById("left-sidebar");
let splitor2=document.getElementById("right-sidebar");
let sidebarButton=document.getElementById("sidebar-button");
const clickSound = document.getElementById("clickSound");
sidebarButton.addEventListener("click",(event)=>{
    event.stopImmediatePropagation();
    clickSound.currentTime = 0; // Rewind the audio to the beginning (if it's already playing)
    clickSound.play();

    if (window.getComputedStyle(splitor1).display !== 'none') {
        splitor1.style.display = 'none';
        splitor2.classList.remove("col-md-8");
        splitor2.classList.add("col-md-12");
    } else {
        splitor1.style.display = 'block'; // Or whatever the initial display value should be
        splitor2.classList.remove("col-md-12");
        splitor2.classList.add("col-md-8");
    }
});