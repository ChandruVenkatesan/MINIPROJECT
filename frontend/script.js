let documents=[];

function login(){
const username=document.getElementById("username").value;
const password=document.getElementById("password").value;

if(username==="admin" && password==="123"){
document.getElementById("loginPage").style.display="none";
document.getElementById("dashboard").style.display="flex";
}else{
document.getElementById("error").innerText="Invalid Credentials";
}
}

function logout(){
document.getElementById("dashboard1").style.display="none";
document.getElementById("loginPage").style.display="flex";
}

function uploadDocument(){
const title=document.getElementById("docTitle").value;
const tags=document.getElementById("docTags").value;
const file=document.getElementById("docFile").files[0];

if(!title || !file){
alert("Enter title and choose file");
return;
}

const newDoc={
title:title,
tags:tags,
fileName:file.name
};

documents.push(newDoc);

document.getElementById("docTitle").value="";
document.getElementById("docTags").value="";
document.getElementById("docFile").value="";

renderDocuments(documents);
}

function renderDocuments(data){
const grid=document.getElementById("resultGrid");
grid.innerHTML="";

data.forEach(doc=>{
const card=document.createElement("div");
card.className="document-card";
card.innerHTML=`
<div class="document-title">${doc.title}</div>
<div class="document-tags">${doc.tags}</div>
<div class="document-tags">${doc.fileName}</div>
`;
grid.appendChild(card);
});

document.getElementById("docCount").innerText=data.length;
}

function searchDocument(){
const query=document.getElementById("searchBox").value.toLowerCase();

const filtered=documents.filter(doc=>
doc.title.toLowerCase().includes(query) ||
doc.tags.toLowerCase().includes(query)
);

renderDocuments(filtered);
}
