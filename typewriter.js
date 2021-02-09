const sentence = "hello there from lighthouse labs";


for (let i = 0; i < sentence.length; i++) {
  
  setTimeout(function() {
    process.stdout.write(sentence[i]);
    if (i === sentence.length - 1) {
      console.log();
    }
  }, 50 * i);

}


