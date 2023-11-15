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
                        { pos: 2900, action: () => {
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
            });
            
            });