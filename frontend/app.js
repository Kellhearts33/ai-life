
document.addEventListener("DOMContentLoaded", function() {
    const button = document.createElement("button");
    button.innerText = "Send Message";
    button.onclick = async function() {
        const response = await fetch("http://localhost:5000/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: "Hello AI" })
        });
        const data = await response.json();
        alert(data.response);
    };
    document.getElementById("root").appendChild(button);
});
