let currentIndex = 1;
const totalReviews = 4;

  function changeReview() {
    currentIndex = (currentIndex % totalReviews) + 1;
    updateReview();
  }
  function changeReviewBack() {
    currentIndex = (currentIndex - 2 + totalReviews) % totalReviews + 1;
    updateReview();
  }

  function updateReview() {
    for (let i = 1; i <= totalReviews; i++) {
    const review = document.getElementById(`review${i}`);
    review.style.display = i === currentIndex ? "block" : "none";
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    // Hide all boxes initially
    updateReview();
  });