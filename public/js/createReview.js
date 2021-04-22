const newCommentHandler = async(event) => {
    event.preventDefault();

    const id = document.querySelector("#reviewpost-id").value.trim();
    const content = document.querySelector("#review-content").value.trim();

    if (content) {
        const response = await fetch(`/movie/:${id}/review`, {
            method: "POST",
            body: JSON.stringify({ comment_content: content }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.ok) {
            document.location.replace(`/movie/:${id}`);
        } else {
            alert("Failed to create review");
        }
    }
};

document.querySelector(".new-comment-form").addEventListener("submit", newCommentHandler);