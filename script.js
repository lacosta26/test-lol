function testButton(){
    let targetButton = document.getElementById("test_button");
    let leftMargin = (Math.random * 1000) -500;
    let topMargin = (Math.random * 1000) -500;
    targetButton.style.marginLeft = leftMargin;
    targetButton.style.marginTop = topMargin;
    targetButton.style.color = "Red";
    targetButton.style.backgroundColor = "Black";
    targetButton.style.scale = 4;
}