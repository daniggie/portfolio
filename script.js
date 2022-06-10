function change(id) {
    $("#who").removeClass("who");
    $("#do").removeClass("do");
    $("#art").removeClass("art");

    $("#" + id).addClass(id);
}