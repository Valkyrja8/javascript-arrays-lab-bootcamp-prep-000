var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten (name){
  kittens.push("Ralph");
  return name;
}

function destructivelyPrependKitten (name){
  kittens.unshift("Bob");
  return name;
}

function destructivelyRemoveLastKitten (){
  kittens.pop("Ralph");
  return destructivelyRemoveLastKitten;
}

function destructivelyRemoveFirstKitten (){
  kittens.shift("Bob");
  return destructivelyRemoveLastKitten;
}

function appendKitten(name){
  return [...kittens, "Broom"];
}

function prependKitten(name){
  return [...kittens, "Broom"];
}