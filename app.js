class App

{
    runApplication()

    {
        let appnaam = "huts"
        let versienummer = 2
        let datum = Date()
        let autheur = "leon"
        let copyright = "ja"
        let distributeur = "ik"
        let darkmode = true
        console.log("hello world!");
        console.log(appnaam)
        console.log(versienummer)
        console.log(datum)
        console.log(autheur)
        console.log(copyright)
        console.log(distributeur)
        console.log(darkmode)
    }
}

let app = new App();
app.runApplication();