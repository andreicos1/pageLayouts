disclaimer = `<footer class="footer">
The layout templates design were obtained from <a href="https://www.quackit.com/html/templates" target="_blank">Quackit</a>.
</footer>`

////////////////////////////////////////////////////////
// FLEX
flexboxButtons = `
<div class="flexbox-layouts">
    <h2 class="heading-secondary"> Flexbox Layouts </h2>
    <div class="flexbox-buttons">
        <button class="btn" flex-layout-1 onclick="addLayout('flex-layout-1', flexLayout1)">
            Flexbox Layout 1
        </button>

        <button class="btn" flex-layout-2 onclick="addLayout('flex-layout-2', flexLayout2)">
            Flexbox Layout 2
        </button>

        <button class="btn" flex-layout-3 onclick="addLayout('flex-layout-3', flexLayout3)">
            Flexbox Layout 3
        </button>

        <button class="btn" flex-layout-4 onclick="addLayout('flex-layout-4', flexLayout4)">
            Flexbox Layout 4
        </button>

        <button class="btn button-holy-grail-layout" onclick="addLayout('holy-grail-layout', flexLayout1)">
            Flexbox Holy Grail Layout
        </button>
    </div>
</div>
`

flexLayout1 = `
<div class="layout">
    <header>
        Header
    </header>

    <nav>
        Nav
    </nav>

    <article>
        Article

        <button class="button-reset" onclick="ResetButton()"> 
        Reset 
        </button>

        <p>  </p>
    </article>

    <aside>
        Aside
    </aside>

    <footer>
        Footer
    </footer>
</div>`


flexLayout2 = `
<div class="layout">
    <div class="col-1">
        <nav>
            Nav
        </nav>
    </div>

    <div class="col-2">
        <header>
            Header
        </header>
        
        <main>
            <article>
                Article

                <button class="button-reset" onclick="ResetButton()"> 
                Reset 
                </button>

                <p>  </p>
            </article>

            <aside>
                Aside
            </aside>
        </main>

        <footer>
            Footer
        </footer>
    </div>
</div>`

flexLayout3 = `
<div class="layout">
    <div class="col-1">
        <nav>
            Nav
        </nav>
    </div>

    <div class="col-2">
        <header>
            Header
        </header>
        
        <article>
            Article

            <button class="button-reset" onclick="ResetButton()"> 
            Reset 
            </button>

            <p>  </p>
        </article>

        <footer>
            Footer
        </footer>
    </div>
</div>`


flexLayout4 = `
<div class="layout">
    <div class="col-1">
        <nav>
            Nav
        </nav>
    </div>

    <div class="col-2">
        <header>
            Header
        </header>
        
        <main>
            <div class="left-content">
                <article>
                    Article

                    <button class="button-reset" onclick="ResetButton()"> 
                    Reset 
                    </button>

                    <p>  </p>
                </article>

                <footer>
                    Footer
                </footer>
            </div>
            <aside>
                Aside
            </aside>
        </main>
        
    </div>
</div>`

////////////////////////////////////////////////////////
// GRID
gridButtons = `
<div class="grid-layouts">
    <h2 class="heading-secondary"> Grid Layouts </h2>
    <div class="grid-buttons">
        <button class="btn" onclick="addLayout('grid-layout-1', gridLayout)">
            Grid Layout 1
        </button>

        <button class="btn"  onclick="addLayout('grid-layout-2', gridLayout)">
            Grid Layout 2
        </button>

        <button class="btn"  onclick="addLayout('grid-layout-3', gridLayout)">
            Grid Layout 3
        </button>

        <button class="btn" onclick="addLayout('grid-layout-4', gridLayout)">
            Grid Layout 4
        </button>

        <button class="btn" onclick="addLayout('grid-layout-5', gridLayout)">
            Grid Layout 5
        </button>

        <button class="btn" onclick="addLayout('grid-layout-6', gridLayout)">
            Grid Layout 6
        </button>

        <button class="btn" onclick="addLayout('grid-layout-7', gridLayout)">
            Grid Layout 7
        </button>

        <button class="btn" onclick="addLayout('grid-layout-8', gridLayout)">
            Grid Layout 8
        </button>

        <button class="btn" onclick="addLayout('grid-layout-9', gridLayout)">
            Grid Layout 9
        </button>

        <button class="btn" onclick="addLayout('grid-layout-10', gridLayout)">
            Grid Layout 10
        </button>
    </div>
</div>
`

gridLayout = `
<div class="layout">
    <header>
        Header
    </header>

    <nav>
        Nav
    </nav>

    <article>
        Article

        <button class="button-reset" onclick="ResetButton()"> 
        Reset 
        </button>

        <p>  </p>
    </article>

    <aside>
        Aside
    </aside>

    <footer>
        Footer
    </footer>
</div>`


/////////////////////////////////////////////////////////
function addStartingPage(){
    $("body").prepend("<main class='start-page'> </main>")
    addGridButtons();
    addFlexButtons();
    $("main").append(disclaimer);
}

/////////////////////////////////////////////////////
// FLEX
function addFlexButtons(){
    $("main").prepend(flexboxButtons);
}

function ResetButton(){
    // Fades Out the current layout, removes it. Adds the Starting Page
    $(".layout").css('-webkit-animation', 'fadeOut 200ms');
    $(".layout").bind("webkitAnimationEnd", function(){
        $(".layout").remove();
        addStartingPage();
    })
}

function addLayout(layoutClass, layoutName){
    /*  
    Fades out the Starting Page, removes it's elements, and adds the input layout.
    Input:  layoutClass --> The class name of the specific layout    (string)
            layoutName  --> The name of the layout's global variable (html code)
    */
    $(".flexbox-layouts").css('-webkit-animation', 'fadeOut 200ms');
    $(".grid-layouts").css('-webkit-animation', 'fadeOut 200ms');
    $(".footer").css('-webkit-animation', 'fadeOut 200ms');
    $(".flexbox-layouts").bind("webkitAnimationEnd", function(){
        $("main").remove();
        // $(".flexbox-layouts").remove();
        // $(".grid-layouts").remove();
        // $(".footer").remove();
        $("body").prepend(layoutName);
        $(".layout").addClass(layoutClass);
    })
}

///////////////////////////////////////////////////////////////
// GRID
function addGridButtons(){
    $("main").prepend(gridButtons);
}

