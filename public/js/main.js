btn.addEventListener('click', () => {
    //alert("work")
    let baseUrl = 'http://localhost:3000/test';
    let myTst1 = parm1.value;
    //let myTst2 = parm2.value;

    //baseUrl += `?tst1=${myTst1}&tst2=${myTst2}`;
    baseUrl += `?tst1=${myTst1}`;
    alert(baseUrl);

    fetch(baseUrl).then((res) => {
        res.text().then((data) => {
            //console.log(data)
                result.innerHTML = data;
                //parm2.value = `Sent and Received back: ${data.recParm2}`;
        })
    })
})