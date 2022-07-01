var promise = new Promise(function(resolve, reject) {
    const x = "Aman";
    const y = "Aman"
    if(x === y) {
        resolve();
    } else {
        reject();
    }
    });
    
    promise.
        then(function () {
            console.log('Success, You are Aman');
        }).
        then(function(){
            console.log("Success, This is second statement");
        }).
        catch(function () {
            console.log('Some error has occurred');
        });

        
    