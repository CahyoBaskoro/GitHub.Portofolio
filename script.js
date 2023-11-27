var audio = new Audio('assets/sentmessage.mp3');
var contactString = "<div class='social'> <a target='_blank' href='tel:+6287864801363'> <div class='socialItem' id='call'><img class='socialItemI' src='images/phone.svg'/><label class='number'>+6287864801363</label></div> </a> <a href='mailto:milanocahyo@gmail.com'> <div class='socialItem'><img class='socialItemI' src='images/gmail.svg' alt=''></div> </a> <a target='_blank' href='https://github.com/CahyoBaskoro'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a> <a target='_blank' href='https://wa.me/+6287864801363'> <div class='socialItem'><img class='socialItemI' src='images/whatsapp.svg' alt=''></div> </a> <a target='_blank' href='https://t.me/ChyoBask'> <div class='socialItem'><img class='socialItemI' src='images/telegram.svg' alt=''></div> </a> <a target='_blank' href='https://instagram.com/cxbask'> <div class='socialItem'><img class='socialItemI' src='images/instagram.svg' alt=''> </div> </a> <a href='https://www.linkedin.com/in/cahyo-baskoro-32b0b4107/' target='_blank' rel='noopener noreferrer'> <div class='socialItem'><img class='socialItemI' src='images/linkedin.svg' alt=''></div> </a> </div>";
var resumeString = "<img src='images/resumeThumbnail.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>Cahyo Baskoro Resume.pdf</label></div><a href='assets/Cahyo Baskoro Resume.pdf' download='Cahyo_Baskoro_Resume.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";
var addressString = "<iframe src='https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d247.8659259236877!2d106.85165761607689!3d-6.28280897391536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sjl.kober!5e0!3m2!1sid!2ssg!4v1700708512078!5m2!1sid!2ssg' class='map'></iframe></div><label class='add'><address>Jl.Kober No 116 RT 01 RW02<br>Balekambang<br>Kramat Jati<br>Jakarta Timur<br>INDONESIA 13530</address>";
function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Hello there ,<br><br>My name is <span class='bold'><a class='alink'>Cahyo Baskoro</a>.</span><br>I am a graduate Diploma III of Gunadarma University who is highly motivated with a growth mindset, good attitude,and high passion for learning.I am looking for new challenges and opportunities to be able to contribute with great enthusiasm. I am a fun-loving person,adaptable, and can work in a team or individually and I am currently still working at <span class='bold'>PT Asuransi Chubb Syariah Indonesia </span><br><br>I am eager to hear about potential career opportunities, so I would be pleased to chat about job openings in the IT Infrastructure Specialist Or Data Scientist.<br><br>Send <span class='bold'>'help'</span> to know more about me.<br>");
            }, 2000);
            break;
        case "help":
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'address'</span> - to get my address<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br><span class='bold'>'about'</span> - to know about this site</span>");
            break;
        case "resume":
            sendTextMessage(resumeString);
            break;
        case "skills":
            sendTextMessage("<span class='sk'>Softskill :<br><span class='bold'>Diligent<br>Helpfull<br>having high self-motivation<br>bold<br>hard worker<br>cooperate<br>nevergive up<br>honestly<br>able tocommunicate with other people<br>working with team<br>interestedto learn something new<br>have responsible for task and like a challenge<br></span><br><br>Hardskill :<span class='bold'><br>Microsoft Office (Excel, Power Point, Word, office,Outlook 365, Visio,Teams)<br>Active Directory<br>Windows Server ( 2006,2008, 2012,2016 )<br>Vmware Esxi<br>Network ( Cisco, Fortinet, ( Mikrotik - winbox64 , oracle VM Virtual box )<br>Web Administrator<br>Photoshop<br>Corel Draw<br>Php & Mysql.</span>");
            break;

        case "education":
            sendTextMessage("I graduated from Gunadarma University Diploma III in Informatics Management with a GPA of 2.62 out of 4.00.<br>Passing Year : 2011");
            break;

        case "address":
            sendTextMessage(addressString);
            break;
        case "clear":
            clearChat();
            break;
        case "about":
            sendTextMessage("This portfolio is built using HTML, CSS and JavaScript<br><br>Designed by <a class='alink' target='_blank' href='https://www.instagram.com/cxbask/'><span class='bold'>Cahyo Baskoro</a></span>");
            break;
        case "contact":
            sendTextMessage(contactString);
            break;
        case "projects":
            sendTextMessage("For now I am still improving my project portfolio, maybe you can check my Github account.<br><br><div class='social'><a target='_blank' href='https://github.com/CahyoBaskoro'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a></div>");
            break;
        case "new":
            sendTextMessage(addressString);
            break;
        default:
            setTimeout(() => {
                sendTextMessage("Hey, <br>looks like you spelled it wrong !!!<br><br>Please type it <span class='bold'>'help'</span> to know more about usage.");
            }, 2000);
            break;
    }



}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}
