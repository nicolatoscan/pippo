<script>
	function parti() {
        let vid = document.getElementById("myVideo"); 
        //remove class hide
        vid.classList.remove("hide");
        vid.play();
	}
</script>

<div class="header">
    <div class="title">
        <h1> <span class="black">Car<span class="orange">Hub</span></span></h1>
        <h2>Let's accelerate the development of autonomous vehicles</h2>
    </div>

    <video id="myVideo" class="hide" src="../images/video.mp4" controls="true"></video>

    <div class="action">
        <button on:click={parti} >Book Now</button>
    </div>
</div>

<style lang="less">
    .hide {
        display: none;
    }
    .header {
        background-image: url(../images/header.jpeg);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-attachment: fixed;

        .title {
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