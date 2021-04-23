// const newCommentHandler = async(event) => {
//     event.preventDefault();

//     const id = document.querySelector("#reviewpost-id").value.trim();
//     const content = document.querySelector("#review-content").value.trim();

//     if (content) {
//         const response = await fetch(`/movie/:${id}/review`, {
//             method: "POST",
//             body: JSON.stringify({ comment_content: content }),
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         });

//         if (response.ok) {
//             document.location.replace(`/movie/:${id}`);
//         } else {
//             alert("Failed to create review");
//         }
//     }
// };

// document.querySelector(".new-comment-form").addEventListener("submit", newCommentHandler);var rate = 0;

function submitRate() {
    var user = document.getElementById('user').value;
    var review = document.getElementById('review').value;
    if (rate != 0 && user != "" && review != "") {
        var html =
            "<h4>User: <label class='text-primary'>" + user + "</label></h4>" +
            "<h4>Rating: <label class='text-primary'>" + rate + "</label></h4>" +
            "<h4>Review</h4>" +
            "<p>" + review + "</p>" +
            "<hr style='border-top:1px solid #000;'/>";
        document.getElementById('result').innerHTML += html;
        document.getElementById('user').value = "";
        document.getElementById('review').value = "";
    }
}

function startRating(item) {
    rate = item.id[0];
    sessionStorage.star = rate;
    for (var i = 0; i < 5; i++) {
        if (i < rate) {
            document.getElementById((i + 1)).style.color = "yellow";
        } else {
            document.getElementById((i + 1)).style.color = "black";
        }
    }
}