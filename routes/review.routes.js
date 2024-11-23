const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();
const {
  getAllReviews,
  getReview,
} = require("../controllers/review.controller");

// 유저가 작성한 모든 리뷰 불러오기
router.get("/", authMiddleware, getAllReviews);

// 기존 리뷰 불러오기
router.get("/:id", authMiddleware, getReview);

module.exports = router;