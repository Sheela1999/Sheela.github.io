let username = sessionStorage.getItem("username")
                console.log(username)
                let userNameMessage = document.getElementById("userNameMessage")
                console.log(userNameMessage)
                userNameMessage.innerHTML = username

                // function userMessage(){
                //     let username = sessionStorage.getItem("username")
                //     console.log(username)
                //     let userNameMessage = document.getElementById("userNameMessage")
                //     console.log(userNameMessage)
                //     userNameMessage.innerHTML = username
                // } 
                //bcoz we can write in function but we want it in direct so dont neet write in function

                function displayDate(){
                 let date = new Date()
                 console.log(date)
                 console.log(date.getFullYear())
// get in web page or html page from console
                 let dateMessage = document.getElementById("dateMessage")
                 dateMessage.innerHTML = date
                }

                let a = 10
                let b = 10

                if(a==b){
                    console.log("==")
                }
                if(a===b){
                    console.log("===")
                }

                let c = '10'
                if(a==c){
                    console.log("a==c")
                }
                if(a===c){
                    console.log("a===c") // we will get false bcz it will compare datatype and value also so ans is false   
                }                           //both are true then only it will give the ans
                                  // if false it will not give 