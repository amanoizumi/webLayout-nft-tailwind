$(function () {
  // 導覽列 input 切換
  function toggleSearchInputFn() {
    if ($("#searchInput").hasClass("hidden")) {
      $("#searchInput, #angleLeftBtn").removeClass("hidden");
      $("#logo").addClass("hidden");
    } else {
      $("#searchInput, #angleLeftBtn").addClass("hidden");
      $("#logo").removeClass("hidden");
    }
  }
  $("#toggleSearchInput, #angleLeftBtn").on("click", toggleSearchInputFn);

  // 導覽列下發選單切換
  function toggleNavDropdownFn() {
    console.log(1);
    if ($("#navDropdown").hasClass("hidden")) {
      $("#navDropdown").removeClass("hidden");
    } else {
      $("#navDropdown").addClass("hidden");
    }
  }
  $("#toggleNavDropdown").on("click", toggleNavDropdownFn);
});
