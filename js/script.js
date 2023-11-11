

function f1() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', "http://localhost:8081/");

    xhr.onload = function() {
        console.log(xhr.status);
        console.log(xhr.response);
    }
    console.log(onload)
}

f1();