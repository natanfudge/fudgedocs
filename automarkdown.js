console.log("setting md content")
let contentDiv = document.getElementById("content")
let fileName = contentDiv.title
let fr = new FileReader();
fr.onload = function () {
console.log(fr.result);
   contentDiv.innerHTML = fr.result;
}

fr.readAsText(new File([""],fileName + ".md"))