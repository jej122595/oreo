



// sec04
const backImg = $('.sec04 .back_img');
const chr = $('.chr');


// sec05
const imgListInner = $('.sec05 .img_list_inner')
const sec05ImgInner = $('.sec05 .img_inner')



//높이=sec04높이=뷰포트 높이//
let sec04Height = $('.sec04').height() - window.innerHeight;

let sec05Height =$('.sec05').height() - window.innerHeight;





$(window).on('scroll', (e)=>{
    let sec04scrollValue = window.scrollY - document.getElementById('section04').offsetTop;

    let sec05scrollValue = window.scrollY - document.getElementById('section05').offsetTop;



    let sec04Perheight = (sec04scrollValue / sec04Height) *100;
    let sec05Perheight = (sec05scrollValue / sec05Height) *100;
    if(sec04scrollValue >=0) {




    
    chr. eq(0).css('left',45+(5 / 100 * sec04Perheight) + '%')
    chr. eq(0).css('bottom',5 + (45 / 100 *  sec04Perheight) + '%')

    chr. eq(1).css('left',45+(5 / 100 * sec04Perheight) + '%')
    chr. eq(1).css('bottom',15 + (35 / 100 *  sec04Perheight) + '%')

    chr. eq(2).css('left',45+(5 / 100 * sec04Perheight) + '%')
    chr. eq(2).css('bottom',25 + (25 / 100 *  sec04Perheight) + '%')

    backImg.css('transform', 'translateX(-'+(sec04Perheight)+'%')

    
    }


    if(sec04scrollValue >= -100){
        
        if(sec04Perheight > 99){
            $('.sec04 .ufo_wrap').fadeOut();
        }else{
            $('.sec04 .ufo_wrap').fadeIn();
        }
    }else{
        $('.sec04 .ufo_wrap').fadeOut();
    } 


    if(sec05scrollValue >= -100){

        console.log(sec05scrollValue)
        
        if(sec05Perheight > 99){
            $('.sec05 .sec_flex_box').fadeOut();
        }else{
            $('.sec05 .sec_flex_box').fadeIn()
            $('.sec05 .sec_flex_box').css('display','flex')
        }

        if(sec05Perheight < 33 ){
            sec05ImgInner.slideDown();
            imgListInner.css('transform','translteX(0)');
            imgListInner.eq(0).css('transform', `translateX(-${(sec05Perheight > 0 ? sec05Perheight -10 : 0.33) * 3 + -1}%)`)

        }else if(sec05Perheight < 66)
        {sec05ImgInner.eq(0).slideUp();
            sec05ImgInner.eq(1).slideDown();
            sec05ImgInner.eq(2).slideDown();
            imgListInner.eq(1).css('transform', `translateX(-${(sec05Perheight -33) * 3 + -1}%)`)
        }

        else if(sec05Perheight < 97)
            {sec05ImgInner.eq(0).slideUp();
                sec05ImgInner.eq(1).slideUp();
                sec05ImgInner.eq(2).slideDown();
                imgListInner.eq(2).css('transform', `translateX(-${(sec05Perheight -66) * 3 + -1}%)`)
            }

        else {
                sec05ImgInner.slideUp();
            }



    }else{
        $('.sec05 .sec_flex_box').fadeOut();
    } 

// sec06


const sec06BtnEnd = $('.sec06 .end');
const sec06BtnNight = $('.sec06 .night');
const sec06Tit = $('.sec06_tit');


sec06BtnEnd.on('mouseenter',()=>{
    sec06Tit.addClass('fallen');

})


sec06BtnNight.on('mouseenter',()=>{
    sec06Tit.removeClass('fallen');

})




// const box = $('.box')
//     box.css('top', (scrollValue/5) + 'px')



})


// $('.sec05 .img_list_wrap .img_list_inner') .slideUp()