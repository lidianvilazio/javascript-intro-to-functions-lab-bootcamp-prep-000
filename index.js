
if(string.toUpperCase() === "HELLO") {
  whisper();
} else if(string.toLowerCase() === "hello") {
  shout();
  sayHiToGrandma();
}

function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return  string.toLowerCase()
}

function sayHiToGrandma(string) {
  return "I can't hear you!"
}
