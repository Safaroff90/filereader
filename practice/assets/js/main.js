
function showFile(input) {
    let file = input.files[0];
  
    alert(`File name: ${file.name}`); 
    alert(`Last modified: ${file.lastModified}`);
  }

// function readFile(input) {
//     let file = input.files[0];
  
//     let reader = new FileReader();
  
//     reader.readAsText(file);
  
//     reader.onload = function() {
//       console.log(reader.result);
//     };
  
//     reader.onerror = function() {
//       console.log(reader.error);
//     };
// }  



