function checkperfectnum()
            {
                let num1=parseFloat(document.getElementById('num1').value);
                let resultElement = document.querySelector('h2');
                if(isNaN(num1)||num1<=0)
            {
                alert("Please enter valid number");
                resultElement.textContent="Result: Invalid input";
                return;
            }
                if (num1 === 0) {
                resultElement.textContent = "Result: 0 is not a perfect number";
                return;
            }
            let c=0;
            for(let i=1;i<num1;i++)
            {
                if(num1%i==0)
            {
                c=c+i;
            }
            }
            if(c==num1)
            {
                resultElement.textContent =`Result: ${num1} is a perfect number`;
            }
            else{
                resultElement.textContent=`Result: ${num1} is not a perfect number` ;
            }
            }