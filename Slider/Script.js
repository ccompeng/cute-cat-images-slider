const images = [
    "./images/cat1.jpg",
    "./images/cat2.jpg",
    "./images/cat3.jpg",
    "./images/cat4.jpg",
    "./images/cat5.jpg",
    "./images/cat6.jpg",
    "./images/cat7.jpg",
]

$(function () {
    let index = 0;
    let imagesLength = images.length;

    //
    //
    // images to show at launch
    $(".left-img img").attr("src", images[imagesLength - 1]);
    $(".main-img img").attr("src", images[0]);
    $(".right-img img").attr("src", images[index + 1]);

    //
    //
    // to next image
    $("#nextBtn").on("click", function () {
        // The front image will go to the left
        // the next image will come to the front 
        // to add the animation classes set for this
        $(".main-img img").addClass("nextAnimMainImg");
        $(".right-img img").addClass("nextAnimRightImg");

        // Remove these classes so can run the same animations on every click (after 800ms)
        setTimeout(() => {
            $(".main-img img").removeClass("nextAnimMainImg");
            $(".right-img img").removeClass("nextAnimRightImg");
        }, 800);

        // set which image will come
        // in the temporary image section 
        // showing which image is next
        if (index < imagesLength - 2) {
            $(".right-temp img").attr("src", images[index + 2]);
        } else if (index == imagesLength - 2) {
            $(".right-temp img").attr("src", images[0]);
        } else {
            $(".right-temp img").attr("src", images[1])
        }

        // set index on click
        if (index < imagesLength - 1) {
            index++;

            // after 800ms 
            // what is written in the function is realized
            setTimeout(() => {
                $(".left-img img").attr("src", images[index - 1]);
                $(".main-img img").attr("src", images[index]);
                $(".right-img img").attr("src", images[index + 1]);

                if (index == imagesLength - 1) {
                    $(".right-img img").attr("src", images[0]);
                }
            }, 800);
        } else {
            index = 0;

            // after 800ms 
            // what is written in the function is realized
            setTimeout(() => {
                $(".left-img img").attr("src", images[imagesLength - 1]);
                $(".main-img img").attr("src", images[index]);
                $(".right-img img").attr("src", images[index + 1]);
            }, 800);
        }
    })

    //
    //
    // to prev image
    $("#prevBtn").on("click", function () {
        // The front image will go to the right
        // the prev image will come to the front 
        // to add the animation classes set for this
        $(".main-img img").addClass("prevAnimMainImg");
        $(".left-img img").addClass("prevAnimLeftImg");

        // Remove these classes so can run the same animations on every click (after 800ms)
        setTimeout(() => {
            $(".main-img img").removeClass("prevAnimMainImg");
            $(".left-img img").removeClass("prevAnimLeftImg");
        }, 800);

        // set which image will come
        // in the temporary image section 
        // showing which image is prev
        if (index > 1) {
            $(".left-temp img").attr("src", images[index - 2]);
        } else if (index == 1) {
            $(".left-temp img").attr("src", images[imagesLength - 1]);
        } else {
            $(".left-temp img").attr("src", images[imagesLength - 2]);
        }

        // set index on click
        if (index > 0) {
            index--;

            // after 800ms 
            // what is written in the function is realized
            setTimeout(() => {
                $(".left-img img").attr("src", images[index - 1]);
                $(".main-img img").attr("src", images[index]);
                $(".right-img img").attr("src", images[index + 1]);

                if (index == 0) {
                    $(".left-img img").attr("src", images[imagesLength - 1]);
                }
            }, 800);

        } else {
            index = imagesLength - 1;

            // after 800ms 
            // what is written in the function is realized
            setTimeout(() => {
                $(".left-img img").attr("src", images[index - 1]);
                $(".main-img img").attr("src", images[index]);
                $(".right-img img").attr("src", images[0]);
            }, 800);
        }
    })
})