
import { DirectoryNode } from "./classes.js"

window.addEventListener("DOMContentLoaded", async () => {

let loadingOverlay = document.querySelector(".loading-modal");
//upon page load fetch contents of root dir
try {
    let response = await fetch("/api/path")

    if(response.ok) {
        //hide loading div
        loadingOverlay.classList.add("loading-modal--hidden");

        let filesArray = await response.json();

        //create treenode w/ the data
        for(let fileObj of filesArray) {
            //destructure each fileobj
            let {name, type, lastModifiedTime} = fileObj;
            //console.log(fileObj)
            let node =  new DirectoryNode(name, type, lastModifiedTime);
            console.log(node)
            //add the node to DOM as an li
            await addli(node);


        }

    }

} catch (error) {
    console.log(error)
}

async function addli(node) {

    let img = document.createElement("img")
    img.setAttribute("src", "icons/default_folder.svg")
    let nodeli = document.createElement("li");
    nodeli.setAttribute("class", "directory-tree__list-item");
    nodeli.innerHTML =
        node.name;
            //add to ul
    document.querySelector(".directory-tree__list").appendChild(nodeli);
    document.querySelector(".directory-tree__list").appendChild(img);
}


















//////end dom content loaded event listener
})
