document.addEventListener("DOMContentLoaded", startFn);

function startFn()
{
    // 메뉴 스크롤
    let menu = document.querySelectorAll("nav ul li");
    let contents = document.querySelectorAll(".itemBox");

    let scrollPos = 0;
    let targetScrollPos;
    let nowScrollPos = scrollY;
    
    let scrollAni;

    window.addEventListener("scroll", scrollFn);

    function scrollFn()
    {
        nowScrollPos = scrollY;
        scrollPos = nowScrollPos;
    }

    for(let i = 0; i < menu.length; i++)
    {
        menu[i].addEventListener("click", 
            function()
            {
                let index = this.getAttribute("clickNum");
                console.log(index);

                targetScrollPos = contents[index].offsetTop;
                console.log(targetScrollPos);

                scrollAni = requestAnimationFrame(moveTo);
            }
        );
    }

    function moveTo()
    {
        scrollPos += (targetScrollPos - nowScrollPos) * 0.05;
        window.scroll(0, scrollPos);

        if (Math.abs(targetScrollPos - nowScrollPos) <= 1)
        {
            window.scroll(0, targetScrollPos);
            cancelAnimationFrame(scrollAni);
        }
        else
        {
            scrollAni = requestAnimationFrame(moveTo);
        }
    }


    //사례 1
    let case1Box = document.querySelector(".line1 .card-item"); 
    let modal1 = document.querySelector("#modal1");     
    let close1 = modal1.querySelector(".close-btn");   

    case1Box.addEventListener("click", function() {
        modal1.classList.add("active");
        document.documentElement.style.overflow = "hidden";
        document.body.style.overflow = "hidden";
    });

    close1.addEventListener("click", function(e) {
        e.stopPropagation(); // 부모 박스로 클릭 이벤트 전파 방지
        modal1.classList.remove("active");
        document.documentElement.style.overflow = "auto";
        document.body.style.overflow = "auto";
    });


    // 사례2
    let case2Box = document.querySelector(".line2 .card-item"); 
    let modal2 = document.querySelector("#modal2");     
    let close2 = modal2.querySelector(".close-btn");   

    case2Box.addEventListener("click", function() {
        modal2.classList.add("active");
        document.documentElement.style.overflow = "hidden";
        document.body.style.overflow = "hidden";
    });

    close2.addEventListener("click", function(e) {
        e.stopPropagation();
        modal2.classList.remove("active");
        document.documentElement.style.overflow = "auto";
        document.body.style.overflow = "auto";
    });


    // 사례3
    let case3Box = document.querySelector(".line3 .card-item"); 
    let modal3 = document.querySelector("#modal3");     
    let close3 = modal3.querySelector(".close-btn");   

    case3Box.addEventListener("click", function() {
        modal3.classList.add("active");
        document.documentElement.style.overflow = "hidden";
        document.body.style.overflow = "hidden";
    });

    close3.addEventListener("click", function(e) {
        e.stopPropagation();
        modal3.classList.remove("active");
        document.documentElement.style.overflow = "auto";
        document.body.style.overflow = "auto";
    });

    // 스크롤 애니
    let revealElements = document.querySelectorAll(".reveal");

    let spyObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            } else {
                entry.target.classList.remove("active");
            }
        });
    }, {
        threshold: 0.1
    });

    revealElements.forEach(function(el) {
        spyObserver.observe(el);
    });

    // 단어
    let wordSets = document.querySelectorAll(".word-set");

    wordSets.forEach(function(set) {
        let btn = set.querySelector(".word-btn");

        btn.addEventListener("click", function(e) {
            e.stopPropagation();

            wordSets.forEach(function(otherSet) {
                if (otherSet !== set) {
                    otherSet.classList.remove("active");
                }
            });

            set.classList.toggle("active");
        });
    });

    document.addEventListener("click", function() {
        wordSets.forEach(function(set) {
            set.classList.remove("active");
        });
    });
}