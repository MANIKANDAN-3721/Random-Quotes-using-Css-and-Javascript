const quoteText=document.querySelector(".quote");
authorName=document.querySelector(".author .name");
quoteBtn=document.querySelector("button");

soundBtn=document.querySelector(".sound")
copyBtn=document.querySelector(".copy")
twitterBtn=document.querySelector(".twitter")


quoteBtn.addEventListener("mouseover",randomQuote);

function randomQuote(){

    quoteBtn.classList.add("loading")
    quoteBtn.innerText="Loading Wait..."

    fetch("https://api.quotable.io/random").then(res=>res.json()).then(result=>{
        console.log(result);
        quoteText.innerText=result.content;
        authorName.innerText=result.author;

       

        quoteBtn.innerText="Next Quotes";
        quoteBtn.classList.remove("loading")
    })
    
     console.log("Clicked");

}
//speak methods
soundBtn.addEventListener("click",()=>{
    //speech tag
    let utterance=new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);


    speechSynthesis.speak(utterance); //speak methods
})

//cope past methods
copyBtn.addEventListener("click",()=>{

    navigator.clipboard.writeText(quoteText.innerText);

    const copyAlert = document.createElement("h5");
    copyAlert.innerText = `copied`;
    document.body.appendChild(copyAlert);
    setTimeout(() => {
      document.body.removeChild(copyAlert);
    }, 1000);
    

})

//share any social media
twitterBtn.addEventListener("click",()=>{

    let tweetUrl=`http://twitter.com/intent/tweet?url=${quoteText.innerText}`;

    window.open(tweetUrl, "_blank");





})

