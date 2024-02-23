document.addEventListener('DOMContentLoaded', function() {
    const feed = document.querySelector('.feed');

    window.addEventListener('scroll', () => {
        if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
            const newPost = feed.lastElementChild.cloneNode(true);
            feed.appendChild(newPost);
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.comment-form').forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent the form from submitting traditionally

            const commentInput = this.querySelector('.comment-input');
            const commentText = commentInput.value.trim();

            if (commentText) {
                // Create the comment element
                const newComment = document.createElement('p');
                newComment.textContent = commentText;
                newComment.classList.add('comment');

                // Append the comment to the comments container of this post
                const commentsContainer = this.nextElementSibling;
                commentsContainer.appendChild(newComment);

                // Clear the input after submitting
                commentInput.value = '';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.comment-form').forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const commentInput = this.querySelector('.comment-input');
            const commentText = commentInput.value.trim();
            if (commentText) {
                const newComment = document.createElement('p');
                newComment.textContent = commentText;
                const commentsContainer = this.nextElementSibling;
                commentsContainer.appendChild(newComment);
                commentInput.value = '';
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Handle like button click
    document.querySelectorAll('.reaction').forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
});

