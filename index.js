
if(string.toUpperCase() === "HELLO") {
  whisper();
  sayHiToGrandma()
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
  if(string.toUpperCase() === "HELLO") {
    return "YES INDEED!"
  } else {
    return "I can't hear you!"
  }
}
