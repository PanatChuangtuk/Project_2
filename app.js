let age = prompt('กรุณากรอกอายุของคุณ');
if (age > 13) {
  document.getElementById('content').innerHTML =
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/ybvkdiwI83c?si=31J5RxfELg5UTU_b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
}
