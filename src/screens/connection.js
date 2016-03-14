// Connection screen : shows connection status, tries to automatically connect, offers the option to manually enter parameters

var ConnectionScreen = Screen.extend({
    enter: function(){
        // Save screen html
        this.html = $("#connection_screen");

        // Display this screen 
        $("screen").addClass('hidden');
        this.html.removeClass('hidden');

        // Add handlers
        this.html.find(".btn-connect").click(function(){ fabrica.screens.connection.attempt_connection(); });
    },

    attempt_connection: function(){
        fabrica.machine.attempt_connection({
            ip: this.html.find(".input-ip").val(),
            failure: this.connection_failure
        });
    },

    connection_failure: function(){
        // Display an error message that connecting to this specific IP failed
        var html = fabrica.screens.connection.html;
        html.find(".error-ip").removeClass("hidden");
        html.find(".error-ip kbd").html(html.find(".input-ip").val());
    },

    on_succesful_connection: function(){
        // Called by machine when a succesful connection has been made
    }

});

fabrica.add_screen( 'connection', new ConnectionScreen() );
