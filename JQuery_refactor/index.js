$.ajax({
    url: "https://jsonplaceholder.typicode.com/todos",
    success: function (data) {
        // get response test and assign it to a variable and then parse it into an array of objects
        let users = data;
        console.log(users);
        // let users = JSON.parse(resptext);
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
        let myCont = $('<div></div>')
            .attr("id", `user${currID}`)
            .css("margin-bottom", "15px");
        $('body').append(myCont);
        let myH = $('<h2></h2>');
        $(`#user${currID}`).append(myH);
        myH.text(`User ${currID}`);
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
                let myP = $('<p></p>');
                $(`#user${currID}`).append(myP);
                myP.text(pText);

            } else {
                currID = user.userId;
                //create div
                let myCont = $('<div></div>')
                    .attr("id", `user${currID}`)
                    .css("margin-bottom", "15px");
                $('body').append(myCont);
                let myH = $('<h2></h2>');
                $(`#user${currID}`).append(myH);
                myH.text(`User ${currID}`);

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
                let myP = $('<p></p>');
                $(`#user${currID}`).append(myP)
                myP.text(pText);
            }
        }
    }
})