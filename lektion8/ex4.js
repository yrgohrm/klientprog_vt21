let plist = Array.from(document.getElementsByTagName('p'))
let counter = 0
for(const elem of plist){
  if(elem.textContent.trim().length !== 0){
    counter++
  }
}
console.log(counter)


let ans = plist.filter(elem => elem.textContent.trim().length > 0).length
console.log("filter", ans)
