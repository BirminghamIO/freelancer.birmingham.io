$(function (){
    //load spreadsheet
    var mySpreadsheet = 'https://docs.google.com/spreadsheets/d/1r8eOnzNUdPiFMvzM1LQfhFDMFpI2fWwUH01xDBvA3f0/edit#gid=1338714353';

    $('#freelancerslist').sheetrock({
        url: mySpreadsheet,
        chunkSize: 100,
        sql: 'select B,C,D,F,E,H,G,I order by A desc',
        userCallback: function() {
            links();
            twitter();
            birminghamIO();
            tableFilterApplication();
        }
    });
});

// Add Website Links
function links() {
    var websiteEl = $('#freelancerslist td:nth-child(6)');
    websiteEl.each(function(index) {
        var link = $(this).text();
        $(this).wrapInner('<a target="_blank" href="'+ link +'" />');
    });
}

// Add Twitter links
function twitter() {
    var twitterEl = $('#freelancerslist td:nth-child(7)');
    twitterEl.each(function(index) {
        var link = "http://twitter.com/";
        var text = $(this).text();
            text = text.replace("@", "");
        link += text;
        $(this).wrapInner('<a target="_blank" href="'+ link +'" />');
    });
}

// Add Birmingham.IO Links
function birminghamIO() {
    var twitterEl = $('#freelancerslist td:nth-child(8)');
    twitterEl.each(function(index) {
        var link = "https://talk.birmingham.io/users/";
            link += $(this).text();

        $(this).wrapInner('<a target="_blank" href="'+ link +'" />');
    });
}

// Add a table filter
function tableFilterApplication() {
    $('#freelancerslist').filterTable({
        quickList: ['Branding', 'Graphic Design', 'JavaScript', 'PHP'],
        placeholder: "Search this list"
    });

     // add boostrap style to table
    $('#freelancerslist').addClass('table table-striped table-hover');
}