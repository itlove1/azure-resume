window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCont();
})

const functionApi = '';

const getVisitCont = () => {
    let count = 81;
    fetch(functionApi).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}