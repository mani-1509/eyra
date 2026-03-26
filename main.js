const sendAudio = async (audioUri) => {
  const formData = new FormData();

  formData.append("audio", {
    uri: audioUri,
    type: "audio/wav",
    name: "telugu2.wav",
  });

  const res = await fetch(
    "https://flappiest-marianela-unconstructive.ngrok-free.dev/transcribe",
    {
      method: "POST",
      body: formData,
    },
  );

  const data = await res.json();
  console.log(data.text);
};
