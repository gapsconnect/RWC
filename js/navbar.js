$(document).ready(function() {
    // Load the navbar
    $.get('navbar.html', function(data) {
        $('#navbar-placeholder').html(data);

        // Now that the navbar is loaded, attach event handlers
        $('.menu-bar > li > a').click(function(e) {
            e.preventDefault();
            var $submenu = $(this).siblings('.sub-menu');
            $('.sub-menu').not($submenu).slideUp('fast');
            $submenu.slideToggle('fast');
        });

        $('.sub-menu > li > a').click(function(e) {
            e.preventDefault();
            var $submenu = $(this).siblings('.sub-menu');
            $('.sub-menu').not($submenu).slideUp('fast');
            $submenu.slideToggle('fast');
        });

        $(document).click(function(e) {
            if (!$(e.target).closest('.navbar').length) {
                $('.sub-menu').slideUp('fast');
            }
        });

        // Highlight the current page link
        const currentPage = window.location.pathname.split('/').pop();
        console.log(window.location.pathname)
        console.log($(this).attr('href'))
        $('#navbar-placeholder a').each(function() {
            if ($(this).attr('href') === currentPage) {
                $(this).addClass('active');
            }
        });

        // Provided code handling submenu behavior using vanilla JavaScript
        document.addEventListener('DOMContentLoaded', function() {
            // Get all menu items that have a submenu
            const menuItems = document.querySelectorAll('.nav-menu li:has(.sub-menu) > a');

            menuItems.forEach(menuItem => {
                menuItem.addEventListener('click', function(event) {
                    event.preventDefault();
                    const parentLi = menuItem.parentElement;
                    const submenu = parentLi.querySelector('.sub-menu');
                    
                    // Toggle the active class to show/hide the submenu
                    if (parentLi.classList.contains('active')) {
                        parentLi.classList.remove('active');
                    } else {
                        // Close all open submenus
                        document.querySelectorAll('.nav-menu li.active').forEach(li => li.classList.remove('active'));
                        parentLi.classList.add('active');
                    }
                });
            });

            // Close submenu if clicking outside of menu
            document.addEventListener('click', function(event) {
                if (!event.target.closest('.nav-wrapper')) {
                    document.querySelectorAll('.nav-menu li.active').forEach(li => li.classList.remove('active'));
                }
            });

            // Prevent submenu closing when clicking inside submenu
            const subMenus = document.querySelectorAll('.sub-menu');
            subMenus.forEach(subMenu => {
                subMenu.addEventListener('click', function(event) {
                    event.stopPropagation();
                });
            });
        });
    });
});
