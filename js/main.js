$(function (){
    //load spreadsheet
    var mySpreadsheet = 'https://docs.google.com/spreadsheets/d/1r8eOnzNUdPiFMvzM1LQfhFDMFpI2fWwUH01xDBvA3f0/edit#gid=1338714353';

    $('#freelancerslist').sheetrock({
        url: mySpreadsheet,
        chunkSize: 100,
        sql: 'select B,C,D,F,E,H,G,J,I order by C asc, B asc',
        labels: ['Name', 'Availability', 'Working', 'Skills', 'Location', '<i class="fa fa-home" title="Website"></i>', '<i class="fa fa-twitter" title="Twitter"></i>', '<i class="fa fa-envelope" title="Email"></i>', '<i class="fa fa-cloud" title="Birmingham.io Profile"></i>'],
        userCallback: function() {
            links();
            twitter();
            email();
            birminghamIO();
            tableFilterApplication();
        }
    });

    $('[data-toggle="tooltip"]').tooltip();
});

// Add Website Links
function links() {
    var websiteEl = $('#freelancerslist td:nth-child(6)');
    websiteEl.each(function(index) {
        if ($(this).text().length) {
            var link = $(this).text();
            var text = $(this).text();

            $(this).html('<a href="'+ link +'" target="_blank" title="'+ text + '" class="link-external-link"><i class="fa fa-external-link"></i></a>');
        }
    });
}

// Add Twitter links
function twitter() {
    var twitterEl = $('#freelancerslist td:nth-child(7)');
    twitterEl.each(function(index) {
        if ($(this).text().length) {
            var link = "https://twitter.com/";
                link += $(this).text().replace("@", "");

            var text = $(this).text();

            $(this).html('<a href="'+ link +'" target="_blank" title="'+ text + '" class="link-twitter"><i class="fa fa-twitter"></i></a>');
        }
    });
}

// Add Email links
function email() {
    var twitterEl = $('#freelancerslist td:nth-child(8)');
    twitterEl.each(function(index) {
        if ($(this).text().length) {
            var link = "mailto:";
                link += $(this).text();

            var text = $(this).text();

            $(this).html('<a href="'+ link +'" target="_blank" title="'+ text + '" class="link-email"><i class="fa fa-envelope"></i></a>');
        }
    });
}

// Add Birmingham.IO Links
function birminghamIO() {
    var twitterEl = $('#freelancerslist td:nth-child(9)');
    twitterEl.each(function(index) {
        if ($(this).text().length) {
            var link = "https://talk.birmingham.io/users/";
                link += $(this).text();

            var text = $(this).text();

            $(this).html('<a href="'+ link +'" target="_blank" title="Birmingham.IO Profile: '+ text + '" class="link-cloud"><i class="fa fa-cloud"></i></a>');
        }
    });
}

// Add a table filter
function tableFilterApplication() {
    $('#freelancerslist').filterTable({
        quickList: [
            'Animation',
            'Branding',
            'Copywriting',
            'Graphic Design',
            'Illustration',
            'HTML, CSS',
            'JavaScript',
            '.NET',
            'PHP',
            'Python',
            'Ruby',
            'Go',
            'Java',
            'Node',
            'Mobile App Development',
            'iOS Development',
            'Android Development',
            'Windows Mobile Development',
            'Django',
            'Ruby on Rails',
            'CakePHP',
            'Laravel'
        ],
        placeholder: "Search this list",
        minRows: 1
    });

     // add boostrap style to table
    $('#freelancerslist').addClass('table table-striped table-hover');
}
