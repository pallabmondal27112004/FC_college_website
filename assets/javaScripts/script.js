let element = document.querySelector("#home");
function clickDrower(){
    element.style.left = "0px"
}
function cancelDrower(){
    element.style.left = "-40%"

}
let head1= document.getElementById("head1");
let head2= document.getElementById("head2");
let head3= document.getElementById("head3");
let head4= document.getElementById("head4");
let h11= document.getElementById("h11");
let h12= document.getElementById("h12");
let h13= document.getElementById("h13");
let h14= document.getElementById("h14");
function contectCall1(){
     head2.style.display = "none";
    head1.style.display = "block";
    head4.style.display = "none";

    head3.style.display = "none";
    h11.classList.add("active");
    h12.classList.remove("active");
    h13.classList.remove("active");
    h12.classList.remove("active");


}
function contectCall2(){
    head1.style.display = "none";
    head3.style.display = "none";
    head2.style.display = "block";
    head4.style.display = "none";

    h12.classList.add("active");
    h11.classList.remove("active");
    h13.classList.remove("active");
    h14.classList.remove("active");



}
function contectCall3(){
    head1.style.display = "none";
    head2.style.display = "none";
    head3.style.display = "block";
    h13.classList.add("active");
    h11.classList.remove("active");
    h12.classList.remove("active");

    head4.style.display = "none";
    h12.classList.remove("active");



}
function contectCall4(){
    head1.style.display = "none";
    head2.style.display = "none";
    head3.style.display = "none";
    head4.style.display = "block";

    h13.classList.remove("active");
    h14.classList.add("active");
    h11.classList.remove("active");
    h12.classList.remove("active");



}