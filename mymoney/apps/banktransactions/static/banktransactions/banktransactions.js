;(function($){

    if (typeof calendar_template_path === 'undefined') {
        return;
    }

    $(document).ready(function() {

        var options = {
            tmpl_path: calendar_template_path,
            events_source: calendar_events_url,
            view: 'month',
            day: 'now',
            modal: "#events-modal",
            modal_type: "ajax",
            modal_title: function(event) {
                return event.extra_data.label;
            },
            onAfterViewLoad: function(view) {
                $('#calendar-title').text(this.getTitle());
                $('.btn-group button').removeClass('active');
                $('button[data-calendar-view="' + view + '"]').addClass('active');
            },
        };

        if (typeof language_code !== 'undefined') {
            parts = language_code.split('-');
            if (parts.length > 1) {
                parts[1] = parts[1].toUpperCase();
            }
            options['language'] = parts.join('-');
        }

        var calendar = $("#calendar").calendar(options);

        $('.btn-group button[data-calendar-nav]').click(function(event) {
            calendar.navigate($(this).data('calendar-nav'));
        });

        $('.btn-group button[data-calendar-view]').click(function(event) {
            calendar.view($(this).data('calendar-view'));
        });
    });

})(jQuery);
