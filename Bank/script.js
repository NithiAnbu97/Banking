
    let accounts=[];
    let limit = 100000;
    let data = JSON.parse(localStorage.getItem("acc"));

    if(data !== null){
        accounts=data;
    }
    let initial_accNo=1000;

    //Task 1- Create

    function Create(val){
       
            let accountNo = initial_accNo+accounts.length+1;
            accounts.push({name:val,accNo:accountNo,balance:500,deposit_limit:0,withdraw_limit:0})
            localStorage.setItem("acc",JSON.stringify(accounts));
            return accountNo;
    }

    //Call the function with parameters in the console




    //Task 2- Deposit

    function Deposit(id,amount){
        if(amount<500){
            return "Minimum deposit amount is 500"
        }else if(amount>50_000){
            console.log("Maximum deposit amount is 50,000");
        }else{
           let existUser =  accounts.filter(e=>e.accNo==id);
           if(!existUser[0]){
            console.log("User does not exist");
            
           }else if(existUser[0].deposit_limit>=3){
               console.log("Only 3 deposite are allowed per day");
               existUser[0].deposit_limit =0;
           }else{
                if(existUser[0].balance+amount>limit){
                    console.log("Can't deposite over the limit 1,00,000");
                }else{
                    existUser[0].deposit_limit += 1;
                    existUser[0].balance += amount;
                    localStorage.setItem("acc",JSON.stringify(accounts));
                    return existUser[0].balance;
                }
           }

        }

    }
    //Call the function with parameters in the console

    //Task -3 Balance

    function Balance(id){
        let existUser =  accounts.filter(e=>e.accNo==id);
           if(!existUser[0]){
            console.log("User does not exist");
            
           }else{
            return existUser[0].balance;
           }
    }
    //Call the above function with parameters in the console
   

    //Task - 4 Withdraw
    function Withdraw(id,amount){
        
        if(amount<1000){
            console.log("Minimum withdraw amount is 1,000");
        }else if(amount>25_000){
            console.log("Maximum withdraw amount is 25,000");
        }else{
           let existUser =  accounts.filter(e=>e.accNo==id);
           if(!existUser[0]){
            console.log("User does not exist");
            
           }else if(existUser[0].withdraw_limit>=3){
               console.log("Only 3 withdraw are allowed per day");
               existUser[0].withdraw_limit=0;
           }else{
                if(existUser[0].balance<amount){
                    console.log("Insufficient balance");
                }else if(existUser[0].balance-amount<1){
                    console.log("Account balance cannot be less than 0");
                }else{
                    existUser[0].withdraw_limit += 1;
                    existUser[0].balance -= amount;
                    localStorage.setItem("acc",JSON.stringify(accounts));
                    return existUser[0].balance;
                }
           }

        }

    }
    //Call the above function with parameters in the console

    //Task - 5 Transfer
    function Tranfer(sender,reciver,amount){
        let sen =  accounts.filter(e=>e.accNo==sender);
        let res =  accounts.filter(e=>e.accNo==reciver);
        if(!sen[0]){
          console.log("The Sender Account_no was not exist");       
        }else if(!res[0]){
          console.log("The Reciver Account_no was not exist");
        }else{
            if(sen[0].balance<amount){
                console.log("Insufficient balance");
            }else if(sen[0].balance-amount<1){
                console.log("Account balance cannot be less than 0");
            }else if(sen[0].accNo==1002 && amount<1000){
                console.log("Minimum withdrawal amount is 1,000 for account 1002");
            }else if(sen[0].accNo==1002 && amount>25000){
                console.log("Maximum withdrawal amount is 25,000 for account 1002");
            }
            else{
                sen[0].balance -= amount;
                res[0].balance += amount;
                localStorage.setItem("acc",JSON.stringify(accounts));
                return "Successful"
            }
        }
    }
  

    
     
    

  
    