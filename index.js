
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        // get response test and assign it to a variable and then parse it into an array of objects
        let resptext = xhttp.responseText;
        let users = JSON.parse(resptext);
        //variable for text from title key to display in p
        let tText = '';
        //symbol to be used in p string
        let sym = '';
        //combined string
        let pText;


        // console.log(users, 'testing the parsing of the response text');
        //variable to track user ID
        let currID = 1;
        //crete div that is then inserted, style it and put text in it
        let myCont = document.createElement('div');
        myCont.setAttribute("id", `user${currID}`);
        myCont.style.marginBottom = '15px';
        document.querySelector('body').appendChild(myCont);
        let myH = document.createElement('h2');
        document.querySelector(`#user${currID}`).appendChild(myH);
        myH.textContent = `User ${currID}`
        for (let user of users) {
            if (user.userId === currID) {
                // console.log(currID);
                // console.log(user);

                //insert p

                // console.log(key);
                // console.log(users[key]);
                //assign the title key's value to pText
                if (user.title) {
                    tText = user.title;
                }

                if (user.completed === true) {
                    sym = '✔️';
                } else {
                    sym = '⭕️';
                }
                pText = `${sym} ${tText}`;


                //insert <p> and append to div
                let myP = document.createElement('p');
                document.querySelector(`#user${currID}`).appendChild(myP);
                myP.textContent = pText;

            } else {
                currID = user.userId;
                // console.log(currID, 'test value of currID in else side');
                document.createElement('div');
                //create div
                let myCont = document.createElement('div');
                myCont.setAttribute("id", `user${currID}`);
                myCont.style.marginBottom = '15px';
                document.querySelector('body').appendChild(myCont);
                // console.log(myCont, 'see how the cont is iterating through the loop when the main if condition is not true');
                //create and append header
                myH = document.createElement('h2');
                document.querySelector(`#user${currID}`).appendChild(myH);
                myH.textContent = `User ${currID}`

                //insert p

                //loop over keys in user
                for (const key in users) {
                    //assign the title key's value to pText
                    if (key === 'title') {
                        tText = users[key];
                    }

                    if (key === 'status' & users[key] === 'completed') {
                        sym = '✔️';
                    } else {
                        sym = '⭕️';
                    }
                    pText = `${sym} ${tText}`;
                }

                //insert <p> and append to div
                let myP = document.createElement('p');
                document.querySelector(`#user${currID}`).appendChild(myP);
                myP.textContent = pText;
            }
        }
    }
};
xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
xhttp.send();
