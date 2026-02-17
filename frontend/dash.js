let documents = [];
function login(){
const username=document.getElementById("username").value;
const password=document.getElementById("password").value;

if(username==="admin" && password==="123"){
window.location.href = "dashboard.html";
}else{
document.getElementById("error").innerText="Invalid Credentials";
}
}
function uploadDocument(){
const title = document.getElementById("docTitle").value;
const tags = document.getElementById("docTags").value;
const file = document.getElementById("docFile").files[0];

if(!title || !file){
alert("Please enter title and select file");
return;
}

const newDoc = {
title: title,
tags: tags,
fileName: file.name
};

documents.push(newDoc);

renderDocuments();
addActivity("Uploaded " + file.name);

document.getElementById("docTitle").value="";
document.getElementById("docTags").value="";
document.getElementById("docFile").value="";
}

function renderDocuments(){
const grid = document.getElementById("documentGrid");
grid.innerHTML="";

documents.forEach(doc=>{
const card = document.createElement("div");
card.className="doc-card";
card.innerHTML=`
<div class="doc-title">${doc.title}</div>
<div class="doc-tags">${doc.tags}</div>
`;
grid.appendChild(card);
});

document.getElementById("docCount").innerText = documents.length;
}

function addActivity(text){
const activityList = document.getElementById("activityList");
const item = document.createElement("div");
item.className="activity-item";
item.innerText = text;
activityList.prepend(item);
}

function logout(){
alert("Logged out");
window.location.href="index.html";
}
