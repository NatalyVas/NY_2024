 let myIframe = document.createElement("iframe");

 myIframe.src = "https://editor.p5js.org/nvasilyeva.nv/full/FresIn-__";
 myIframe.id = "frame_id";
 
 document.body.append(myIframe);

 myIframe.onload = () => {

 	 console.log(100);
 	 //console.log(document.getElementById('frame_id').contentWindow.document.documentElement.outerHTML);
 	 //console.log(document.getElementById('frame_id').contentWindow.document);
 	 // let nav = window.frames[0].document.getElementsByTagName('nav');
 	 // console.log(nav);

 	 //console.log(window.document.getElementsByTagName("iframe")[0].contentDocument);
 	 //console.log(document.getElementById('iframe_id').contentWindow.document.body.innerHTML);

	 //console.log(myIframe);

 }

