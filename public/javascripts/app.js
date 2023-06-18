$(() => {
    //Menu toggle and animation:
    const $menuButton = $(".menu")
    const $navBar = $(".links")
        $menuButton.on('click',() => {
            $menuButton.toggleClass("morph");
            $navBar.toggleClass("hidden");
        })
});
