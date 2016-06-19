// Move screen : allows moving the machine to a given position

var MoveScreen = Screen.extend({
    enter: function(){
        // Display this screen
        this.display('move_screen');

        // Handle button clicks
        var _that = this;
        ['x', 'y', 'z'].forEach(function(axis) {
            ['neg', 'pos'].forEach(function (direction) {
                _that.html.find(".btn-jog-" + axis + "-" + direction).off().click(function(){
                     fabrica.machine.jog(axis.toUpperCase(), (direction === "neg" ? -1 : 1), $(".jog-distance").val(), (axis === "z" ? $(".jog-z-feedrate").val() : $(".jog-xy-feedrate").val())); 
                });
            });
        });
        this.html.find(".btn-motors-off").off().click(function(){
            fabrica.machine.send_command("M18");
        });
    },

});


fabrica.add_screen('move', new MoveScreen()); 

