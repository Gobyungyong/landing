window.addEventListener("scroll", 

function() {
    console.log("오오오오오오오오");
    console.log(window.scrollY);
    if(this.window.scrollY > 100) {
        document.querySelector(".navbar")
        .style = "background-color:black; color:white";
    } else {
        document.querySelector(".navbar")
        .style = "background-color:white; color:black";
    };

    let page_height = this.document.querySelector('html').scrollHeight;

    let scroll_number = this.document.querySelector('html').scrollTop;

    let contents_height = this.document.querySelector('html').clientHeight;

    if(scroll_number + contents_height > page_height-15){
        this.alert("으악");
    };
    
}
)