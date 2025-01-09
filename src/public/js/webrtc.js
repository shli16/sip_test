// This example uses Janus to create or join a room with ID 1234 (hardcoded)
const webrtcClient = (() => {
    let janus = null;
    let pluginHandle = null;
  
    async function startCall() {
      // Initialize Janus library
      Janus.init({
        debug: "all",
        callback: () => {
          // Create Janus instance
          janus = new Janus({
            server: "ws://localhost:8188", // Janus WebSocket endpoint
            success: onJanusSuccess,
            error: onJanusError
          });
        }
      });
    }
  
    function onJanusSuccess() {
      // Attach to VideoRoom plugin
      janus.attach({
        plugin: "janus.plugin.videoroom",
        success: handle => {
          pluginHandle = handle;
          console.log("Plugin attached. Handle ID:", pluginHandle.getId());
  
          // Create/Join a room
          createOrJoinRoom(1234);
        },
        error: err => {
          console.error("Error attaching plugin:", err);
          alert("Error attaching VideoRoom plugin");
        },
        onmessage: (msg, jsep) => {
          // handle plugin messages
          console.log("Got a message:", msg);
          if (jsep) {
            pluginHandle.handleRemoteJsep({ jsep });
          }
        },
        onlocalstream: stream => {
          // display local video
          const localVideo = document.getElementById('localVideo');
          localVideo.srcObject = stream;
        },
        onremotestream: stream => {
          // display remote video
          const remoteVideo = document.getElementById('remoteVideo');
          remoteVideo.srcObject = stream;
        }
      });
    }
  
    function onJanusError(error) {
      console.error("Janus error:", error);
      alert("Janus error. Check console for details.");
    }
  
    function createOrJoinRoom(roomId) {
      // Simple approach: try to join as a publisher
      // you can customize request payload
      const joinReq = {
        request: "join",
        room: roomId,
        ptype: "publisher",
        display: "MyUsername" // or from user config
      };
      pluginHandle.send({ message: joinReq });
    }
  
    return {
      startCall
    };
})();
  