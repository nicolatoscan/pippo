<script>
	function parti() {
        let vid = document.getElementById("myVideo"); 
        //remove class hide
        vid.classList.remove("hide");
        vid.play();
	}
</script>

<div>
    <div class="header block">
        <div class="title-box">
            <h1> <span class="black">Car<span class="orange">Hub</span></span></h1>
            <h2>Let's accelerate the development of autonomous vehicles</h2>
        </div>
        
        <video id="myVideo" class="hide" src="./images/video.mp4" controls="true"></video>
        
        <div class="action">
            <button on:click={parti} >Book Now</button>
        </div>
    </div>

    <div class="block due">
        <div class="title-box">
            <p class="title">Schedule a test today</p>
            <p class="text">Drive your car in the best automated rotonde in the market</p>
        </div>
    </div>
</div>

<style lang="less">
    .hide {
        display: none;
    }
    .block {
        &.header {
            background-image: url(../images/header.jpeg);
            background-attachment: fixed;
        }
        &.due {
            background-image: url(../images/due.jpeg);
            align-items: flex-end;

            .title-box {
                color: white;
                text-align: right;
                margin-right: 3rem;
                
            }
        }
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;

        .title-box {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-top: 10vh;
        }


        h1, h2 {
            margin: 0;
            text-align: center;
            padding: 0 2em;
            color: #444;
            display: inline-block;
        }

        h1 {
            margin-bottom: 1rem;
            font-size: 6rem;
        }

        .action {
            position: absolute;
            bottom: 10vh;
        }
        button {
            background-color: #f60;
            border: none;
            border-radius: 5px;
            padding: 1rem 2rem;
            color: #fff;
            font-size: 1.5rem;
            cursor: pointer;
            transition: all 0.2s ease-in-out;

            &:hover {
                background-color: #f90;
            }
        }
    }
</style>