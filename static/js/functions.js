console.log('loading script in header ...')

Array.prototype.sample = function(){
  return this[Math.floor(Math.random()*this.length)];
}

var myArray = ['HC_Swim_Club_Feature_Pic.jpg', 'NationalSquad.jpg', 'Jack_Evans.jpg', 'IMG_8016_1.jpg'];

makepick = function(){
  return myArray.sample()
}

// style="background:url('images/bg/NationalSquad.jpg') no-repeat center; background-size: cover"
getbackground = function(){

  img = makepick()
// var elem = document.createElement("img");
//    elem.setAttribute("src", `/images/bg/${img}`);
//          elem.setAttribute("height", "30");
//       elem.setAttribute("width", "30");

  el = document.getElementById("bgimg")
  el.setAttribute("src", `/images/bg/${img}`);
  // el.style["background-image"]=`url(/images/bg/${img})`;
  // el.style["background-repeat"] = "no-repeat"
  // el.style["background-center"] = "center"
  el.style["height"] = "240px"
  // el.style["background-size"] = "cover"
  // el.style["z-index"] = -1

}

// var str = "bar";
// document.styleSheets[0].addRule('p.special:before','content: "'+str+'";');


// var elem = document.createElement("img");
//       elem.setAttribute("src", "http://img.zohostatic.com/discussions/v1/images/defaultPhoto.png");
//       elem.setAttribute("height", "30");
//       elem.setAttribute("width", "30");
//       document.getElementById("maindiv").appendChild(elem);
