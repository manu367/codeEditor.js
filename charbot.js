var chatbotHtml=`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .container-fluid {
            padding: 0;
            display: grid;
            grid-template-rows: 10vh 80vh 10vh;
            overflow: hidden;
        }

        .message-wala {
            overflow: auto;
        }

        .sender::before {
            content: url('https://img.icons8.com/metro/26/forward-arrow.png');
            margin-right: 1rem;
        }

        .sender {
            font-size: larger;
            background-color: whitesmoke;
        }

        .reciver {
            text-align: end;
            background-color: rgba(0, 0, 255, 0.559);
            color: white;
            font-size: larger;
        }

        .write-start {
            display: flex;
        }

        .write-start div {
            border-radius: 50%;
            width: 10px;
            margin: 5px;
            aspect-ratio: 1/1;
            background-color: black;
            animation-duration: 1.5s;
            animation-timing-function: linear;
            animation-direction: alternate-reverse;
            animation-iteration-count: infinite;
        }

        .circle-1 {
            animation-name: bounce-1;
        }

        .circle-2 {
            animation-name: bounce-2;
        }

        .circle-3 {
            animation-name: bounce-3;
        }

        .circle-4 {
            animation-name: bounce-4;
        }

        .circle-5 {
            animation-name: bounce-5;
        }

        @keyframes bounce-1 {
            0%{
                transform: translateY(-5px);
            }
            50% {
                transform: translateY(10px);
            }
            100% {
                transform: translateY(5px);
            }
        }

        @keyframes bounce-2 {
            0% {
                transform: translateY(5px);
            }
            50% {
                transform: translateY(10px);
            }
            100% {
                transform: translateY(-5px);
            }
        }

        @keyframes bounce-3 {
            0%{
                transform: translateY(-5px);
            }
            50% {
                transform: translateY(10px);
            }
            100% {
                transform: translateY(5px);
            }
        }

        @keyframes bounce-4 {
            0% {
                transform: translateY(5px);
            }
            50% {
                transform: translateY(10px);
            }
            100% {
                transform: translateY(-5px);
            }
        }

        @keyframes bounce-5 {
            0%{
                transform: translateY(-5px);
            }
            50% {
                transform: translateY(10px);
            }
            100% {
                transform: translateY(5px);
            }
        }

    </style>
</head>

<body>
    <div class="container-fluid">
        <div class="bg-success text-white text-center rounded border p-3">Chat Bot</div>
        <div class="message-wala rounded border m-2 p-2 position-relative" id="messagebox">
            <div class="r-1 mt-3 mb-1">
                <span class="sender rounded border p-2">mene message send kiya h</span>
            </div>

            <div class="s-1 mt-3 d-flex flex-row justify-content-end">
                <span class="reciver rounded border p-2">muje message mile gya h</span>
            </div>

            <div class="write-start position-absolute bottom-0 mb-3 d-none" id="write_start">
                <div class="circle-1"></div>
                <div class="circle-2"></div>
                <div class="circle-3"></div>
                <div class="circle-4"></div>
                <div class="circle-5"></div>
            </div>
        </div>
        <div class="p-1 m-2">
            <div class="input-group">
                <input type="text" class="form-control" id="mess" oninput="handleInput(this)" onkeyup="handleKeyUp(this)">
                <button class="btn btn-danger" onclick="sendmessage(this)">
                    <img width="30" height="30" src="https://img.icons8.com/ios/50/sent--v1.png" alt="sent--v1" />
                </button>
            </div>
        </div>
    </div>
</body>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"></script>

</html>`;


function addAllthinginElement(element){

    var yes=element.getAttribute("data-addChatbot");

    if(yes==='yes'){

        element.innerHTML=element.innerHTML+chatbotHtml;

    }

    var mess = document.getElementById("mess");
    mess.addEventListener("keydown", (event) => {
        if (event.keyCode === 13) {
            //alert("Enter key was pressed!");
            sendmessage();
        }
    });

}


    function sendmessage() {
        var value = mess.value;  //get input box value here
        if (value === '') {
            console.log("not added successfully")
        } else {    
            addmesagesin_messagebox(mess.value);
            mess.value = '';
            
        }
    }


    function addmesagesin_messagebox(value){
        var usermessage=` <div class="s-1 mt-3 d-flex flex-row justify-content-end">
            <span class="reciver rounded border p-2">${value}</span>
        </div>`;
        var messagebox=document.getElementById("messagebox");
        messagebox.innerHTML=messagebox.innerHTML+usermessage;
    }


    function handleInput(input) {
        const writeStartDiv = document.getElementById("write_start");
        if (input.value.trim() !== '') {
            writeStartDiv.classList.remove("d-none")
        } else {
            writeStartDiv.classList.add('d-none');
        }
    }

    function handleKeyUp(input) {
        const writeStartDiv = document.getElementById('write_start');
        setTimeout(()=>{
            writeStartDiv.classList.add('d-none');
        },2800);
    }

