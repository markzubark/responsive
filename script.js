function preloader() {
    function hidePreloader() {
        $(".preloader").delay(7000).fadeOut("slow");
        $("#overlayer").delay(7000).fadeOut("slow");
    };
    $(window).load(function () {
        hidePreloader()
    });
}
preloader();


function registerPlaceholderAnimation() {
    $("#register > .firstName").click(function () {
        $("#firstNamePlaceholder").animate({
            marginTop: "-10px"
        });
        $("#firstNamePlaceholder").animate({
            right: "0"
        })
    });
    $("body").click(function (event) {
        if (!$(event.target).is("#register > .firstName")) {
            var rightValue = "130px";
            if ($(window).width() <= 520) {
                rightValue = "90px";
            }

            $("#firstNamePlaceholder").animate({
                right: rightValue
            });
            $("#firstNamePlaceholder").animate({
                marginTop: "10px"
            })
        }
    });
    $("#register > .lastName").click(function () {
        $("#lastNamePlaceholder").animate({
            marginTop: "-5px"
        });
        $("#lastNamePlaceholder").animate({
            right: "0"
        })
    });
    $("body").click(function (event) {
        if (!$(event.target).is("#register > .lastName")) {
            var rightValue = "130px";
            if ($(window).width() <= 520) {
                rightValue = "90px";
            }
            $("#lastNamePlaceholder").animate({
                right: rightValue
            });
            $("#lastNamePlaceholder").animate({
                marginTop: '10px'
            })
        }
    });
    $("#register > .email").click(function () {
        $("#emailPlaceholder").animate({
            marginTop: "-5px"
        });
        $("#emailPlaceholder").animate({
            right: "0"
        })
    });
    $("body").click(function (event) {
        if (!$(event.target).is("#register > .email")) {
            var rightValue = "130px";
            if ($(window).width() <= 520) {
                rightValue = "90px";
            }
            $("#emailPlaceholder").animate({
                right: rightValue
            });
            $("#emailPlaceholder").animate({
                marginTop: '10px'
            })
        }
    });

    $("#register > .password").click(function () {
        $("#passwordPlaceholder").animate({
            marginTop: "-5px"
        });
        $("#passwordPlaceholder").animate({
            right: "0"
        })
    });
    $("body").click(function (event) {
        if (!$(event.target).is("#register > .password")) {
            var rightValue = "130px";
            if ($(window).width() <= 520) {
                rightValue = "90px";
            }
            $("#passwordPlaceholder").animate({
                right: rightValue
            });
            $("#passwordPlaceholder").animate({
                marginTop: '10px'
            })
        }
    });

    $("#register > .confirmPassword").click(function () {
        $("#confirmPasswordPlaceholder").animate({
            marginTop: "-5px"
        });
        $("#confirmPasswordPlaceholder").animate({
            right: "0"
        })
    });
    $("body").click(function (event) {
        if (!$(event.target).is("#register > .confirmPassword")) {
            var rightValue = "130px";
            if ($(window).width() <= 520) {
                rightValue = "90px";
            }
            $("#confirmPasswordPlaceholder").animate({
                right: rightValue
            });
            $("#confirmPasswordPlaceholder").animate({
                marginTop: '10px'
            })
        }
    });

}

registerPlaceholderAnimation()


function loginPlaceholderAnimation() {
    $("#userEmail").click(function () {
        $("#loginEmailPlaceholder").animate({
            top: "-20px",
        });
        $("#loginEmailPlaceholder").animate({
            right: "0"
        });
    });
    $("body").click(function (event) {
        var rightValue = "130px";
        if ($(window).width() <= 520) {
            rightValue = "90px";
        }
        if (!$(event.target).is("#userEmail")) {
            $("#loginEmailPlaceholder").animate({
                right: rightValue
            });
            $("#loginEmailPlaceholder").animate({
                top: "0px"
            })
        }
    });

    $("#userPassword").click(function () {
        $("#loginPasswordPlaceholder").animate({
            top: "40px",
        });
        $("#loginPasswordPlaceholder").animate({
            right: "0"
        })
    });
    $("body").click(function (event) {
        if (!$(event.target).is("#userPassword")) {
            var rightValue = "130px";
            if ($(window).width() <= 520) {
                rightValue = "90px"
            }

            $("#loginPasswordPlaceholder").animate({
                right: rightValue
            });
            $("#loginPasswordPlaceholder").animate({
                top: "70px"
            })
        }
    })


};
loginPlaceholderAnimation();

