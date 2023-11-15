$(document).ready(function() {
    // 모든 section 태그를 선택합니다
    var sections = document.getElementsByTagName('section');

    // offset 정보를 표시할 div 요소를 선택합니다
    var infoContainer = document.getElementById('offsetInfo');

    // 각 section에 대해 반복 처리합니다
    for (var i = 0; i < sections.length; i++) {
        // 새로운 p 요소를 생성합니다
        var infoElement = document.createElement('p');

        // p 요소의 내용을 현재 section의 id와 offsetTop 값으로 설정합니다
        infoElement.textContent = sections[i].id + ': ' + sections[i].offsetTop;

        // p 요소를 infoContainer에 추가합니다
        infoContainer.appendChild(infoElement);
    }


    let firstLink = document.getElementById('firstLink');
let otherLinks = document.getElementsByClassName('otherLinks');

for(let i=0; i<otherLinks.length; i++) {
    otherLinks[i].addEventListener('mouseover', function() {
        firstLink.style.color = 'rgb(113, 113, 113)';
    });
    otherLinks[i].addEventListener('mouseout', function() {
        firstLink.style.color = 'white';
    });
}
});