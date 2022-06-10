function change(id) {
    $("#who").removeClass("who");
    $("#do").removeClass("do");

    $("#" + id).addClass(id);
}