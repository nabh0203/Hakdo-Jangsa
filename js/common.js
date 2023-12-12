            $(document).ready(function () {
                var previousScroll = 0; // 여기에서 previousScroll 변수를 선언하고 초기값을 할당합니다.
                var i = 0;
                var images = ['../Img/mainBack.png', '../Img/mainBack2.png', '../Img/mainBack3.png', '../Img/mainBack4.png']; // 여기에 이미지 경로를 넣으세요.
                var intervalID = null;

                function changeBackground() {
                    if(i%2 == 0) {
                        $('.Main .top').css('background-image', 'url(' + images[i] + ')');
                        $('.Main .top').css('opacity', '1');
                        $('.Main .bottom').css('opacity', '0');
                    } else {
                        $('.Main .bottom').css('background-image', 'url(' + images[i] + ')');
                        $('.Main .bottom').css('opacity', '1');
                        $('.Main .top').css('opacity', '0');
                    }
                    i = i + 1;
                    if (i == images.length) {
                        i =  0;
                    }
                }
            
                setInterval(changeBackground, 5000);

                $('#toTop').click(function() {
                    $('html, body').stop().animate({scrollTop: 0}, 800);
                    if(intervalID) {
                        clearInterval(intervalID);
                    }
                    intervalID = setInterval(changeBackground, 1000);
                });
                $(window).on('scroll', function () {
                    var characterSectionTop = $(".Character").offset().top;
                    var characterSectionBottom = characterSectionTop + $(".Character").outerHeight();
                    var characterTextHeight = $(".CharacterText").outerHeight();
                    var currentScroll = $(this).scrollTop();
                    var relativeScroll = currentScroll - characterSectionTop;
                    

                    
                    if($(window).scrollTop() >= characterSectionTop && $(window).scrollTop() <= characterSectionBottom - characterTextHeight) {
                        if(currentScroll > previousScroll) { 
                            $(".CharacterText").css({"position": "fixed", "top": "0"});
                        } else { 
                            $(".CharacterText").css({"position": "fixed", "top": "0"});
                        }
                
                        if(relativeScroll < 980) {
                            // 학도병
                            $("#hackdo").css({"color": "white", "font-weight": "700"});
                            $("#south, #north").css({"color": "rgb(118,118 ,118)", "font-weight": "normal"});
                            $("#Hakcdo")[0].play();
                        } else if(relativeScroll >= 980 && relativeScroll < 2060) {
                            // 남한군
                            $("#south").css({"color": "white", "font-weight": "700"});
                            $("#hackdo, #north").css({"color": "rgb(118,118 ,118)", "font-weight": "normal"});
                            $("#South")[0].play();
                        } else {
                            // 북한군
                            $("#north").css({"color": "white", "font-weight": "700"});
                            $("#hackdo, #south").css({"color": "rgb(118,118 ,118)", "font-weight": "normal"});
                            $("#North")[0].play();
                        }
                    } else if ($(window).scrollTop() < characterSectionTop) {
                        $(".CharacterText").css({"position": "absolute", "top": "0px"});
                    } else {
                        $(".CharacterText").css({"position": "absolute", "top": "2260px"});
                    }
                
                    previousScroll = currentScroll;
                });
            });
            var content = {
                1: {img: './Img/function/1.png'},
                2: {img: './Img/function/2.png'},
                3: {img: './Img/function/3.png'},
                4: {img: './Img/function/4.png'},
                5: {img: './Img/function/6.png'}
            };
        
            window.onload = function() {
                window.changeContent = function(num, selectedElement) {
                    var selectedContent = content[num];
            
                    var imgElement = document.getElementById('function-img');
                    var mainTextElement = document.getElementById('function-p');
                    imgElement.style.opacity = 0;
            
                    setTimeout(function() {
                        imgElement.src = selectedContent.img;
                        imgElement.style.opacity = 1;
                    }, 500); 
            
                    var buttons = document.querySelectorAll('.bt');
                    for (var i = 0; i < buttons.length; i++) {
                        if (buttons[i] === selectedElement) {
                            buttons[i].style.color = 'white';
                        } else {
                            buttons[i].style.color = 'rgba(255, 255, 255, 0.23)';
                        }
                    }
                }
                var videoElement = document.getElementById('playvideo');
                var playButtonElement = document.getElementById('playbt');

                playButtonElement.addEventListener('click', function() {
                    if (videoElement.paused) {
                        videoElement.play();
                        playButtonElement.src = "./Img/Pausebt.png"; // 재생 버튼 이미지 변경
                        setTimeout(function() {
                            playButtonElement.style.opacity = '0';
                            playButtonElement.style.transition = 'opacity 1s ease-out';
                        }, 300);
                    } else {
                        videoElement.pause();
                        playButtonElement.src = "./Img/Pausebt.png"; // 일시정지 버튼 이미지 변경
                        playButtonElement.style.opacity = '1';
                        playButtonElement.style.transition = 'opacity 1s ease-out';
                    }
                });

                videoElement.addEventListener('click', function() {
                    if (videoElement.paused) {
                        videoElement.play();
                        playButtonElement.src = "./Img/Playbt.png";
                        playButtonElement.style.opacity = '0';
                        playButtonElement.style.transition = 'opacity 1s ease-out';
                    } else {
                        videoElement.pause();
                        playButtonElement.src = "./Img/Pausebt.png"; // 일시정지 버튼 이미지 변경
                        playButtonElement.style.opacity = '1';
                        playButtonElement.style.transition = 'opacity 1s ease-out';
                    }
});
            };