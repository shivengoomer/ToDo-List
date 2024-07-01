let myArray=[];
        function addtask(){
            
            const inputElement=document.querySelector('.input-task');
            const dateElement=document.querySelector('.date-task');
            const name= inputElement.value;
            const duedate= dateElement.value;
            myArray.push({
                name:name,
                Date:duedate
            });
            console.log(myArray);
            
        }
        function renderTask(){
            let inputValue='';
            for(i=0;i<myArray.length;i++){
                const memeber=myArray[i]
                const name=memeber.name;
                const Date=memeber.Date;
                const element=`
                    <div>${name}</div>
                    <div> ${Date}</div>
                    <button onclick="myArray.splice(${i},1);
                    renderTask();"
                    class="delete-button">Delete</button>
                    `;
               inputValue +=element;
            }
            document.querySelector('.rs').innerHTML=inputValue;
        }
        document.querySelector('.add-button').addEventListener('click',()=>{
            addtask();
            renderTask();
        });