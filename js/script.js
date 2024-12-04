
function displayDate() {
    const now = new Date();
    const format = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    const currentDayDate = now.toLocaleString('en-US', format);
    // console.log(currentDayDate);    
    document.getElementById("date").textContent = currentDayDate;
}
displayDate();






