const url = "https://programming-memes-images.p.rapidapi.com/v1/memes";
const optionsTwo = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f64ba3f85amshea55c2c52501191p1a7970jsn5046b8971a18",
    "X-RapidAPI-Host": "programming-memes-images.p.rapidapi.com",
  },
};

let memeImageMeme = document.getElementById("imageMeme");

function getMemes() {
    fetch(url, optionsTwo)
  .then((resp) => {
    console.log("hellooooo", resp.body);
    return resp.body;
  })
  .then((rb) => {
    const reader = rb.getReader();
    return new ReadableStream({
      start(controller) {
        // The following function handles each data chunk
        function push() {
          // "done" is a Boolean and value a "Uint8Array"
          reader.read().then(({ done, value }) => {
            // If there is no more data to read
            if (done) {
              console.log("done", done);
              controller.close();
              return;
            }
            // Get the data and send it to the browser via the controller
            controller.enqueue(value);
            // Check chunks by logging to the console
            console.log(done, value);
            push();
          });
        }

        push();
      },
    });
  })



  .then((stream) =>
    // Respond with our stream
    new Response(stream, { headers: { "Content-Type": "text/html" } }).json()
  )
  .then((result) => {
    // Do things with result
    console.log(result);
    // return result;
    for(let i = 0; i < result.length; i++) {
        let cur = result[i];
        let memeImg = document.createElement("img");
        memeImg.setAttribute("src", cur.image);
        memeImageMeme.appendChild(memeImg);
    }
  });



}

getMemes();