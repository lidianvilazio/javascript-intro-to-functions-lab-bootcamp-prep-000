
if(string.toUpperCase() === "HELLO") {
  whisper();
} else if(string.toLowerCase() === "hello") {
  shout();
}

function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return  string.toLowerCase()
}
