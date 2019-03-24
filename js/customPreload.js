function Progress(gameInstance, progress) {
    console.log("#Progress started..");

    this.progress = progress;
    this.message = "Loading...";

    this.SetProgress = function (progress) { 
        if (this.progress < progress)
            this.progress = progress; 
            this.Update();
        if (this.progress >= 1) {
//            this.SetMessage("Preparing...");
//            document.getElementById("bgBar").style.display = "none";
//            document.getElementById("progressBar").style.display = "none";
            this.Clear();
        }         
    }

    this.SetMessage = function (message) { 
        this.message = message; 
        this.Update();
    }

    this.Clear = function() {
        document.getElementById("loadingBox").style.display = "none";
    }

    this.Update = function() {
        var length = 200 * Math.min(this.progress, 1);
        bar = document.getElementById("progressBar");
        // if (bar != null) {
            bar.style.width = length + "px";
        // }
        info = document.getElementById("loadingInfo");
        // if (info != null) {
            info.innerHTML = this.message;
        // }
    }

    this.updateProgress = function(step) {
        console.log("Updating progress: " + this.progress);
        this.progress += step;
        this.SetProgress();
    }

    this.SetProgress();
}