function getSideBarMenu() {
    $("#link-menu").toggle(400);

    var mouseOverMenu = false;
    var intervalId = setInterval(function () {
        if (!mouseOverMenu) {
            $("#link-menu").hide(700);
            clearInterval(intervalId);
        }
    }, 5000);

    $("#link-menu").on("mouseover", function () {
        mouseOverMenu = true;
    }).on("mouseout", function () {
        mouseOverMenu = false;
    });
}


function getRegisterMenu() {
    var registerMenu = $("#register-menu");
    if (registerMenu.css("display") == "none") {
        registerMenu.css("display", "grid"), 100;
    } else {
        registerMenu.css("display", "none"), 100
    }
};


function getLoginForm() {
    var loginPage = $("#form-box");
    if (loginPage.css("display") == "none") {
        loginPage.css("display", "block");

        window.addEventListener("click", function (event) {
            if (!loginPage.is(event.target) && loginPage.has(event.target).length === 0) {
                loginPage.css("display", "none")
            }
        });

        var loginFormBtn = $("#loginFormButton");
        loginFormBtn.on("click", function (event) {
            event.stopPropagation();
        })
    } else {
        loginPage.css("display", "none"), 400
    }
}

function getRegisterForm() {
    var registerFrom = document.getElementById("register-form-box");
    var registerMenu = document.getElementById("register-menu");

    if (registerFrom.style.display === "none") {
        registerFrom.style.display = "block";
        registerMenu.style.display = "none";

        window.addEventListener("click", function (event) {
            if (event.target !== registerFrom && !registerFrom.contains(event.target)) {
                registerFrom.style.display = "none";
            }
        });

        var registerButton = document.getElementById("register-button");
        registerButton.addEventListener("click", function (event) {
            event.stopPropagation();
        });
    } else {
        registerFrom.style.display = "none";
    }
}

function darkMode() {
    const toggleIcon = document.querySelector(".toogle-icon");
    toggleIcon.addEventListener("click", () => {
        toggleIcon.classList.toggle('bx-sun');
        document.body.classList.toggle('dark-mode');
    })
}
darkMode();


// function clearScreen() {
//     var loginForm = document.getElementById("form-box");
//     var registerForm = document.getElementById("register-form-box");
//     var registerMenu = document.getElementById("register-menu");
//     var sidebar = document.getElementById("link-menu");

//     window.addEventListener("click", function (event) {
//         if (loginForm.style.display === "grid" || loginForm.style.display === "block") {
//             loginForm.style.display = "none";
//         }
//         if (registerForm.style.display === "grid" || registerForm.style.display === "block") {
//             registerForm.style.display = "none";
//         }
//         if (registerMenu.style.display === "grid" || registerMenu.style.display === "block") {
//             registerMenu.style.display = "none";
//         }
//         if (sidebar.style.display === "grid" || sidebar.style.display === "block") {
//             sidebar.style.display = "none";
//         }
//     });
// }

// clearScreen();

$(document).ready(function () {
    animate();
});

// Miracle this is a must Learn Animation 

function animate() {
    // Fade in the third element
    $('.third').css('border-color', 'var(--main-color)').delay(300).queue(function(next) {
      // Fade in the second element
      $('.second').css('border-color', 'var(--primary-color)').delay(300).queue(function(next) {
        // Fade in the first element
        $('.first').css('border-color', 'var(--main-color)').delay(300).queue(function(next) {
          // Remove the active class from all elements
          $('.first, .second, .third').removeClass('active');
  
          // Fade out all elements
          $('.first, .second, .third').css('border-color', 'transparent');
  
          next();
        });
        next();
      });
      next();
    });
  
    // Add the active class to the first element
    $('.first').addClass('active');
  
    // Restart the animation
    setTimeout(animate, 2000);
  }
  
  











