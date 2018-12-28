var animal = {
    eats: true
  };
  var rabbit = {
    jumps: true
  };
  
  rabbit.__proto__ = animal; // we can find both properties in rabbit now:


let promise = new Promise(function(resolve, reject) {
    if(this.rabbit.eats && this.rabbit.jumps){
        resolve("True");
    }
    else{
        reject("False")
    }
  });
  
  // resolve runs the first function in .then
  promise.then(
    result => IsPromise(result), // shows "done!" after 1 second
    error => IsPromise(error) // doesn't run
  );

  var IsPromise = function(status){
    alert(status);
  }