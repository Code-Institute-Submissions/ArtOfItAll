$(document).ready(function () {
    var calendarElmt = document.getElementById("show-artist1")

    var calendar = new FullCalendar.Calendar(calendarElmt, {
        plugins: ['dayGrid'],
        events: [
            {
                id: 'a',
                title: 'Personal Time',
                daysOfWeek:[ 0],
            },
            {
                id: 'b',
                title: 'Public Piece',
                start: '2020-04-27',
                end: '2020-04-30',
            },
            {
                id: 'b',
                title: 'Request',
                start: '2020-04-30',
            },
            {
                id: 'c',
                title: 'Request Piece',
                start: '2020-04-6',
                end: '2020-04-11',
            },
            {
                id: 'd',
                title: 'Releasing New Pieces',
                start: '2020-04-13',
                end: '2020-04-18',
            },
            {
                id: 'e',
                title: 'Public Piece',
                start: '2020-04-20',
                end: '2020-04-23',
            }
        ]
    });

    calendar.render();
});

$(document).ready(function () {
    var calendarElmt = document.getElementById("show-artist2")

    var calendar = new FullCalendar.Calendar(calendarElmt, {
        plugins: ['dayGrid'],
        events: [
            {
                id: 'a',
                title: 'Personal Time',
                daysOfWeek:[ 0],
            },
            {
                id: 'b',
                title: 'Public Piece',
                start: '2020-04-27',
                end: '2020-04-30',
            },
            {
                id: 'c',
                title: 'Request Piece',
                start: '2020-04-6',
                end: '2020-04-11',
            },
            {
                id: 'd',
                title: 'Public Piece',
                start: '2020-04-13',
                end: '2020-04-17',
            },
            {
                id: 'e',
                title: 'Public Piece',
                start: '2020-04-20',
                end: '2020-04-23',
            }
        ]
    });

    calendar.render();

});

$(document).ready(function () {
    var calendarElmt = document.getElementById("show-artist3")

    var calendar = new FullCalendar.Calendar(calendarElmt, {
        plugins: ['dayGrid'],
        events: [
            {
                id: 'a',
                title: 'Personal Time',
                daysOfWeek:[ 5],
            },
            {
                id: 'a',
                title: 'Public Piece',
                start: '2020-04-21',
                end: '2020-04-26',
            }
        ]
    });

    calendar.render();
});

$(document).ready(function () {
    var calendarElmt = document.getElementById("show-artist4")

    var calendar = new FullCalendar.Calendar(calendarElmt, {
        plugins: ['dayGrid'],
        events: [
            {
            },
            {
                id: 'a',
                title: 'Public Piece',
                start: '2020-04-21',
                end: '2020-04-26',
            }
        ]
    });

    calendar.render();
});

$(document).ready(function () {
    var calendarElmt = document.getElementById("show-artist5")

    var calendar = new FullCalendar.Calendar(calendarElmt, {
        plugins: ['dayGrid'],
        events: [
            {
                id: 'a',
                title: 'Personal Time',
                daysOfWeek:[ 5, 6],
            },
            {
                id: 'a',
                title: 'Public Piece',
                start: '2020-04-21',
                end: '2020-04-26',
            }
        ]
    });

    calendar.render();
});

$(document).ready(function () {
    var calendarElmt = document.getElementById("show-artist6")

    var calendar = new FullCalendar.Calendar(calendarElmt, {
        plugins: ['dayGrid'],
        events: [
            {
                id: 'a',
                title: 'Personal Time',
                daysOfWeek:[ 5, 6],
            },
            {
                id: 'a',
                title: 'Public Piece',
                start: '2020-04-21',
                end: '2020-04-26',
            }
        ]
    });

    calendar.render();
});

$(document).ready(function () {
    var calendarElmt = document.getElementById("show-artist7")

    var calendar = new FullCalendar.Calendar(calendarElmt, {
        plugins: ['dayGrid'],
        events: [
            {
                id: 'a',
                title: 'Personal Time',
                daysOfWeek:[ 0, 6],
            },
            {
                id: 'a',
                title: 'Public Piece',
                start: '2020-04-21',
                end: '2020-04-26',
            }
        ]
    });

    calendar.render();

});

$(document).ready(function () {
    var calendarElmt = document.getElementById("show-artist8")

    var calendar = new FullCalendar.Calendar(calendarElmt, {
        plugins: ['dayGrid'],
        events: [
            {
                id: 'a',
                title: 'Personal Time',
                daysOfWeek:[ 6],
            },
            {
                id: 'a',
                title: 'Public Piece',
                start: '2020-04-21',
                end: '2020-04-26',
            }
        ]
    });

    calendar.render();
});

$(document).ready(function () {
    var calendarElmt = document.getElementById("show-artist9")

    var calendar = new FullCalendar.Calendar(calendarElmt, {
        plugins: ['dayGrid'],
        events: [
            {
                id: 'a',
                title: 'Personal Time',
                daysOfWeek:[ 0, 6],
            },
            {
                id: 'a',
                title: 'Public Piece',
                start: '2020-04-21',
                end: '2020-04-26',
            }
        ]
    });

    calendar.render();
});

$(document).ready(function () {
    var calendarElmt = document.getElementById("show-artist10")

    var calendar = new FullCalendar.Calendar(calendarElmt, {
        plugins: ['dayGrid'],
        events: [
            {
                id: 'a',
                title: 'Personal Time',
                daysOfWeek:[ 1, 2],
            },
            {
                id: 'a',
                title: 'Public Piece',
                start: '2020-04-21',
                end: '2020-04-26',
            }
        ]
    });

    calendar.render();
});

$(document).ready(function () {
    $("div.calendar").hide()
    $('#changeCalendar').on('change', function () {
        var chosenOption = $(this).val();
        $("div.calendar").hide();
        $("#show" + chosenOption).show();
    });
});