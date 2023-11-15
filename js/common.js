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
            $(document).ready(function () {
                const scrollSection = $('#main3');
                const scrollContent = $('.Wrap');
            
                $(window).on('scroll', function () {
                    $('#toTop').click(function() {
                        $('html, body').stop().animate({scrollTop: 0}, 800);
                    });
                    var documentHeight = $(document).height();
                    var windowHeight = $(window).height();
                    var scrollPos = $(window).scrollTop();
                    var scrollableHeight = documentHeight - windowHeight;
                    let fadedOut = false;
                    var cardHeight = $('.card').height();
                    var wrapHeight = $('.Wrap').height();
                    var bottomValue = cardHeight - wrapHeight;
                    
                    const actions = [ 
                        { pos: 3000, action: () => { 
                            $('.Wrap').fadeOut();
                        }}, 
                        { pos: 2800, action: () => {
                            $('.Wrap').fadeIn();
                            $('#textBox').fadeIn();
                        }},                       
                        { pos: 2600, action: () => { 
                            $('#item4').css('left', '430px'); 
                            $('#textBox').css("left","880px");
                            $('#textBox').fadeOut();
                            gsap.to('.Wrap', { position: "fixed", top: "270px" });
                            } },

                        { pos: 2300, action: () => { 
                            $('#item3').css('left', '430px'); 
                            $('#item4').css('left', '780px'); 
                            //$('#textBox').css("left","1230px");
                            $('#textBox').hide();
                            gsap.to('.Wrap', { position: "fixed", top: "270px" });
                            } },
                        { pos: 2000, action: () => { 
                            $('#item2').css('left', '430px'); 
                            $('#item3').css('left', '780px');
                            $('#item4') .css('left','1130px');
                            //$("#textBox").css("left","1480px")
                            gsap.to('.Wrap', { position: "fixed", top:"270px",left:"0px"});
                            
                        }},
                        {
                            pos : 0,
                            action : ()=> {
                                gsap.to(".Wrap",{
                                    position:"static"
                                })
                                $("#textBox").hide()
                                $("#item1").css("left","430px")
                                $("#item2").css("left","780px")
                                $("#item3").css("left","1130px")
                                $("#item4").css("left","1480px")
                                //$("#textBox").css("left","1960px")
                            fadeOutApplied = true;
                            }
                        }
                    ];
            
                    for(let i=0; i<actions.length; i++) {
                        if(scrollPos >= actions[i].pos) {
                            actions[i].action();
                            break;
                        }
                    }
                });
            //     if ($(this).scrollTop() > 200) {
            //         $('#toTop').fadeIn();
            //     } else {
            //         $('#toTop').fadeOut();
            //     }
            // });
        
           
            });
            var content = {
                1: {
                    img: './Img/function/1.png',
                    mainText: '조이스틱 조작법 숙련을<br> 위한 훈련 시작',
                    subText: '사용자는 콘텐츠 조작법을 익힐수 있습니다. '
                },
                2: {
                    img: './Img/function/2.png',
                    mainText: '보트를 타고 성공적으로<br> 밧줄을 묶어라!',
                    subText: '사용자는 보트에 탑승하여 정착 후<br> 메인 콘텐츠를 즐기게 됩니다. '
                },
                3: {
                    img: './Img/function/3.png',
                    mainText: '200고지를<br> 탈환하라!',
                    subText: '사용자는 주어진 총기와 한정된 수류탄을 가지고<br> 적군에게서 200고지를 탈환해야 합니다.'
                },
                4: {
                    img: './Img/function/4.png',
                    mainText: '진입로에 폭탄을 <br>설치하고 봉쇄하라!',
                    subText: '사용자는 지정된 위치에 폭탄을 설치하고<br> 빠르게 떠나야 합니다!'
                },
                5: {
                    img: './Img/function/5.png',
                    mainText: '적군을 해치우며<br> 배까지 전진하라!',
                    subText: '사용자는 눈앞에 적들을 해치우고<br> 배까지 전진하여만 합니다.'
                },
                6: {
                    img: './Img/function/6.png',
                    mainText: '구조선을 타고 <br>탈출하라!',
                    subText: '사용자는 앞선 적들을 해치우고 배에 탑승하면<br> 그에 따른 엔딩을 볼수 있습니다.'
                },
            };
        
            window.onload = function() {
                window.changeContent = function(num) {
                    var selectedContent = content[num];
                    document.getElementById('function-img').src = selectedContent.img;
                    document.getElementById('function-p').innerHTML = selectedContent.mainText;
                    document.getElementById('subfunction-p').innerHTML = selectedContent.subText;
                }
            }
        });