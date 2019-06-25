var ytStart = (function($) {

  var video = {
    "w": 460,
    "h": 260,
    "id": "0VTPeRFqAeY"
  };
  var player;

  function onPlayerReady(event) {
    event.target.playVideo();
  }

  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
      $(player.getIframe()).hide();
      $("#splash").show();
    }
  }

  function play() {
    $("#splash").hide();
    $(player.getIframe()).show();
    player.playVideo();
  }

  function newPlayer() {
    player = new YT.Player("player", {
      width: video.w,
      height: video.h,
      videoId: video.id,
      events: {
        "onReady": onPlayerReady,
        "onStateChange": onPlayerStateChange
      }
    });
    $("#splash").click(play);
  }

  function load() {
    $("script").attr("src", "https://www.youtube.com/embed/IYu3Z5tr0RQ").insertBefore("script");
    $("#splash").hide();
  }

  $(function() {
    $("#splash").one("click", load);
  });

  return newPlayer;

})(jQuery);

function onYouTubeIframeAPIReady() {
  ytStart();
}